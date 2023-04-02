import React from 'react'

import { useAccount, useConnect, useNetwork, useContract } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import { aurora } from '@wagmi/chains'
import Button from '../Button'

import changeChain from '@/Utils/changeChain'

export type GenerateButtonsProps = {
  onClick: (numImages: number) => unknown
  buttonSelected: number
  isLoading: boolean
}

const GenerateButtons = ({
  onClick,
  buttonSelected,
  isLoading
}: GenerateButtonsProps) => {
  const [userWalletAddress, setuserWalletAddress] = React.useState('')
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()

  const { connect } = useConnect({
    connector: new InjectedConnector()
  })

  React.useEffect(() => {
    if (isConnected) {
      setuserWalletAddress(String(address))
    } else {
      setuserWalletAddress('')
    }
  }, [address])

  return (
    <div>
      {userWalletAddress !== '' ? (
        chain?.id === aurora.id ? (
          <div className="grid grid-cols-grid-buttons gap-2 p-4 border border-solid rounded-md border-slate-500">
            <Button
              onClick={() => onClick(1)}
              text="Gerar"
              buttonSelected={isLoading && buttonSelected === 1 ? 1 : 2}
              isLoading={isLoading}
            />
            <Button
              onClick={() => onClick(4)}
              text="x4"
              isLoading={isLoading}
              buttonSelected={isLoading && buttonSelected === 4 ? 1 : 2}
            />
            <Button
              onClick={() => onClick(9)}
              text="x9"
              buttonSelected={isLoading && buttonSelected === 9 ? 1 : 2}
              isLoading={isLoading}
            />
          </div>
        ) : (
          <div className="gap-2 p-4 border border-solid rounded-md border-slate-500">
            <Button
              onClick={() =>
                changeChain({
                  chainId: aurora.id,
                  chainName: aurora.name,
                  rpcUrls: [aurora.rpcUrls.default.http[0]]
                })
              }
              text="Trocar rede para Aurora"
            />
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
