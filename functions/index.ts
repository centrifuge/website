import routes from './routes.json'
import { Request, Response } from 'express'

const corsWhitelist = [
  'http://localhost:8000',
  'https://centrifuge.io',
  'https://www.centrifuge.io',
  'https://website-staging.k-f.dev',
]
const testEnvRegex = new RegExp('https://preview-pr[0-9]*(.k-f.dev)')

exports.handler = async (req: Request, res: Response) => {
  // Check for redirects first
  const redirect = routes.find(route => route.source && req.path.endsWith(route.source));
  if (redirect) {
    return res.redirect(redirect.statusCode, redirect.destination);
  }

  // Existing CORS and route handling
  const origin = req.get('origin');
  if (corsWhitelist.indexOf(origin) !== -1 || testEnvRegex.test(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
    res.set('Access-Control-Allow-Methods', ['GET', 'POST']);
  } else {
    return res.status(405).send('Not allowed');
  }

  for (let route of routes) {
    if (route.name && req.path.replace('/', '') === route.name) {
      const method = require(`./src/${route.name}`);
      return method.default(req, res, route?.options ?? {});
    }
  }

  return res.status(500).send('An error occurred');
}
