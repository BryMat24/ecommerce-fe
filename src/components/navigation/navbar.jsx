"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import "./style.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { LuTruck } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="flex flex-col justify-between h-[calc(70vh-3.5rem)]">
        <div className="pb-16 mr-12">
            <h1 className="text-3xl font-bold">Explore</h1>
        </div>
        <div className="flex flex-col pb-16">
            <Button asChild className="py-6 px-2 my-1 align-left justify-start hover:bg-black hover:text-white" variant="ghost">
                <Link href="/" className=""> 
                    <AiOutlineHome className="text-2xl mr-4" />
                    <div>Home</div>
                </Link>
            </Button>
            <Button asChild className="py-6 px-2 my-1 align-left justify-start hover:bg-black hover:text-white" variant="ghost">
                <Link href="/explore" className="">
                    <BiCategory className="text-2xl mr-4" />
                    <div>Category</div>
                </Link>
            </Button>
            <Button asChild className="py-6 px-2 my-1 align-left justify-start hover:bg-black hover:text-white" variant="ghost">
                <Link href="/order" className="">
                    <LuTruck className="text-2xl mr-4" />
                    <div>Order</div>
                </Link>
            </Button>
            
        </div>
        <div className="flex flex-col border-t-2 pt-2">
            <Button asChild className="py-6 px-2 my-1 align-left justify-start hover:bg-black hover:text-white" variant="ghost">
                <Link href="/login" className="">
                    <FiUser className="text-2xl mr-2" />
                    <div>Login</div>
                </Link>
            </Button>
            <Button asChild className="py-6 px-2 my-1 align-left justify-start hover:bg-black hover:text-white" variant="ghost">
                <Link href="/settings" className="">
                    <IoSettingsOutline className="text-2xl mr-2" />
                    <div>Settings</div>
                </Link>
            </Button>
        </div>
    </nav>
  );
}
