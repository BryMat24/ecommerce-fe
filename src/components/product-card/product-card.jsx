import Link from "next/link";
import capitalizeFirstLetter from "@/utils/capitalize";
import convertDollar from "@/utils/format-currency";

export default function ProductCard({ product }) {
    console.log(product);
    return (
        <div>
            <Link href={`/product/${product?.id}`}>
                <div className="w-[20rem] h-[20rem] border-none rounded-lg bg-[#F2F2F2] flex justify-center items-center p-5">
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
                    <button className="border-2 rounded-[25px] px-12 py-2 mt-2 bg-[#F9F9F9] font-semibold text-[20px]">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
