"use client";
import { Input } from "@/components/ui/input";
import { GrCart } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SearchBar() {
    return (
        <div className="w-full flex items-center justify-center relative pt-3">
            <div className="w-64 text-center font-bold absolute left-2">
                LOGO
            </div>
            <Input
                className="ml-12 w-2/5 active:border-0"
                placeholder="Search for products"
            />
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
