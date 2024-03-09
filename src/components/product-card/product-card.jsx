import Link from "next/link";
import capitalizeFirstLetter from "@/utils/capitalize";
import convertDollar from "@/utils/format-currency";
import cartService from "@/services/cart-service";
import { useToast } from "@/components/ui/use-toast";

export default function ProductCard({ product }) {
    const { toast } = useToast();

    const handleAddToCart = async () => {
        try {
            await cartService.addCart(product?.id);
            toast({ title: "Added to cart success!" });
        } catch (err) {
            toast({
                title: "Add to cart failed",
            });
        }
    };

    return (
        <div>
            <Link href={`/product/${product?.id}`}>
                <div className="w-[18rem] h-[18rem] border-none rounded-lg bg-[#F2F2F2] flex justify-center items-center p-5">
                    <img
                        src={product?.imageUrl}
                        className="rounded-t-lg w-[100%] h-[100%] object-contain"
                        alt="Product Picture"
                    />
                </div>
            </Link>
            <div>
                <h1 className="text-lg font-bold mt-3">
                    {capitalizeFirstLetter(product?.name)}
                </h1>
                <div className="flex justify-between">
                    <p className="text-[#6c6c6c]">Stock: {product?.stock}</p>
                    <p className="font-bold text-lg">
                        {convertDollar.format(product?.price)}
                    </p>
                </div>
                <div className="flex gap-3 items-center">
                    <button
                        className="border-2 rounded-[25px] px-8 py-2 mt-2 bg-[#F9F9F9] font-md text-[15px]"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
