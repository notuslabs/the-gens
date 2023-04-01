import React from 'react'

import Button from '../Button'

export type GenerateButtonsProps = {
  onClick: (numImages: number) => unknown
}

const GenerateButtons = ({ onClick }: GenerateButtonsProps) => {
  return (
    <div className="grid grid-cols-grid-buttons gap-2 p-4 border-white border-2 rounded-lg">
      <Button onClick={() => onClick(1)} text="Gerar" />
      <Button onClick={() => onClick(5)} text="x5" />
      <Button onClick={() => onClick(10)} text="x10" />
    </div>
  )
}

export default GenerateButtons
