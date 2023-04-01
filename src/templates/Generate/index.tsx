import { getImages, Image } from '@/client'
import React from 'react'

import Cards from '@/components/Cards'
import GenerateButtons from '@/components/GenerateButtons'

const Generate = () => {
  const [images, setImages] = React.useState<Image[]>([])

  React.useEffect(() => {
    async function generateImage() {
      const images = await getImages({
        address: '0x00',
        filters: {
          onlyMinted: true
        }
      })

      setImages(images)
    }

    generateImage()
  }, [])

  return (
    <main className="bg-black w-full h-screen columns-2">
      <div className="bg-gray-600 h-screen">
        <GenerateButtons onClick={console.log} />
        <Cards />
      </div>
      <div className="bg-gray-600 h-screen">
        <p className="text-white"></p>
      </div>
    </main>
  )
}

export default Generate
