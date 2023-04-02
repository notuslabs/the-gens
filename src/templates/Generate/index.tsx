import React from 'react'

import { useAccount } from 'wagmi'

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
import ModalViewImage from '@/components/ModalViewImage'

const Generate = () => {
  const [images, setImages] = React.useState<Image[]>([])
  const [prompt, setPrompt] = React.useState('')
  const [grid, setGrid] = React.useState<number>(1)
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const [imageSelected, setImageSelected] = React.useState<Image | null>(null)

  const { address } = useAccount()

  const classGrid: Record<number, string> = {
    1: 'grid-rows-1 grid-cols-1',
    4: 'grid-rows-2 grid-cols-2',
    9: 'grid-rows-3 grid-cols-3'
  }

  async function generateImage(numImages: number) {
    if (prompt === '') return

    const images = await generateImages({
      address: String(address),
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
          <PromptInput prompt={prompt} onPromptInput={setPrompt} />
        </div>
        <div
          className={`${classGrid[grid]} h-[520px] w-full grid grid-flow-col gap-4 p-2 border border-solid rounded-md border-slate-500`}
        >
          {images.map(image => (
            <Cards
              key={image.id}
              image={image}
              setImageSelected={setImageSelected}
            />
          ))}
        </div>
      </div>
      <CollectionFilter />
      <div className="h-auto grid grid-rows-4 grid-cols-4 gap-8">
        {images.map(image => (
          <Cards
            key={image.id}
            image={image}
            setIsOpenModal={setIsOpenModal}
            setImageSelected={setImageSelected}
          />
        ))}
      </div>

      {isOpenModal && imageSelected && (
        <ModalViewImage
          setIsOpenModal={setIsOpenModal}
          ImageSelected={imageSelected}
          setPrompt={setPrompt}
        />
      )}
    </main>
  )
}

export default Generate
