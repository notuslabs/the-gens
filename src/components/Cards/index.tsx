import React from 'react'

const Cards = () => {
  return (
    <div className="w-80 h-72 relative">
      <a href="/">
        <img
          className="w-80 h-72 border border-solid rounded-lg border-slate-500"
          src="https://res.cloudinary.com/dmztvy5k7/image/upload/v1680373568/oyui306ouvf3ymswno7g.png"
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
