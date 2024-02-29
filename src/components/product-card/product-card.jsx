import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function ProductCard({ product }) {
    console.log(product.imageUrl);
    return (
        <Link href={`/product/${product?.id}`} className="mb-8 border-none">
            <Card className="w-[20rem] h-[26rem] border-none shadow-2xl rounded-lg">
                <CardHeader className="p-0 rounded-md">
                    <img
                        src={product?.imageUrl}
                        className="rounded-t-lg"
                        alt="Product Picture"
                    />
                </CardHeader>
                <CardContent className="p-4">
                    <div className="font-bold">{product?.name}</div>
                    <div className="font-light">{product?.description}</div>
                    <div className="mt-4 font-semibold">
                        SGD ${product?.price}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
