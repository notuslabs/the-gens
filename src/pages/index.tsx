import Head from 'next/head'
// import { useNetwork, useSwitchNetwork } from 'wagmi'

// import { aurora } from '@wagmi/chains'
import Mint from '@/templates/Mint'

export default function Home() {
  // const { chain } = useNetwork()
  // const { switchNetwork } = useSwitchNetwork()

  return (
    <>
      <Head>
        <title>The Gens</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {chain?.id !== aurora.id && (
        <button onClick={() => switchNetwork?.(aurora.id)}>
          CHANGE NETWORK
        </button>
      )} */}
      <Mint />
    </>
  )
}
