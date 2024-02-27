import Head from 'next/head'
import '../styles/global.css'
import { WalletConnectionProvider } from '../components/WalletConnectProvider'
import '@solana/wallet-adapter-react-ui/styles.css'
// Import WalletConnectionProvider from components
// Import the solana wallet css

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Solana Todo App</title>
            </Head>
            <main>
                {/* Wrap provider around App */}
                <WalletConnectionProvider>

                    <Component {...pageProps} />
                </WalletConnectionProvider>
            </main>
        </>
    )
}

export default MyApp
