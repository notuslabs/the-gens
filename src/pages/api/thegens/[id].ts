import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query as { id: string }

  const prisma = new PrismaClient()

  try {
    const minted = await prisma.imageMinted.findUnique({
      where: { id: Number(id) },
      include: { userImage: true }
    })

    if (!minted) return res.status(404).json({ error: 'Mint not found' })

    return res.status(200).json({
      description: minted.userImage.prompt,
      image: minted.userImage.image_url,
      name: minted.id
    })
  } catch (error) {
    return res.status(404).json({ error: 'Image not found' })
  }
}
