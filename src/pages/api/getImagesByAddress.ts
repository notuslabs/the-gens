/* eslint-disable prettier/prettier */

import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line prettier/prettier
  const address = req.query.address as string
  const filters = req.query.filters as string | undefined;

  
  const finalFilters: any = {}

  if(filters) {
    const filtersSplit = filters.split(",")

    if(filtersSplit.includes('onlyFavorited')) finalFilters['isFavorited'] = true
    if(filtersSplit.includes('onlyMinted')) finalFilters['isMinted'] = true
  }

  const prisma = new PrismaClient()

  const images = await prisma.userImage.findMany({ where: { address, ...finalFilters } })

  return res.json(images)
};
