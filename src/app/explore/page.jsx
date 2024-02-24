"use client";
import OfferCarousel from "./components/carousel/carousel";
import TopProducts from "./components/products/top-products";
import Image from "next/image";
import OfferImage from "../../../public/discount.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
export default function ExplorePage(){
    return(
        <div className="w-full py-8">
            <div className="w-full flex justify-between px-14">
                <OfferCarousel />
                <div className="h-64 w-64 rounded-lg border-2">
                    <AspectRatio ratio={1 / 1} className="">
                        <Image
                            src={OfferImage}
                            alt="Photo by Drew Beamer"
                            fill
                            className="object-cover" />
                    </AspectRatio>
                </div>
            </div>

            <div className="px-14 mt-6">
                <h1 className="font-bold text-2xl mb-4  ">Top Products <span className="text-sm font-normal ml-2 ">view all</span> </h1>
                <TopProducts />
            </div>
        </div>
    )
}