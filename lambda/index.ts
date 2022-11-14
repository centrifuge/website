import routes from './routes.json'
import { Request, Response } from 'express'

exports.handler = async (req: Request, res: Response) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:8000')
  res.set('Access-Control-Allow-Methods', 'GET')

  if (routes.length < 0) {
    return res.status(400).send('No functions defined')
  }

  for (let route of routes) {
    if (req.path.replace('/', '') === route.name) {
      const method = require(`./src/${route.name}`)

      return method.default(req, res, route?.options ?? {})
    }
  }
  return res.status(500).send('An error occured')
}
