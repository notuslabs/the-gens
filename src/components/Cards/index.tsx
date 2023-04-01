import React from 'react'
import { Image } from '@/client'

export type CardProps = {
  image: Image
}

const Cards = ({ image }: CardProps) => {
  return (
    <div className="relative">
      <a href="/">
        <img
          className="min-w-full max-h-full object-cover border border-solid rounded-lg border-slate-500"
          src={image.image_url}
          alt=""
          srcSet=""
        />
        <button
          type="button"
          className="absolute right-14 top-2 flex rounded-lg font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => alert('Clicou no like')}
        >
          <img src="/icons/heart.svg" alt="" />
        </button>
        <button
          type="button"
          className="absolute right-1 top-2 flex rounded-lg font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => alert('Clicou no deletar')}
        >
          <img src="/icons/trash.svg" alt="" />
        </button>
      </a>
    </div>
  )
}

export default Cards
