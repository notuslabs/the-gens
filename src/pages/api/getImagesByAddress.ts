/* eslint-disable prettier/prettier */

import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line prettier/prettier
  const address = req.query.address as string
  const filters = req.query.filters as string | undefined

  const finalFilters: any = {}

  try {
    if (filters) {
      const filtersSplit = filters.split(',')

      if (filtersSplit.includes('onlyFavorited'))
        finalFilters['isFavorited'] = true
      if (filtersSplit.includes('onlyMinted')) finalFilters['isMinted'] = true
    }

    const prisma = new PrismaClient()

    const images = await prisma.userImage.findMany({
      where: { address, ...finalFilters },
      include: { minted: true }
    })

    return res.json(images)
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' })
  }
}
