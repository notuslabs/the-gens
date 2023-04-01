import React from 'react'

import Button from '../Button'

const GenerateButtons = () => {
  return (
    <div className="grid grid-cols-grid-buttons gap-2 p-4 border-white border-2 rounded-lg">
      <Button text="Gerar" />
      <Button text="x5" />
      <Button text="x10" />
    </div>
  )
}

export default GenerateButtons
