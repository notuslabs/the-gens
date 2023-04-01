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
        <button className="absolute right-2 top-2 bg-white rounded-lg">
          ADD
        </button>
      </a>
    </div>
  )
}

export default Cards
