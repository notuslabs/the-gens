/* eslint-disable prettier/prettier */

import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'
import { v2 as cloudinary } from 'cloudinary'
import { v4 as uuidV4 } from 'uuid'

type Data = {
  prompt: string
  numImages: number
  address: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line prettier/prettier
  const { address, numImages, prompt } = req.body as Data

  if (numImages > 10)
    return res.status(400).json({ error: 'Too many images requested' })

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })

  const openai = new OpenAIApi(configuration)
  const prisma = new PrismaClient()

  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: numImages,
      size: '1024x1024'
    })

    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_KEY,
      api_secret: process.env.CLOUD_SECRET
    })

    const userImgUploadPromises = []
    for (const userImage of response.data.data) {
      userImgUploadPromises.push(
        cloudinary.uploader.upload(userImage.url || '')
      )
    }

    const results = await Promise.all(userImgUploadPromises)

    const data = results.map(image => ({
      id: uuidV4(),
      image_url: image.secure_url || '',
      address: address,
      prompt,
      isFavorited: false,
      created_at: new Date()
    }))

    await prisma.userImage.createMany({
      data
    })

    return res.json(data.map(image => ({ ...image, minted: null })))
  } catch (error) {
    console.log(error)

    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
