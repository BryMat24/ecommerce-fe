import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function OfferCarousel() {
    const carouselContent = [
        {
            url: "https://cdn.thewirecutter.com/wp-content/media/2023/06/businesslaptops-2048px-0943.jpg?auto=webp&quality=75&width=1024",
        },
        {
            url: "https://www.cnet.com/a/img/resize/0302d07e10ba8dc211f7b4e25891ad46dda31976/hub/2023/02/05/f52fdc98-dafc-4d05-b20e-8bd936b49a53/oneplus-11-review-cnet-lanxon-promo-8.jpg?auto=webp&fit=crop&height=675&width=1200",
        },
    ];

    return (
        <Carousel className="flex-grow" opts={{ loop: true }}>
            <CarouselContent>
                {carouselContent.map((el, index) => (
                    <CarouselItem key={index} className="w-[350px]">
                        <div>
                            <Card>
                                <CardContent className="flex h-72 items-center justify-center p-0 ">
                                    <img
                                        src={el.url}
                                        key={index}
                                        className="object-contain"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
