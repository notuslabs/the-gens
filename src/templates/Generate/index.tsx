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
import ModalViewImage from '@/components/ModalViewImage'
import { useAccount } from 'wagmi'

const Generate = () => {
  const [images, setImages] = React.useState<Image[]>([])
  const [prompt, setPrompt] = React.useState('')
  const [grid, setGrid] = React.useState<number>(1)
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const [imageSelected, setImageSelected] = React.useState<Image | null>(null)
  const [userImages, setuserImages] = React.useState<Image[]>([])
  const [isLoading, setisLoading] = React.useState(false)

  const { address } = useAccount()

  const classGrid: Record<number, string> = {
    1: 'grid-rows-1 grid-cols-1',
    4: 'grid-rows-2 grid-cols-2',
    9: 'grid-rows-3 grid-cols-3'
  }

  async function generateImage(numImages: number) {
    if (prompt === '') return
    setisLoading(true)
    setGrid(numImages)

    try {
      const images = await generateImages({
        address: String(address),
        prompt,
        numImages
      })

      setisLoading(false)
      if (Array.isArray(images)) {
        setImages(images)
        getUserImages()
        setGrid(numImages)
        return
      }

      setImages([])
    } catch (error) {
      setImages([])
      setisLoading(false)
    }

    setisLoading(false)
  }

  async function getUserImages() {
    try {
      const userImages = await getImages({
        address: String(address)
      })

      userImages.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )

      setuserImages(userImages)
    } catch (error) {
      setuserImages([])
    }
  }

  React.useEffect(() => {
    getUserImages()
  }, [])

  return (
    <main className="bg-black px-8 pt-12">
      <div className="h-[500px] grid grid-cols-2 gap-24">
        <div>
          <GenerateButtons
            onClick={generateImage}
            buttonSelected={grid}
            isLoading={isLoading}
          />
          <PromptInput prompt={prompt} onPromptInput={setPrompt} />
        </div>
        <div
          className={`h-[520px] w-full p-2 border border-solid rounded-md border-slate-500`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="relative w-32 h-32 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 bg-black ">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-black rounded-full border-2 border-black "></div>
              </div>
            </div>
          ) : (
            <div
              className={`${classGrid[grid]} h-[504px] w-full grid grid-flow-col gap-4`}
            >
              {images.map(image => {
                return (
                  <Cards
                    key={image.id}
                    image={image}
                    setImageSelected={setImageSelected}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
      <CollectionFilter generateValue={userImages.length} />
      <div className="h-auto grid grid-rows-4 grid-cols-4 gap-8">
        {userImages.map(image => (
          <Cards
            key={image.id}
            image={image}
            setIsOpenModal={setIsOpenModal}
            onImageDeletion={imageId =>
              setuserImages(userImages.filter(image => image.id !== imageId))
            }
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
