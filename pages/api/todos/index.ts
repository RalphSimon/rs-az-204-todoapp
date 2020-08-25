// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import todos from '../../../lib/data/mock-todos.json'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.statusCode = 200
    res.json(todos)
  } catch (error) {
    console.error('ERROR!!! No such file man', error)
  }
}

export default handler
