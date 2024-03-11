"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { useState, useEffect } from "react";
import MainImg from "../../public/ecommerce.webp";
import MainPageImg from "../../public/main-page-img.jpeg";
import "@/components/style/main-page.css";
export default function Home() {
    const [nextPage, setNextPage] = useState(false);

    return (
        <main className="w-full h-[100vh] bg-primary-foreground">
            <div className="w-full h-full bg-[#f4efeb]">
                <AspectRatio ratio={3 / 1} className="" id="main-page-image">
                    <Image
                        src={MainImg}
                        alt="Photo by Drew Beamer"
                        fill
                        className="object-cover"
                    />
                </AspectRatio>
                <div
                    className="text-5xl font-bold w-full text-center mt-24"
                    id="main-page-title"
                >
                    Welcome to Our Store
                </div>
                <Link
                    href="#main-page"
                    onClick={() => {
                        setNextPage(true);
                    }}
                    className="w-full absolute bottom-0 h-80 bg-transparent hover:opacity-5"
                ></Link>
            </div>

            {nextPage && (
                <div
                    className="w-full h-full bg-primary-foreground flex"
                    id="main-page"
                >
                    <div
                        className="w-1/3 h-full bg-muted"
                        id="main-page-image-2"
                    >
                        <Image
                            src={MainPageImg}
                            className="a object-cover w-full h-full"
                        ></Image>
                    </div>
                    <div className="flex flex-col w-2/3 h-full">
                        <div
                            className="w-full bg-[#f4efeb] px-12 py-10 pb-4 h-80"
                            id="main-page-section-1"
                        >
                            <div className="text-8xl font-bold">
                                {" "}
                                Discover Cutting Edge Technology{" "}
                            </div>
                            <div className="text-3xl text-muted-foreground my-4">
                                Explore Our Latest Innovations
                            </div>
                        </div>
                        <div
                            className="w-full bg-primary h-[calc(100vh-20rem)] px-12 flex flex-col"
                            id="main-page-section-2"
                        >
                            <div className="flex-1 flex items-center">
                                <Link
                                    href="/explore"
                                    className="text-primary-foreground underline text-4xl transition-all"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
