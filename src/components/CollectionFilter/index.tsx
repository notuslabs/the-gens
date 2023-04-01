import React from 'react'

const CollectionFilter = () => {
  const [selected, setSelected] = React.useState('Geradas')
  const colorVariants: Record<string, string> = {
    disable: '',
    active: 'bg-white text-black p-2 rounded-md'
  }

  return (
    <div className="border border-solid rounded-md border-slate-500 w-full space-x-20 text-gray-500 p-4 mt-24 mb-8">
      <button
        className={`${
          colorVariants[selected === 'Geradas' ? 'active' : 'disable']
        } font-semibold text-sm cursor-pointer`}
        onClick={() => setSelected('Geradas')}
      >
        Geradas (123)
      </button>
      <button
        className={`${
          colorVariants[selected === 'Favoritas' ? 'active' : 'disable']
        } font-semibold text-sm cursor-pointer`}
        onClick={() => setSelected('Favoritas')}
      >
        Favoritas (10)
      </button>
      <button
        className={`${
          colorVariants[selected === 'Mintadas' ? 'active' : 'disable']
        } font-semibold text-sm cursor-pointer`}
        onClick={() => setSelected('Mintadas')}
      >
        Mintadas (1)
      </button>
    </div>
  )
}

export default CollectionFilter
