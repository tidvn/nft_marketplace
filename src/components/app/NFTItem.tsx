import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


type NFTItemProps = {
}

export function NFTItem({}: NFTItemProps) {
  return (
    <Card className="w-auto">
      <CardHeader className="p-3">
        <CardTitle className="text-center">NFT Name</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <img className="w-full h-auto object-cover" src="https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https://nftstorage.link/ipfs/bafybeifprusw3cfmevjqemype42svll3frpx3asuzd5hh7rplc3thp63aq/9492.png" alt="nft name" />
      </CardContent>
      <CardFooter className="flex justify-between" >
        <h1>₳ 8 </h1>
        <Button>Buy</Button>
      </CardFooter>
    </Card>
  )
}
