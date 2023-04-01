// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line prettier/prettier
  const address = req.query.address as string
  const filter = req.query.filter as string | undefined;

  
  let finalFilters: any = {}

  if(filter) {
    const filtersSplit = filter.split(",")

    if(filtersSplit.includes('isFavorited')) finalFilters['isFavorited'] = true
    if(filtersSplit.includes('isMinted')) finalFilters['isMinted'] = true
  }

  const prisma = new PrismaClient()

  const images = await prisma.userImage.findMany({ where: { address, ...finalFilters } })

  return res.json(images)
};
