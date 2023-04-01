import React from 'react'

import Button from '../Button'

export type GenerateButtonsProps = {
  onClick: (numImages: number) => unknown
}

const GenerateButtons = ({ onClick }: GenerateButtonsProps) => {
  return (
    <div className="grid grid-cols-grid-buttons gap-2 p-4 border border-solid rounded-md border-slate-500">
      <Button onClick={() => onClick(1)} text="Gerar" />
      <Button onClick={() => onClick(4)} text="x4" />
      <Button onClick={() => onClick(9)} text="x9" />
    </div>
  )
}

export default GenerateButtons
