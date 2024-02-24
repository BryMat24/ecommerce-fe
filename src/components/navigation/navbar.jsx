"use client";
import { Button } from "@/components/ui/button"
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
        icon: <AiOutlineHome className="text-2xl mr-4"/>,
        path: "/"
    },
    {
        name: "Category",
        icon: <BiCategory className="text-2xl mr-4"/>,
        path: "/explore"
    },
    {
        name: "Order",
        icon: <LuTruck className="text-2xl mr-4"/>,
        path: "/order"
    },
    {
        name: "Login",
        icon: <FiUser className="text-2xl mr-4"/>,
        path: "/login"
    },
    {
        name: "Settings",
        icon: <IoSettingsOutline className="text-2xl mr-4"/>,
        path: "/settings"
    }
]

const getNavigation = (route) => {
    return(
        <Button asChild className="py-6 px-2 my-1 align-left justify-start hover:bg-black hover:text-white" variant="ghost">
            <Link href={route.path} className="">
                {route.icon}
                <div>{route.name}</div>
            </Link>
        </Button>
    )
}
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
