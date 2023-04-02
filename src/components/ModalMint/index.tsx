import React from 'react'

import { useAccount, useConnect, useNetwork } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { aurora } from '@wagmi/chains'

import changeChain from '@/Utils/changeChain'

import Button from '../Button'

interface IModalViewImageProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalMint = ({ setIsOpenModal }: IModalViewImageProps) => {
  const [value, setValue] = React.useState<number>(1)
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

  // function handelClickUsePrompt() {
  //   setPrompt(ImageSelected.prompt)
  //   setIsOpenModal(false)
  // }

  return (
    <div className="">
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-backgroundModalBlur backdrop-blur-sm z-10"
        onClick={() => setIsOpenModal(false)}
      />

      <div className="fixed top-2/4	left-2/4 translate-y-[-50%] translate-x-[-50%] z-20">
        <button
          className="absolute top-[-150px] right-[-400px] p-2 bg-backgroundModalBlur rounded-full"
          onClick={() => setIsOpenModal(false)}
        >
          <img src="/close-icon.svg" alt="" width={16} height={16} />
        </button>
        <div className="w-[320px] h-[360px] bg-backgroundModal text-black border border-solid rounded-md border-slate-500">
          <h2
            className="
              font-black text-xl text-transparent text-center mt-6
              animate-backgroundLinearGradient bg-clip-text bg-[linear-gradient(50deg,#EAB597,#E8EA97,#97EAC7,#97DBEA,#97A9EA,#C597EA,#EA97BF,#EA9797)]"
          >
            Mint Pass
          </h2>
          <p className="text-center text-white mt-8">
            {`Custo ${100 * value} AURORA`}
          </p>
          <div className="flex gap-4 justify-center my-12">
            <button
              type="button"
              className="flex rounded-xl font-semibold p-3  text-black text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              disabled={value === 1}
              onClick={() => setValue(value - 1)}
            >
              -
            </button>
            <input
              className="w-[100px] bg-inherit resize-none outline-none text-white text-center text-lg leading-6 border border-solid rounded-md border-slate-500"
              type="number"
              readOnly
              min={1}
              value={value}
            />
            <button
              type="button"
              className="flex rounded-xl font-semibold p-3  text-black text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={() => setValue(value + 1)}
            >
              +
            </button>
          </div>

          {userWalletAddress !== '' ? (
            chain?.id === aurora.id ? (
              <button
                type="button"
                className="
                  hover:animate-backgroundLinearGradient 
                  hover:bg-[linear-gradient(50deg,#EAB597,#E8EA97,#97EAC7,#97DBEA,#97A9EA,#C597EA,#EA97BF,#EA9797)] 
                  block mx-auto rounded-full font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                // onClick={() => connect()}
              >
                Comprar
              </button>
            ) : (
              <button
                type="button"
                className="
                hover:animate-backgroundLinearGradient 
                hover:bg-[linear-gradient(50deg,#EAB597,#E8EA97,#97EAC7,#97DBEA,#97A9EA,#C597EA,#EA97BF,#EA9797)] 
                block mx-auto rounded-full font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() =>
                  changeChain({
                    chainId: aurora.id,
                    chainName: aurora.name,
                    rpcUrls: [aurora.rpcUrls.default.http[0]]
                  })
                }
              >
                Trocar rede para Aurora
              </button>
            )
          ) : (
            <button
              type="button"
              className="
                hover:animate-backgroundLinearGradient 
                hover:bg-[linear-gradient(50deg,#EAB597,#E8EA97,#97EAC7,#97DBEA,#97A9EA,#C597EA,#EA97BF,#EA9797)] 
                block mx-auto rounded-full font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={() => connect()}
            >
              Conectar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModalMint