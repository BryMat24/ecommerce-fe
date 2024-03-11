"use client";

import { Button } from "@/components/ui/button";
import { GrCart } from "react-icons/gr";
import { useState, useEffect } from "react";
import productService from "@/services/product-service";
import { useToast } from "@/components/ui/use-toast";
import { useParams, useRouter } from "next/navigation";
import capitalizeFirstLetter from "@/utils/capitalize";
import convertDollar from "@/utils/format-currency";
import cartService from "@/services/cart-service";
import ProductCard from "@/components/product-card/product-card";
import Footer from "@/components/footer/footer";
import Link from "next/link";

export default function ProductPage() {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const params = useParams();
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        if (localStorage.getItem("access_token")) setIsLoggedIn(true);

        const fetchProduct = async () => {
            try {
                setLoading(true);
                const data = await productService.getProductDetail(params?.id);
                setProduct(data);
                setLoading(false);
            } catch (err) {
                toast({
                    title: "Error!",
                    description: err?.response?.data?.message,
                });
            }
        };

        const fetchSimilarProducts = async () => {
            try {
                setLoading(true);
                const data = await productService.getSimilarProducts(
                    params?.id
                );
                setSimilarProducts(data);
                setLoading(false);
            } catch (err) {
                toast({
                    title: "Error!",
                    description: err?.response?.data?.message,
                });
            }
        };

        fetchProduct();
        fetchSimilarProducts();
    }, []);

    const addToCart = async () => {
        try {
            if (!isLoggedIn) return router.push("/login");
            await cartService.addCart(params?.id, quantity);
            toast({
                title: "Added to cart successful!",
            });
        } catch (err) {
            toast({
                title: "Error!",
                description: err?.response?.data?.message,
            });
        }
    };

    console.log(similarProducts);

    return (
        !loading && (
            <div className="p-24 w-full h-full flex justify-center relative mt-16 border-t-2 mx-16 flex-col pb-0">
                <div>
                    <div className="flex gap-8">
                        <div className="w-[30rem] h-[30rem] flex justify-center items-center text-white rounded-3xl bg-[#F2F2F2]">
                            <img
                                src={product?.imageUrl}
                                alt="product image"
                                className="object-contain h-4/5 w-4/5 hover:scale-125 transition-all duration-500 cursor-zoom-in"
                            />
                        </div>
                        <div className="px-12 w-[calc(100%-30rem)] h-[30rem] flex flex-col justify-center">
                            <h1 className="text-4xl font-bold">
                                {capitalizeFirstLetter(product?.name)}
                            </h1>
                            <div className="text-muted-foreground mt-8 max-w-[400px]">
                                {product?.description}
                            </div>
                            <div className="mt-8">
                                <p className="font-bold text-xl ">
                                    {convertDollar.format(product?.price)}
                                </p>
                                <p className="mt-1">Stock: {product?.stock}</p>
                            </div>
                            <div className="mt-8 flex items-center gap-5">
                                <div className="flex items-center bg-[#F2F2F2] rounded-lg h-[45px]">
                                    <Button
                                        className="w-12 h-12 p-0"
                                        variant="ghost"
                                        onClick={() =>
                                            setQuantity(
                                                Math.max(quantity - 1, 1)
                                            )
                                        }
                                    >
                                        -
                                    </Button>
                                    <div className="mx-4 text-md ">
                                        {quantity}
                                    </div>
                                    <Button
                                        className="w-12 h-12 p-0"
                                        variant="ghost"
                                        onClick={() =>
                                            setQuantity(
                                                Math.min(
                                                    quantity + 1,
                                                    product?.stock
                                                )
                                            )
                                        }
                                    >
                                        +
                                    </Button>
                                </div>
                                <Button
                                    onClick={() => addToCart()}
                                    className="h-[45px]"
                                >
                                    <GrCart className="mr-2" />
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 w-[95%]">
                    <h1 className="font-bold text-3xl">Related Products</h1>
                    <div className="flex gap-2 mt-5 justify-between">
                        {
                            similarProducts.map((el, index) => (<ProductCard product={el} key={index} />))
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        )
    );
}
