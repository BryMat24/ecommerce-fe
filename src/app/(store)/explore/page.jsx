"use client";

import OfferCarousel from "@/components/explore/carousel";
import { TopProducts } from "@/components/explore/top-products";
import Image from "next/image";
import Link from "next/link";
import OfferImage from "@/../public/discount.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { apiClient } from "@/lib/axios";
import { useEffect, useState } from "react";

export default function ExplorePage() {
    const [topProducts, setTopProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTopProducts = async () => {
            try {
                const { data } = await apiClient.get("/product", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "access_token"
                        )}`,
                    },
                });
                setTopProducts(data.slice(0, 4));
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchTopProducts();
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
                <div className="px-14 mt-6">
                    <h1 className="font-bold text-2xl mb-4  ">
                        Top Products{" "}
                        <Link
                            className="text-sm font-normal ml-2 hover:underline"
                            href="/explore/category/all"
                        >
                            view all
                        </Link>{" "}
                    </h1>
                    <TopProducts products={topProducts} />
                </div>
            )}
        </div>
    );
}
