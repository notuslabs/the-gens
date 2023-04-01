/* eslint-disable prettier/prettier */

import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  runtime: 'edge',
  regions: ['gru1'],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line prettier/prettier
  const address = req.query.address as string
  const filter = req.query.filter as string | undefined;

  
  const finalFilters: any = {}

  if(filter) {
    const filtersSplit = filter.split(",")

    if(filtersSplit.includes('isFavorited')) finalFilters['isFavorited'] = true
    if(filtersSplit.includes('isMinted')) finalFilters['isMinted'] = true
  }

  const prisma = new PrismaClient()

  const images = await prisma.userImage.findMany({ where: { address, ...finalFilters } })

  return res.json(images)
};
