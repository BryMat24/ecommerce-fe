"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import productService from "@/services/product-service";
import Link from "next/link";

const featuredProducts = [
    {
        id: 5,
        name: "Apple MacBook Air M2",
    },
    {
        id: 15,
        name: "Google Pixel Tablet",
    },
    {
        id: 23,
        name: "Xiaomi 13T",
    },
];
export default function SearchBar() {
    const [showPanel, setShowPanel] = useState(false);
    const [relatedSearch, setRelatedSearch] = useState(featuredProducts);
    const [searchValue, setSearchValue] = useState("");

    const filterProducts = async (search) => {
        if (search.length === 0) {
            setRelatedSearch(featuredProducts);
            return;
        }
        setSearchValue(search);
        const getProducts = await productService.getProducts();
        const filteredProducts = getProducts
            .filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 5);
        setRelatedSearch(filteredProducts);
    };
    const waitAndHide = () => {
        setTimeout(() => {
            setShowPanel(false);
        }, 100);
    };

    return (
        <div className="flex py-5 w-[300px]">
            <Input
                className="border-none rounded-none outline-none focus:ring-0 focus:ring-offset-0"
                placeholder="Search for products"
                onFocus={() => setShowPanel(true)}
                onBlur={waitAndHide}
                onChange={(e) => filterProducts(e.target.value)}
                style={{ borderBottom: "1px solid #000" }}
            />

            <div
                className={`absolute w-[300px] z-10 top-[4rem] border-[1px] rounded-lg border-collapse bg-primary-foreground mt-1 ${
                    showPanel ? "" : "hidden"
                }`}
            >
                {relatedSearch.length === 0 ? (
                    <div className="pl-4 my-2">
                        No products found matching '{searchValue}'
                    </div>
                ) : (
                    <div>
                        {relatedSearch.map((product, index) => {
                            return (
                                <div
                                    className="pl-4 my-2 hover:bg-muted transition-all"
                                    key={index}
                                >
                                    <Link
                                        href={`/product/${product.id}`}
                                        className="flex w-full"
                                        onClick={waitAndHide}
                                    >
                                        <div className="text-primary flex justify-center items-center mr-4">
                                            <IoIosSearch />
                                        </div>
                                        {product.name}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
