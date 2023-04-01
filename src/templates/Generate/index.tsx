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
import CollectionFilter from '@/components/CollectionFilter'
import { PromptInput } from './components/PromptInput'
import Header from '@/components/Header'

const Generate = () => {
  const [images, setImages] = React.useState<Image[]>([])
  const [prompt, setPrompt] = React.useState('')
  const [grid, setGrid] = React.useState<number>(1)

  const classGrid: Record<number, string> = {
    1: 'grid-rows-1 grid-cols-1',
    4: 'grid-rows-2 grid-cols-2',
    9: 'grid-rows-3 grid-cols-3'
  }

  async function generateImage(numImages: number) {
    if (prompt === '') return
    const images = await generateImages({
      address: '0x00',
      prompt,
      numImages
    })

    setGrid(numImages)
    setImages(images)
  }

  return (
    <main className="bg-black px-8 pt-12">
      <div className="h-[500px] grid grid-cols-2 gap-24">
        <div>
          <GenerateButtons onClick={generateImage} />
          <PromptInput onPromptInput={setPrompt} />
        </div>
        <div
          className={`${classGrid[grid]} h-[520px] w-full grid grid-flow-col gap-4 p-2 border border-solid rounded-md border-slate-500`}
        >
          {images.map(image => (
            <Cards key={image.id} image={image} />
          ))}
        </div>
      </div>
      <CollectionFilter />
      <div className="h-auto grid-cols-2">
        {images.map(image => (
          <Cards key={image.id} image={image} />
        ))}
      </div>
    </main>
  )
}

export default Generate
