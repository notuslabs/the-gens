// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { imageId, favorite } = req.body as unknown as { imageId: string, favorite: boolean }

  const prisma = new PrismaClient()

  try {
    await prisma.userImage.update({ where: { id: imageId }, data: { isFavorited: Boolean(favorite) }})
    return res.status(204).send('')
  } catch (error) {
    return res.status(404).json({ error: 'Image not found' })
  }
};
