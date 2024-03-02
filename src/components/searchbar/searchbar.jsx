"use client";
import { Input } from "@/components/ui/input";
import { GrCart } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import productService from "@/services/product-service";
import Link from "next/link";


const featuredProducts = [
    {
        id: 4,
        name: "Laptop 1",
    }, 
    {
        id: 9,
        name: "Phone 1",
    },
    {
        id:14,
        name: "Tabelt 1"
    }
]
export default function SearchBar() {
    const [showPanel, setShowPanel] = useState(false);
    const [relatedSearch, setRelatedSearch] = useState(featuredProducts);
    const [searchValue, setSearchValue] = useState("");

    const filterProducts = async (search) => {
        if(search.length === 0) {
            setRelatedSearch(featuredProducts);
            return;
        }
        setSearchValue(search);
        const getProducts = await productService.getProducts();
        const filteredProducts = getProducts.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())).slice(0, 5);
        setRelatedSearch(filteredProducts);
        
    }
    const waitAndHide = () => {
        setTimeout(() => {
            setShowPanel(false);
        }, 100);
    }

    return (
        <div className="w-full flex items-center justify-center relative pt-5">
            <Link href="/explore">
                <div className="w-64 text-center font-bold absolute left-2">
                    LOGO
                </div>
            </Link>

            <Input
                className="ml-12 w-2/5 active:border-0"
                placeholder="Search for products"
                onFocus={() => setShowPanel(true)}
                onBlur={waitAndHide}
                onChange={(e) => filterProducts(e.target.value)}
            />
            <div className={`absolute w-2/5 z-10 top-[4rem] border-[1px] rounded-lg border-collapse bg-primary-foreground ${showPanel? "": "hidden"}`}>
                {
                    relatedSearch.length === 0? <div className="pl-4 my-2">No products found matching '{searchValue}'</div>
                    :(  
                        <div>
                            {
                                relatedSearch.map((product) => {
                                    return(
                                        <div className="pl-4 my-2 hover:bg-muted transition-all">
                                            <Link href={`/product/${product.id}`} className="flex w-full" onClick={waitAndHide}>
                                                <div className="text-primary flex justify-center items-center mr-4">
                                                    <IoIosSearch />
                                                </div>
                                                {product.name}
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
            <Button
                className="w-12 h-12 ml-2 flex items-center justify-center rounded-full"
                variant="ghost"
            >
                <Link
                    href="/cart"
                    className="w-full h-full flex items-center justify-center"
                >
                    <GrCart />
                </Link>
            </Button>
            
        </div>
    );
}
