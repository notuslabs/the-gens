/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const imageId = req.query.imageId as string

  const prisma = new PrismaClient()

  try {
    const images = await prisma.userImage.delete({ where: { id: imageId } });
    return res.status(204).send('')
  } catch (error) {
    return res.status(404).json({ error: 'Image not found' })
  }
};
