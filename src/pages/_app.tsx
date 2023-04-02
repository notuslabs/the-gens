import type { AppProps } from 'next/app'
import Head from 'next/head'

import { mainnet, aurora, auroraTestnet } from '@wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { WagmiConfig, createClient, configureChains } from 'wagmi'

import Header from '@/components/Header'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const { provider, webSocketProvider } = configureChains(
    [mainnet, aurora, auroraTestnet],
    [publicProvider()]
  )

  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider
  })

  return (
    <WagmiConfig client={client}>
      <Head>
        <title>The Gens</title>
        <meta name="description" content="The Gens" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <meta property="og:site_name" content="The Gens" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </WagmiConfig>
  )
}
