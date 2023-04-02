import React from 'react'

import ModalMint from '@/components/ModalMint'
import { addressMintPass } from '@/constants/tokenAddresses'
import { useContractRead } from 'wagmi'
import MintPassABI from '@/constants/mint-pass.json'

type IMindPassProps = {
  purchased: string
  max: string
}

const Mint = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const [mindPassValues, setmindPassValues] = React.useState<IMindPassProps>({
    purchased: '',
    max: '1000'
  })

  const { data } = useContractRead({
    address: addressMintPass,
    abi: MintPassABI,
    functionName: 'supplyStats'
  })

  const dataInfo: any = data

  React.useEffect(() => {
    if (!dataInfo) return

    const max = dataInfo.max.toString()
    const purchased = dataInfo.purchased.toString()

    setmindPassValues({
      max,
      purchased
    })
  }, [data])

  return (
    <main
      className="bg-black w-full h-screen bg-[url('/icons/bg-the-gens.png')] bg-cover text-white"
      style={{ marginTop: '-72px' }}
    >
      <p className="px-8 pt-16 text-white">
        Uma coleção colaborativa de arte com IA
      </p>
      <div className="px-8 pt-48">
        <p className="w-[320px]">
          Você pode gastar um Mint Pass para mintar sua criação na coleção THE
          GENS
        </p>
        <button
          type="button"
          className="flex rounded-xl font-semibold p-3 my-8  text-black text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => setIsOpenModal(true)}
        >
          Compre um Mint Pass
        </button>
        <div className="grid grid-cols-1">
          <span className="mb-1">0.01 AETH</span>
          <span>
            {mindPassValues.purchased}/{mindPassValues.max} Mint Pass
          </span>
        </div>
        <img src="/chainLogo.svg" alt="" className="mt-3" />
      </div>

      {isOpenModal && <ModalMint setIsOpenModal={setIsOpenModal} />}
    </main>
  )
}

export default Mint
