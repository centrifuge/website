import axios from 'axios'

export default async function getCirculatingSupply(req, res) {
  const { data } = await axios.get('https://centrifuge.api.subscan.io/api/scan/token', {
    headers: {
      'X-API-Key': process.env.SUBSCAN_API_KEY,
    },
  })

  const availableBalance = data.data.detail.CFG.available_balance
  const circulatingSupply = availableBalance.substring(0, availableBalance.length - 18)

  res.send(circulatingSupply)
}
