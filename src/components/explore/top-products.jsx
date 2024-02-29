import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { apiClient } from "@/lib/axios";
import Link from "next/link";

const getProduct = (product) => {
    return(
        <Link href={"/product/" + product.id}>
            <Card className="w-60 h-96">
                <CardHeader>
                </CardHeader>
                <CardContent className="flex flex-col text-sm">
                    <div className="w-48 h-48 border-2 bg-primary flex justify-center items-center text-white">
                        Image
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

  
export function TopProducts({products}){
    return(
        <div className="flex justify-between">
            {products.map((product, index) => (
                <div key={index}>
                    {getProduct(product)}
                </div>
            ))}
        </div>
    )
}