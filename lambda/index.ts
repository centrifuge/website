import routes from './routes.json'
import { Request, Response } from 'express'

const corsWhitelist = ['http://localhost:8000', 'https://centrifuge.io']
const testEnvRegex = new RegExp('https://[a-z0-9-]*test-website-centrifuge-2022.netlify.app')

exports.handler = async (req: Request, res: Response) => {
  if (routes.length < 0) {
    return res.status(400).send('No functions defined')
  }

  const origin = req.get('origin')

  if (corsWhitelist.indexOf(origin) !== -1 || testEnvRegex.test(origin)) {
    res.set('Access-Control-Allow-Origin', origin)
    res.set('Access-Control-Allow-Methods', 'GET')
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
