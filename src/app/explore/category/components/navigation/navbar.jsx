import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { useContext } from "react";
import { CategoryState } from "../context/navbar";

const categories = [
    {
        name: "All",
        slug: "all"
    },
    {
        name: "Laptop",
        slug: "laptop"
    },
    {
        name: "Mobile",
        slug: "mobile"
    },
    {
        name: "Tablet",
        slug: "tablet"
    }
]

const getNavLinkes = (category, active, setActive) => {
    const hoverStyle = " hover:text-black hover:bg-transparent hover:border-b-[1.5px]"
    const activeStyle = " border-b-[1.5px]"
    return (
        <Button 
            asChild 
            className={"py-0 px-0 align-left justify-center w-20 mx-2 text-sm bg-transparent text-black rounded-none border-primary" + hoverStyle + (active == category.slug? activeStyle: "")}
            onClick={() => setActive(category.slug)}
        >
            <Link href={'./' + category.slug} className=""> 
                <div>{category.name}</div>
            </Link>
        </Button>
    )
}
export default function CategoryNavbar(){
    const {active, setActive} = useContext(CategoryState)
    
    return(
        <nav className="flex w-full p-0 pt-4 justify-center">
            <div className="flex w-1/2 justify-center">
                {categories.map((category) => (
                    <div key={category.slug}>
                        {getNavLinkes(category, active, setActive)}
                    </div>
                ))}
            </div>
        </nav>
    )
}