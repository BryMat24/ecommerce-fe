"use client";
import { apiClient } from "@/lib/axios";
import OfferCarousel from "@/components/carousel/carousel";
import ProductCard from "@/components/product-card/product-card";
import Image from "next/image";
import OfferImage from "@/../public/discount.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useState } from "react";
import productService from "@/services/product-service";
import { useToast } from "@/components/ui/use-toast";

export default function CategoryDetailsPage({ params }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await productService.getProducts(
                    `?categorySlug=${params.slug}`
                );
                setProducts(data);
                setLoading(false);
            } catch (err) {
                toast({
                    title: "Error!",
                    description: err?.response?.data?.message,
                });
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full py-8">
            <div className="w-full flex justify-center px-28 gap-5">
                <OfferCarousel />
                <div className="h-72 w-2/5 rounded-lg border-2">
                    <AspectRatio ratio={1 / 1} className="h-72 border-2">
                        <Image
                            src={OfferImage}
                            alt="Photo by Drew Beamer"
                            fill
                            className="object-cover"
                        />
                    </AspectRatio>
                </div>
            </div>

            {!loading && (
                <div className="px-28 mt-12">
                    <h1 className="font-bold text-3xl mb-4">Our Products </h1>
                    <div className="flex gap-8 flex-wrap">
                        {products?.map((product, index) => (
                            <ProductCard product={product} key={index} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
