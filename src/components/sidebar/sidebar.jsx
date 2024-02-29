"use client";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";
import "./style.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { LuTruck } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Routes = [
    {
        name: "Categories",
        icon: <BiCategory className="text-3xl mr-3" />,
        path: "/explore",
    },
    {
        name: "Cart",
        icon: <MdOutlineShoppingCart className="text-3xl mr-3" />,
        path: "/cart",
    },
    {
        name: "Order",
        icon: <LuTruck className="text-3xl mr-3" />,
        path: "/order",
    },
    {
        name: "Settings",
        icon: <IoSettingsOutline className="text-3xl mr-3" />,
        path: "/settings",
    },
];

const CategoryRoutes = [
    {
        name: "All",
        path: "/explore/category/all",
    },
    {
        name: "Laptop",
        path: "/explore/category/laptop",
    },
    {
        name: "Mobile",
        path: "/explore/category/mobile",
    },
    {
        name: "Tablet",
        path: "/explore/category/tablet",
    },
];

const getCategoryNavigation = (categoryRoute) => {
    return (
        <Button
            asChild
            className="py-1 px-2 ml-6 w-auto align-left justify-start bg-transparent text-md text-primary hover:bg-transparent hover:text-red-500"
        >
            <Link href={categoryRoute.path} className="w-full">
                <div className="w-full">{categoryRoute.name}</div>
            </Link>
        </Button>
    );
};
const getNavigation = (route) => {
    return route.name == "Categories" ? (
        <Accordion type="single" collapsible className="w-full border-none">
            <AccordionItem value="item-1 w-full border-none">
                <Button
                    asChild
                    className="py-6 px-2 my-1 align-left justify-start hover:bg-black hover:text-white w-full"
                    variant="ghost"
                >
                    <AccordionTrigger className="w-full hover:no-underline flex flex-row justify-start border-none">
                        <Link
                            href={route.path}
                            className="w-full flex flex-row"
                        >
                            {route.icon}
                            <div className="text-lg mr-2">{route.name}</div>
                        </Link>
                    </AccordionTrigger>
                </Button>
                <AccordionContent className="w-full flex flex-col border-none">
                    {CategoryRoutes.map((categoryRoute) =>
                        getCategoryNavigation(categoryRoute)
                    )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ) : (
        <Button
            asChild
            className="py-6 px-2 my-1 align-left justify-start hover:bg-black hover:text-white"
            variant="ghost"
        >
            <Link href={route.path}>
                {route.icon}
                <div className="text-lg">{route.name}</div>
            </Link>
        </Button>
    );
};
export default function Sidebar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("access_token")) setIsLoggedIn(true);
    });

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("email");
        setIsLoggedIn(false);
    };

    return (
        <nav className="flex flex-col justify-between h-[calc(70vh-3.5rem)]">
            <div className="pb-15 mr-12">
                <h1 className="text-3xl font-bold">Explore</h1>
            </div>
            <div className="flex flex-col pb-16">
                {Routes.slice(0, 3).map((route, index) => getNavigation(route))}
            </div>
            <div className="flex flex-col border-t-2 pt-2">
                {Routes.slice(3, 4).map((route, index) => getNavigation(route))}
                {!isLoggedIn ? (
                    <Button
                        asChild
                        className="py-6 px-2 my-1 align-left justify-start hover:bg-black hover:text-white cursor-pointer"
                        variant="ghost"
                    >
                        <Link href="/login">
                            <FiUser className="text-3xl mr-3" />
                            <div className="text-lg">Login</div>
                        </Link>
                    </Button>
                ) : (
                    <Button
                        asChild
                        className="py-6 px-2 my-1 align-left justify-start hover:bg-black hover:text-white cursor-pointer"
                        variant="ghost"
                    >
                        <div className="text-lg" onClick={handleLogout}>
                            <FiUser className="text-3xl mr-3" />
                            <div className="text-lg">Logout</div>
                        </div>
                    </Button>
                )}
            </div>
        </nav>
    );
}
