import React from 'react'

const Mint = () => {
  return (
    <main
      className="bg-black w-full h-screen bg-[url('/icons/bg-the-gens.png')] text-white"
      style={{ marginTop: '-72px' }}
    >
      <p className="px-8 pt-16 text-white">
        Uma coleção colaborativa de arte com IA
      </p>
      <div className="px-8 pt-48">
        <p className="w-[320px]">
          Você pode gastar um Mint Pass para mintar sua criação na coleção THE
          GENS
        </p>
        <button
          type="button"
          className="flex rounded-xl font-semibold p-3 my-8  text-black text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => alert('Vai interagir com o contrato.')}
        >
          Compre um Mint Pass
        </button>
        <div className="grid grid-cols-1">
          <span className="mb-1">100 AURORA</span>
          <span>100/1000 Mint Pass</span>
        </div>
      </div>
    </main>
  )
}

export default Mint
