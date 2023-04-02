import type { AppProps } from 'next/app'

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
      <Header />
      <Component {...pageProps} />
    </WagmiConfig>
  )
}
