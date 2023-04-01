import React from 'react'

import Cards from '@/components/Cards'

const Generate = () => {
  return (
    <main className="bg-black w-full h-screen columns-2">
      <div className="bg-gray-600 h-screen">
        <Cards />
      </div>
      <div className="bg-gray-600 h-screen">
        <p className="text-white">grid</p>
      </div>
    </main>
  )
}

export default Generate
