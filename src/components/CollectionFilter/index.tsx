import React from 'react'

import { TabValues } from '@/templates/Generate'

interface ICollectionFilterProps {
  tabValues: TabValues
  tabSelected: string
  setTabSelected: React.Dispatch<React.SetStateAction<string>>
}

const CollectionFilter = ({
  tabValues,
  tabSelected,
  setTabSelected
}: ICollectionFilterProps) => {
  const colorVariants: Record<string, string> = {
    disable: 'p-2 rounded-md',
    active: 'bg-white text-black p-2 rounded-md'
  }

  return (
    <div className="border border-solid rounded-md border-slate-500 w-full space-x-14 text-gray-500 p-4 mt-24 mb-8">
      <button
        className={`${
          colorVariants[tabSelected === 'Geradas' ? 'active' : 'disable']
        } font-semibold text-sm cursor-pointer`}
        onClick={() => setTabSelected('Geradas')}
      >
        Geradas ({tabValues.allImages ?? 0})
      </button>
      <button
        className={`${
          colorVariants[tabSelected === 'Favoritas' ? 'active' : 'disable']
        } font-semibold text-sm cursor-pointer`}
        onClick={() => setTabSelected('Favoritas')}
      >
        Favoritas ({tabValues.favoritesImages ?? 0})
      </button>
      <button
        className={`${
          colorVariants[tabSelected === 'Mintadas' ? 'active' : 'disable']
        } font-semibold text-sm cursor-pointer`}
        onClick={() => setTabSelected('Mintadas')}
      >
        Mintadas ({tabValues.mintedImages ?? 0})
      </button>
    </div>
  )
}

export default CollectionFilter
