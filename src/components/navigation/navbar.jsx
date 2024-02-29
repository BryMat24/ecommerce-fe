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
import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { LuTruck } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const Routes = [
    {
        name: "Home",
        icon: <AiOutlineHome className="text-2xl mr-4" />,
        path: "/",
    },
    {
        name: "Explore",
        icon: <BiCategory className="text-2xl mr-4" />,
        path: "/explore",
    },
    {
        name: "Order",
        icon: <LuTruck className="text-2xl mr-4" />,
        path: "/order",
    },
    {
        name: "Login",
        icon: <FiUser className="text-2xl mr-4" />,
        path: "/login",
    },
    {
        name: "Settings",
        icon: <IoSettingsOutline className="text-2xl mr-4" />,
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
            className="py-1 px-2 ml-6 w-auto align-left justify-start bg-transparent text-xs text-primary hover:bg-transparent hover:text-red-500"
        >
            <Link href={categoryRoute.path} className="w-full">
                <div className="w-full">{categoryRoute.name}</div>
            </Link>
        </Button>
    );
};
const getNavigation = (route) => {
    return route.name == "Explore" ? (
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
                            <div className="">{route.name}</div>
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
            <Link href={route.path} className="">
                {route.icon}
                <div>{route.name}</div>
            </Link>
        </Button>
    );
};
export default function Navbar() {
    return (
        <nav className="flex flex-col justify-between h-[calc(70vh-3.5rem)]">
            <div className="pb-16 mr-12">
                <h1 className="text-3xl font-bold">Explore</h1>
            </div>
            <div className="flex flex-col pb-16">
                {Routes.slice(0, 3).map((route, index) => getNavigation(route))}
            </div>
            <div className="flex flex-col border-t-2 pt-2">
                {Routes.slice(3, 5).map((route, index) => getNavigation(route))}
            </div>
        </nav>
    );
}
