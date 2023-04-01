// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line prettier/prettier
  const address = req.query.address as string

  const prisma = new PrismaClient()

  const images = await prisma.userImage.findMany({ where: { address } })

  return res.json(images)
};
