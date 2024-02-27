import {WalletAdapterNetwork} from '@solana/wallet-adapter-base';
import {ConnectionProvider,WalletProvider} from "@solana/wallet-adapter-react"
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui"
import {GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter} from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { useMemo } from 'react'

export const WalletConnectionProvider = ({children})=>{
    const network = WalletAdapterNetwork.Devnet
    const endpoint = useMemo(()=>{
        if(network === WalletAdapterNetwork.Devnet){
            return 'https://palpable-patient-resonance.solana-devnet.quiknode.pro/bdd5572aa6ebbc530988e73d26ab70eb6796406c/'
        }
        return clusterApiUrl(network)
    },[network])
    const wallets = useMemo(()=>[new PhantomWalletAdapter()],[network])

    return(
        <ConnectionProvider endpoint={endpoint}>
<WalletProvider wallets={wallets} autoConnect>
    <WalletModalProvider>
        {children}
    </WalletModalProvider>

</WalletProvider>
        </ConnectionProvider>
    )

}
