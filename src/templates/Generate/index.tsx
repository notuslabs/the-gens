import React from 'react'

import {
  deleteImage,
  favoriteImage,
  generateImages,
  getImages,
  Image,
  mintImage
} from '@/client'

import Cards from '@/components/Cards'
import GenerateButtons from '@/components/GenerateButtons'
import { PromptInput } from './components/PromptInput'

const Generate = () => {
  const [images, setImages] = React.useState<Image[]>([])
  const [prompt, setPrompt] = React.useState('')

  async function generateImage(numImages: number) {
    const images = await generateImages({
      address: '0x00',
      prompt,
      numImages
    })

    setImages(images)
  }

  return (
    <main className="bg-black w-full h-screen columns-2">
      <div className="bg-gray-600 h-screen">
        <GenerateButtons onClick={generateImage} />
        <PromptInput onPromptInput={setPrompt} />
      </div>
      <div className="bg-gray-600 h-screen">
        {images.map(image => (
          <Cards key={image.id} image={image} />
        ))}
      </div>
    </main>
  )
}

export default Generate
