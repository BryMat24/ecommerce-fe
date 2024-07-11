"use client";
import { Suspense } from "react";
import Explore from "@/components/explore/explore";

const ExplorePage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Explore />
        </Suspense>
    );
};

export default ExplorePage;
