import { NFTItem } from "@/components/app/NFTItem";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <h4 className="mb-2 font-bold">
         NFT Marketplace
        </h4>

        <div className="w-auto">
          <Button>Sell</Button>
        </div>
      </div>

      {false ? (
        <div className="py-10 flex items-center justify-center">
          <Button>Connect wallet</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          <NFTItem key={0} nft={0} network={0} />
          <NFTItem key={0} nft={0} network={0} />
          <NFTItem key={0} nft={0} network={0} />
          <NFTItem key={0} nft={0} network={0} />

        </div>

      )}
    </>
  )
}
