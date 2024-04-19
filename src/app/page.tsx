import { NFTItem } from "@/components/app/NFTItem";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic'

const ConnectWalletButton = dynamic(() =>
  import('@/components/app/cardano-connect-wallet').then((mod) => mod.ConnectWallet)
)

export default function Home() {
  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <h4 className="mb-2 font-bold">
          NFT Marketplace
        </h4>
        <div className="w-auto">
          <ConnectWalletButton/>
        </div>
      </div>
      
      <div className="py-5">
      <Button>Sell</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <NFTItem />
        <NFTItem />
        <NFTItem />
        <NFTItem />
      </div>
    </>
  )
}
