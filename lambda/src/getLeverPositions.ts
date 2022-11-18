import nodeFetch from 'node-fetch'
import { Request, Response } from 'express'

export default async function getLeverPositions(req: Request, res: Response) {
  try {
    const response = await nodeFetch(`https://api.lever.co/v0/postings/centrifuge`)
    let positions = await response.json()

    positions = positions
      .map((position) => ({
        id: position.id,
        position: position.text,
        link: position.hostedUrl,
      }))
      .filter(
        // Don't see your role?
        (position) => position.id !== 'c0f7a908-8d9e-4f3c-9b15-a4f81e033484'
      )

    return res.status(200).send(JSON.stringify(positions))
  } catch (error) {
    return res.status(422).send(JSON.stringify(error))
  }
}
