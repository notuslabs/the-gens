/* eslint-disable prettier/prettier */

import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { mintId, imageId } = req.body as unknown as {
    mintId: number
    imageId: string
  }

  const prisma = new PrismaClient()

  try {
    const mintExists = await prisma.userImage.findUnique({
      where: { id: imageId },
      include: { minted: true }
    })

    if (mintExists?.minted) {
      return res.status(400).json({ error: 'Image already minted' })
    }

    const userImageMinted = await prisma.userImage.update({
      where: { id: imageId },
      data: { minted: { create: { id: mintId } } },
      include: { minted: true }
    })

    return res.status(200).json(userImageMinted)
  } catch (error) {
    return res.status(404).json({ error: 'Image not found' })
  }
}
