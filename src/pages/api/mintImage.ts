/* eslint-disable prettier/prettier */

import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { imageId, minted } = req.body as unknown as { imageId: string, minted: boolean }

  const prisma = new PrismaClient()

  try {
    await prisma.userImage.update({ where: { id: imageId }, data: { isMinted: Boolean(minted) }})
    return res.status(204).send('')
  } catch (error) {
    return res.status(404).json({ error: 'Image not found' })
  }
};
