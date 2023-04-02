import React from 'react'
import { jsNumberForAddress } from 'react-jazzicon'
import Jazzicon from 'react-jazzicon/dist/Jazzicon'
import Link from 'next/link'

import { useAccount, useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import substr from '@/Utils/substr'
import { useRouter } from 'next/router'

const Header = () => {
  const [userWalletAddress, setuserWalletAddress] = React.useState('')

  const router = useRouter()
  const routerAspath = router.pathname

  const { address, isConnected } = useAccount()
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

  const colorVariants: Record<string, string> = {
    disable: 'text-neutral-500 hover:brightness-75 ',
    active: 'text-neutral-50 hover:brightness-75'
  }

  return (
    <nav
      className={`
      ${routerAspath === '/' ? 'bg-transparent' : 'bg-black'}
      flex justify-between items-center px-8 py-3 h-[72px]`}
    >
      {routerAspath === '/'}
      <img src="/icons/logo.svg" alt="logo" width={86} height={24} />

      <div className="flex gap-10 items-center ml-3">
        <Link
          href="/"
          className={`${
            colorVariants[routerAspath === '/' ? 'active' : 'disable']
          } font-semibold text-sm cursor-pointer`}
        >
          Mint Pass
        </Link>
        <Link
          href="/gerar"
          className={`${
            colorVariants[routerAspath === '/gerar' ? 'active' : 'disable']
          } font-semibold text-sm cursor-pointer`}
        >
          Gerar
        </Link>
        <Link
          href="https://tofunft.com/aurora"
          target="_blank"
          className="text-neutral-500 font-semibold text-sm cursor-pointer"
        >
          Coleção
        </Link>
        <div>
          {userWalletAddress !== '' ? (
            <div className="flex items-center gap-2">
              <Jazzicon
                diameter={32}
                seed={jsNumberForAddress(
                  String(userWalletAddress) ||
                    '0x1111111111111111111111111111111111111111'
                )}
              />
              <p className=" text-white font-semibold text-sm cursor-pointer">
                {address ? substr(String(address)) : ''}
              </p>
            </div>
          ) : (
            <button
              type="button"
              className="flex rounded-full font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
    </nav>
  )
}

export default Header
