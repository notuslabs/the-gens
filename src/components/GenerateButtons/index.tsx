import React from 'react'

import { useAccount, useConnect, useNetwork } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { aurora } from '@wagmi/chains'

import Button from '../Button'
export type GenerateButtonsProps = {
  onClick: (numImages: number) => unknown
}

const GenerateButtons = ({ onClick }: GenerateButtonsProps) => {
  const { address, isConnected } = useAccount()
  // const { chain } = useNetwork()

  const { connect } = useConnect({
    connector: new InjectedConnector()
  })
  // chain?.id !== aurora.id &&
  return (
    <div>
      {isConnected ? (
        address?.toString() !== '' ? (
          <div className="grid grid-cols-grid-buttons gap-2 p-4 border border-solid rounded-md border-slate-500">
            <Button onClick={() => onClick(1)} text="Gerar" />
            <Button onClick={() => onClick(4)} text="x4" />
            <Button onClick={() => onClick(9)} text="x9" />
          </div>
        ) : (
          <div className="gap-2 p-4 border border-solid rounded-md border-slate-500">
            <Button onClick={() => connect()} text="Trocar rede para Aurora" />
          </div>
        )
      ) : (
        <div className="gap-2 p-4 border border-solid rounded-md border-slate-500">
          <Button onClick={() => connect()} text="Conectar" />
        </div>
      )}
    </div>
  )
}

export default GenerateButtons
