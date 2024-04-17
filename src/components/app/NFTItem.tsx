import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


type NFTItemProps = {
  nft: any
  network: any
}

export function NFTItem({ nft, network }: NFTItemProps) {
  return (
    <Card className="w-auto">
      <CardHeader className="p-3">
        <CardTitle className="text-center">Create project</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <img className="w-full h-auto object-cover" src="https://image-optimizer.jpgstoreapis.com/9c0ccef3-ccb9-4f61-bb38-16812b059e34" alt={nft.name} />
      </CardContent>
      <CardFooter className="flex justify-between" >
        <h1>₳ 8 </h1>
        <Button>Buy</Button>
      </CardFooter>
    </Card>
  )
}
