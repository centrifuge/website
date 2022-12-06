import { Request, Response } from 'express'
import axios from 'axios'
import postgres from 'postgres'
import { Keyring } from '@polkadot/api'
import { u8aToHex } from '@polkadot/util'
import { getConfig } from './crowdloan-config'
import BN from 'bn.js'

const getReferralCodes = async (config, address) => {
  const { sql, REFERRAL_TABLE_NAME } = config
  const results = await sql`
    select referral_code from ${sql(REFERRAL_TABLE_NAME)} where wallet_address = ${address}
  `

  return results.map((result) => result.referral_code)
}

const getValidReferralCodes = async (config, referralCodes) => {
  const { sql, REFERRAL_TABLE_NAME } = config
  const results = await sql`
      select referral_code, wallet_address from ${sql(REFERRAL_TABLE_NAME)} where referral_code = any('{${sql(
    referralCodes
  )}}'::varchar[])
    `

  return results.map((result) => result.referral_code)
}

const getContributions = async (config, address) => {
  const keyring = new Keyring({ type: 'sr25519' })
  const hexPublicKey = u8aToHex(keyring.addFromAddress(address).publicKey)

  try {
    const { data } = await axios(`${config.URL_CONTRIBUTOR}?id=${hexPublicKey}`)

    return data
  } catch (error) {
    if (error.response.status === 404) {
      return []
    }

    console.log('error', error.message)
  }
}

const getAllContributions = async (config) => {
  const { data } = await axios(config.URL_CONTRIBUTIONS)

  return data
}

const getEarlyBirdBonus = (contributions) =>
  contributions
    .reduce((sum, contribution) => {
      if (contribution.earlyBird) {
        return sum.add(new BN(contribution.contribution).mul(new BN(10 ** 6)).mul(new BN(0.1).mul(new BN(430))))
      }

      return sum
    }, new BN(0))
    .toString()

const getFirstCrowdloanBonus = (contributions) => {
  const sortExtrinsics = (a, b) => {
    if (a.blockNumber === b.blockNumber) {
      if (a.index === b.index) {
        return 0
      } else if (a.index < b.index) {
        return -1
      }
      return 1
    } else if (a.blockNumber < b.blockNumber) {
      return -1
    }

    return 1
  }

  const sortedContributions = contributions.sort((a, b) => {
    return sortExtrinsics(a.extrinsic, b.extrinsic)
  })

  return new BN(sortedContributions[0].contribution)
    .mul(new BN(10 ** 6))
    .mul(new BN(0.1))
    .mul(new BN(430))
    .toString()
}

const getContributionAmount = (contributions) =>
  contributions.reduce((sum, contribution) => sum.add(new BN(contribution.contribution)), new BN(0)).toString()

const getOutgoingReferralBonus = async (config, contributions) => {
  const usedReferralCodes = contributions
    .filter((contribution) => contribution.referralCode)
    .map((contribution) => contribution.referralCode)

  const validReferralCodes = await getValidReferralCodes(config, usedReferralCodes)

  return contributions.reduce((sum, contribution) => {
    if (validReferralCodes.includes(contribution.referralCode)) {
      return sum.add(
        new BN(contribution.contribution)
          .mul(new BN(10 ** 6))
          .mul(new BN(0.05))
          .mul(new BN(430))
      )
    }

    return sum
  }, new BN(0))
}

const getIncomingReferralBonus = (allContributions, referralCodes) =>
  allContributions.reduce((sum, contribution) => {
    if (referralCodes.includes(contribution.referralCode)) {
      return sum.add(
        new BN(contribution.contribution)
          .mul(new BN(10 ** 6))
          .mul(new BN(0.05))
          .mul(new BN(430))
      )
    }

    return sum
  }, new BN(0))

export default async function getRewardData(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed. Use POST.')
  }

  const { address, parachain } = JSON.parse(req.body)
  const curConfig = getConfig(parachain)

  if (!curConfig.URL_CONTRIBUTIONS || !curConfig.URL_CONTRIBUTOR) {
    return res.status(200).send(
      JSON.stringify({
        address,
        contributionAmount: '0',
        earlyBirdBonus: '0',
        firstCrowdloanBonus: '0',
        numberOfReferrals: 0,
        referralBonus: '0',
      })
    )
  }

  curConfig.sql = postgres(curConfig.POSTGRES_CONFIG)

  const referralCodes = await getReferralCodes(curConfig, address)
  const contributions = await getContributions(curConfig, address)
  const allContributions = await getAllContributions(curConfig)

  const numberOfReferrals = allContributions.filter(({ referralCode }) => referralCodes.includes(referralCode)).length

  const earlyBirdBonus = getEarlyBirdBonus(contributions)

  const firstCrowdloanBonus =
    new BN(earlyBirdBonus).isZero() && contributions[0]?.isFirst250PrevCrwdloan
      ? getFirstCrowdloanBonus(contributions)
      : new BN(0)

  const contributionAmount = getContributionAmount(contributions)

  // this user used someone else's referral code
  const outgoingReferralBonus = await getOutgoingReferralBonus(curConfig, contributions)

  // someone used a referral code owned by this user
  const incomingReferralBonus = getIncomingReferralBonus(allContributions, referralCodes)

  const referralBonus = incomingReferralBonus.add(outgoingReferralBonus).toString()

  return res.status(200).send(
    JSON.stringify({
      address,
      contributionAmount,
      earlyBirdBonus,
      firstCrowdloanBonus,
      numberOfReferrals,
      referralBonus,
    })
  )
}
