require('dotenv').config()

const fetch = require('node-fetch')
const path = require('path')
const { writeFile } = require('fs-extra')

const isProduction = process.env.NODE_ENV == "production"

const CACHE_FOLDER = isProduction
  ? path.join('/', 'opt', 'build', 'cache', 'gitcoinData')
  : path.resolve(__dirname, '', 'gitcoinData')

async function fetchData(url) {
  return fetch(url).then(res => res.json())
}

function getCompleteBounties() {
  return fetchData(
    'https://gitcoin.co/api/v0.1/bounties/?network=mainnet&idx_status=done&order_by=-_val_usd_db&org=centrifuge&limit=100',
  )
    .then(res => [
      {
        compensationPaid: res
          .map(bounty => Number(bounty.value_in_usdt_now))
          .reduce((acc, item) => acc + item, 0),
        bountiesCompleted: res.length,
      },
    ])
    .then(json => {
      return writeFile(
        path.join(CACHE_FOLDER, `LambdaGitcoinCompletedBounties.json`),
        JSON.stringify(json),
      )
    })
}

function getGitcoinHallOfFame() {
  const countBy = require('lodash.countby')
  const uniqBy = require('lodash.uniqby')

  return fetchData(
    'https://gitcoin.co/api/v0.1/bounties/?network=mainnet&idx_status=done&order_by=-_val_usd_db&org=centrifuge&limit=100',
  )
    .then(res => res.map(bounty => bounty.paid[0]))
    .then(res =>
      res.map(bounty => ({
        name: bounty,
        count: countBy(res)[bounty],
      })),
    )
    .then(res => uniqBy(res, 'name'))
    .then(json => {
      return writeFile(
        path.join(CACHE_FOLDER, `LambdaGitcoinHallOfFame.json`),
        JSON.stringify(json),
      )
    })
}

function getGitcoinOpenBounties() {
  const isEmpty = require('lodash.isempty')

  return fetchData(
    `https://gitcoin.co/api/v0.1/bounties/?network=mainnet&org=centrifuge&order_by=-_val_usd_db&limit=30`,
  )
    .then(res => res.filter(bounty => !['cancelled', 'done'].includes(bounty.status)))
    .then(res =>
      res.map(bounty =>
        Object.assign({}, bounty, {
          additional_funding_summary: !isEmpty(bounty.additional_funding_summary)
            ? bounty.additional_funding_summary
            : {
                DAI: {
                  amount: '0.00',
                },
              },
        }),
      ),
    )
    .then(json => {
      return writeFile(
        path.join(CACHE_FOLDER, `LambdaGitcoinOpenBounties.json`),
        JSON.stringify(json),
      )
    })
}

async function gitcoinCaching() {
  if (process.env.WEBHOOK_TITLE === 'CLEAR_CUSTOM_CACHE') {
    console.log(`Clearing ${CACHE_FOLDER}`)
    await emptyDir(CACHE_FOLDER)
  }

  try {
    await getCompleteBounties()
    await getGitcoinHallOfFame()
    await getGitcoinOpenBounties()
  } catch (err) {
    console.error(err)
  }
}

gitcoinCaching()
