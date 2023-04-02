import React from 'react'

import {
  useAccount,
  useConnect,
  useNetwork,
  useContract,
  useSigner
} from 'wagmi'

import MintPassABI from '@/constants/mint-pass.json'
import theGenPassABI from '@/constants/the-gen.json'

import { Image, mintImage } from '@/client'
import { ethers } from 'ethers'
import { addressDegen, addressMintPass } from '@/constants/tokenAddresses'

interface IModalViewImageProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  ImageSelected: Image
  setPrompt: React.Dispatch<React.SetStateAction<string>>
}

const ModalViewImage = ({
  setIsOpenModal,
  ImageSelected,
  setPrompt
}: IModalViewImageProps) => {
  const [balanceOf, setBalanceOf] = React.useState('0')

  const { address } = useAccount()
  const signer = useSigner()

  const mintPassContract = useContract({
    address: addressMintPass,
    abi: MintPassABI,
    signerOrProvider: signer.data
  })

  const theGenPassContract = useContract({
    address: addressDegen,
    abi: theGenPassABI,
    signerOrProvider: signer.data
  })

  async function handleBalanceOf() {
    try {
      const balance = await mintPassContract?.functions.balanceOf(address)
      setBalanceOf(balance.toString())
    } catch (error) {
      console.log('error', error)
    }
  }

  function generateSeed(address: string, rest: string) {
    return ethers.utils.solidityPack(['address', 'uint96'], [address, rest])
  }

  async function handleMint() {
    try {
      const tokenId = await mintPassContract?.functions.tokenOfOwnerByIndex(
        address,
        0
      )

      await theGenPassContract?.functions.mint(
        tokenId.toString(),
        generateSeed(
          String(address),
          ethers.utils.hexlify(
            ethers.utils.toUtf8Bytes(`${ImageSelected.prompt}`)
          )
        )
      )

      await mintImage({
        imageId: ImageSelected.id,
        mintId: Number(tokenId.toString())
      })
    } catch (error) {
      console.log(error)
    }
  }

  function handelClickUsePrompt() {
    setPrompt(ImageSelected.prompt)
    setIsOpenModal(false)
  }

  React.useEffect(() => {
    if (!address && !mintPassContract) return
    handleBalanceOf()
  }, [address, mintPassContract])

  return (
    <div className="">
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-backgroundModal z-10"
        onClick={() => setIsOpenModal(false)}
      />

      <div className="fixed top-2/4	left-2/4 translate-y-[-50%] translate-x-[-50%] z-20">
        <button
          className="absolute top-[0] right-[-50px] p-2 bg-backgroundCloseModal rounded-full"
          onClick={() => setIsOpenModal(false)}
        >
          <img src="/close-icon.svg" alt="" width={16} height={16} />
        </button>
        <div className="flex gap-24 w-[1200px]">
          <img
            src={ImageSelected.image_url}
            alt=""
            width={700}
            height={700}
            className="rounded-lg"
          />

          <div className="flex flex-col ">
            {address && (
              <span className="font-normal text-lg text-[#737474]">
                Você tem {balanceOf} Mint Pass
              </span>
            )}
            <div className="flex gap-2 mt-8">
              <button
                type="button"
                disabled={balanceOf === '0'}
                className="rounded-lg font-semibold p-3 text-base disabled:opacity-75 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => handleMint()}
              >
                Mintar
              </button>
              <button
                type="button"
                className="rounded-lg font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => handelClickUsePrompt()}
              >
                Usar Prompt
              </button>
              {/* <button
                type="button"
                className="rounded-lg font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => alert('Clicou no like')}
              >
                <img
                  src="/icons/black-heart.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </button>
              <button
                type="button"
                className="rounded-lg font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => alert('Clicou no deletar')}
              >
                <img src="/icons/trash.svg" alt="" width={24} height={24} />
              </button> */}
            </div>
            <div className="mt-8">
              <span className="font-normal text-lg text-[#737474]">Prompt</span>

              <p className="mt-3 font-normal text-lg text-white">
                {ImageSelected.prompt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalViewImage
