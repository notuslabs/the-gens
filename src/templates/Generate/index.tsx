import {
  deleteImage,
  favoriteImage,
  generateImage,
  getImages,
  mintImage
} from '@/client'
import React from 'react'

import Cards from '@/components/Cards'

const Generate = () => {
  React.useEffect(() => {
    async function test() {
      const imageId = '714f333f-8995-423d-8bd0-bec4030ec80b'
      const address = '0x00'

      /*const generatedImages = await generateImage({
        address,
        prompt: 'test',
        numImages: 1
      })*/

      /*await mintImage({
        imageId,
        minted: true
      })
      await favoriteImage({
        imageId,
        favorite: true
      })

      await deleteImage({
        imageId
      })*/

      const images = await getImages({
        address: '0x00',
        filters: {
          onlyMinted: true
        }
      })
      console.log(images)
    }

    test()
  }, [])

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
