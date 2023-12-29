import routes from './routes.json'
import { Request, Response } from 'express'

const corsWhitelist = [
  'http://localhost:8000',
  'https://centrifuge.io',
  'https://www.centrifuge.io',
  'https://website-staging.k-f.dev',
]
const testEnvRegex = new RegExp('https://preview-pr[0-9]*(.k-f.dev)')
const publicFunctions = ['/getCirculatingSupply', '/getTotalIssuance']

exports.handler = async (req: Request, res: Response) => {
  if (routes.length < 0) {
    return res.status(400).send('No functions defined')
  }

  const isPublicFunction = publicFunctions.includes(req.url)
  const origin = isPublicFunction ? '*' : req.get('origin')

  if (isPublicFunction || corsWhitelist.indexOf(origin) !== -1 || testEnvRegex.test(origin)) {
    res.set('Access-Control-Allow-Origin', origin)
    res.set('Access-Control-Allow-Methods', ['GET', 'POST'])
  } else {
    return res.status(405).send('Not allowed')
  }

  for (let route of routes) {
    if (req.path.replace('/', '') === route.name) {
      const method = require(`./src/${route.name}`)

      return method.default(req, res, route?.options ?? {})
    }
  }
  return res.status(500).send('An error occured')
}
