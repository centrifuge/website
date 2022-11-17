import { Request, Response } from 'express'

export default function getExample(req: Request, res: Response) {
  return res.status(400).send('Hello world!')
}
