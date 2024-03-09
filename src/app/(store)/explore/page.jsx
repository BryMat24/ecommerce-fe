"use client";

import Carousel from "@/components/carousel/carousel";
import ProductCard from "@/components/product-card/product-card";
import { useEffect, useState } from "react";
import productService from "@/services/product-service";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/navbar/navbar";
import SearchBar from "@/components/searchbar/searchbar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoFilter } from "react-icons/io5";
import categoryService from "@/services/category-service";
import { carouselContent } from "@/data/carousel-content";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/footer/footer";

export default function ExplorePage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await productService.getProducts(
                    categoryParam ? `?categorySlug=${categoryParam}` : null
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

        const fetchCategories = async () => {
            try {
                setLoading(true);
                const data = await categoryService.getCategories();
                setCategories(data);
                setLoading(false);
            } catch (err) {
                toast({
                    title: "Error!",
                    description: err?.response?.data?.message,
                });
            }
        };

        fetchProducts();
        fetchCategories();
    }, [categoryParam]);

    return (
        <div className="w-full">
            <div className="relative">
                <div className="absolute top-0 left-0 right-0 z-10 w-full flex justify-center">
                    <div className="w-[90%]">
                        <Navbar />
                    </div>
                </div>

                <div className="relative">
                    <Carousel>
                        {carouselContent?.map((el, index) => (
                            <div key={index}>
                                <img
                                    src={el.url}
                                    alt="img1"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

            {!loading && (
                <div className="relative">
                    <div className="px-8 absolute top-[-70px] left-1/2 transform -translate-x-1/2 bg-white w-[90%] rounded-t-lg pb-12 ">
                        <div className="flex justify-between w-full">
                            <h1 className="font-bold text-3xl mb-4 mt-5">
                                Give All You Need
                            </h1>
                            <div className="flex gap-2">
                                <SearchBar />
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="hover:bg-transparent">
                                        <IoFilter />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>
                                            Filter Categories
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <Link href="/explore">
                                            <DropdownMenuItem>
                                                All
                                            </DropdownMenuItem>
                                        </Link>

                                        {categories.map((el, index) => (
                                            <Link
                                                href={`explore?category=${el?.slug}`}
                                                key={index}
                                            >
                                                <DropdownMenuItem>
                                                    {el.name}
                                                </DropdownMenuItem>
                                            </Link>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>

                        <div className="flex gap-8 flex-wrap mt-12">
                            {products.map((product, index) => (
                                <ProductCard product={product} key={index} />
                            ))}
                        </div>

                        <Footer />
                    </div>
                </div>
            )}
        </div>
    );
}
