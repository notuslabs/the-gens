import React from 'react'
import { Image, deleteImage, favoriteImage } from '@/client'

export interface CardProps {
  image: Image
  setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>
  setImageSelected: React.Dispatch<React.SetStateAction<Image | null>>
  onImageDeletion?: (imageId: string) => void
}

const Cards = ({
  image,
  setIsOpenModal,
  setImageSelected,
  onImageDeletion
}: CardProps) => {
  const [isFavorited, setIsFavorited] = React.useState(image.isFavorited)

  function handleClickImage(image: Image) {
    setIsOpenModal && setIsOpenModal(true)
    setImageSelected(image)
  }

  async function handleFavoriteImage() {
    await favoriteImage({ imageId: image.id, favorite: !isFavorited })
    setIsFavorited(!isFavorited)
  }

  async function handleDeleteImage() {
    try {
      await deleteImage({ imageId: image.id })
      console.log()

      onImageDeletion ? onImageDeletion(image.id) : null
    } catch (error) {
      // handle this or not, you decide
    }
  }

  return (
    <div className="relative">
      <img
        className="cursor-zoom-in min-w-full max-h-full object-cover border border-solid rounded-lg border-slate-500"
        src={image.image_url}
        alt=""
        onClick={() => handleClickImage(image)}
        srcSet=""
      />
      <div>
        <button
          type="button"
          className="absolute right-14 top-2 flex rounded-lg font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => handleFavoriteImage()}
        >
          {isFavorited ? (
            <img src="/icons/red-heart.svg" alt="red heart" />
          ) : (
            <img src="/icons/black-heart.svg" alt="black heart" />
          )}
        </button>
        <button
          type="button"
          className="absolute right-1 top-2 flex rounded-lg font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => handleDeleteImage()}
        >
          <img src="/icons/trash.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Cards
