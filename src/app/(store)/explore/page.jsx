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
import Pagination from "@mui/material/Pagination";

export default function ExplorePage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");
    const [currPage, setCurrPage] = useState(1);
    const [categorySlug, setCategorySlug] = useState(categoryParam);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await productService.getProducts(
                    categoryParam
                        ? `?categorySlug=${categoryParam}&currPage=${currPage}`
                        : `?currPage=${currPage}`
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
    }, [categorySlug, currPage]);

    useEffect(() => {
        setCategorySlug(categoryParam);
        setCurrPage(1);
    }, [categoryParam]);

    return (
        <div className="w-full ">
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

            {!loading && (
                <div className="relative transition-all slide-up">
                    <div className="px-8 absolute top-[-70px] left-1/2 transform -translate-x-1/2 bg-white w-[90%] rounded-t-lg pb-12">
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

                        <div className="flex gap-8 flex-wrap mt-12 justify-center">
                            {products?.product?.map((product, index) => (
                                <ProductCard product={product} key={index} />
                            ))}
                        </div>
                        <div className="flex justify-center mt-24">
                            <Pagination
                                count={products?.totalPages}
                                onChange={(e, value) => {
                                    e.preventDefault();
                                    setCurrPage(value);
                                }}
                                size="large"
                                page={currPage}
                            />
                        </div>

                        <Footer />
                    </div>
                </div>
            )}
        </div>
    );
}
