"use client";

import Carousel from "@/components/carousel/carousel";
import ProductCard from "@/components/product-card/product-card";
import { useEffect, useState } from "react";
import productService from "@/services/product-service";
import { useToast } from "@/components/ui/use-toast";

export default function ExplorePage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await productService.getProducts();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                toast({
                    title: "Error!",
                    description: err?.response?.data?.message,
                });
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="w-full">
            <Carousel>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1580974928064-f0aeef70895a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="img1"
                        className="object-cover"
                    />
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="img2"
                        className="object-cover"
                    />
                </div>
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="img3"
                        className="object-cover"
                    />
                </div>
            </Carousel>

            {!loading && (
                <div className="px-28 mt-12">
                    <h1 className="font-bold text-3xl mb-4">Our Products </h1>
                    <div className="flex gap-8 flex-wrap">
                        {products.map((product, index) => (
                            <ProductCard product={product} key={index} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
