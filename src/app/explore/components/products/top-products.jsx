import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const items = [
    {
        heading: "Best Seller",
        name: "Item 1",
        description: "Item 1 description",
        price: 0,
    },
    {
        heading: "Best Seller",
        name: "Item 2",
        description: "Item 2 description",
        price: 0,
    },
    {
        heading: "New Arrival",
        name: "Item 3",
        description: "Item 3 description",
        price: 0,
    },
    {
        heading: "New Arrival",
        name: "Item 4",
        description: "Item 4 description",
        price: 0,
    },
]

const getProduct = (product) => {
    return(
        <Link href="/">
            <Card className="w-60 h-96">
                <CardHeader>
                </CardHeader>
                <CardContent className="flex flex-col text-sm">
                    <div className="w-48 h-48 border-2">
                        {/* <Image alt="Photo by Drew Beamer" fill className="object-cover" /> */}
                    </div>
                    <div className="mt-5 text-red-500 font-bold">{product.heading}</div>
                    <div className="pt-1 font-semibold">{product.name}</div>
                    <div className="pt-1 font-light">{product.description}</div>
                    <div className="pt-1 font-light">SGD {product.price}</div>
                </CardContent> 
            </Card>
        </Link>
    )
}

  
export default function TopProducts(){
    return(
        <div className="flex justify-between">
            {items.map((item, index) => (
                <div key={index}>
                    {getProduct(item)}
                </div>
            ))}
        </div>
    )
}