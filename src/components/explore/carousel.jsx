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
    return (
        <Carousel
            className="flex-grow border-black border-2"
            opts={{ loop: true }}
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div>
                            <Card>
                                <CardContent className="flex h-72 items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">
                                        {index + 1}
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
