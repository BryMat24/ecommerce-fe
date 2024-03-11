"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { useState, useEffect } from "react";
import MainImg from "../../public/ecommerce.webp";
import MainPageImg from "../../public/main-page-img.jpeg";
import "@/components/style/main-page.css";
export default function Home() {

    return (
        <main className="w-full h-[100vh]">
            <div
                className="w-full h-full flex gradient-background"
            >
                <div
                    className="w-1/2 h-full flex items-center justify-center"
                    id="main-page-image-2"
                >
                    <img src="/landing.png" className="object-contain h-2/3 w-2/3 "></img>     
                </div>
                <div className="flex flex-col w-1/2 h-full justify-center">
                    <div
                        className="w-full px-12 pb-4"
                        id="main-page-section-1"
                    >
                        <div className="text-muted-foreground text-sm">FREE DELIVERY FOR FIRST ORDER</div>
                        <div className="text-5xl font-bold">
                            {" "}
                            Discover Cutting Edge Technology{" "}
                        </div>
                        <div className="text-3xl text-muted-foreground my-4">
                            Explore Our Latest Innovations
                        </div>
                    </div>
                    <div
                        className="w-full px-12 flex flex-col"
                        id="main-page-section-2"
                    >
                        <div className="flex-1 flex items-center">
                            <Link
                                href="/explore"
                                className="text-primary-foreground text-md bg-primary rounded-lg mr-3 p-2 w-32 text-center hover:bg-muted-foreground transition-all duration-300"
                            >
                                Shop Now
                            </Link>
                            <Link
                                href="/login"
                                className="text-primary text-md ml-3 border p-2 rounded-lg w-32 text-center transition-all duration-300 hover:bg-muted"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
