// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from "openai";

type Data = {
  prompt: string,
  numImages: number,
  address: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line prettier/prettier
  const { address, numImages,prompt } = req.body as Data;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const prisma = new PrismaClient();

  const response = await openai.createImage({
    prompt: prompt,
    n: numImages,
    size: '512x512',
  });

  await prisma.userImage.createMany({
    data: response.data.data.map((image) => ({ image_url: image.url || '', address: address, prompt }))
  });

  return res.json(response.data.data)
}
