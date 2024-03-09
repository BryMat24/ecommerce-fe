import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdHistory } from "react-icons/md";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("access_token")) setIsLoggedIn(true);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("email");
        setIsLoggedIn(false);
    };

    return (
        <div className=" bg-white h-[60px] rounded-b-lg flex items-center px-8 justify-between">
            <div className="font-bold text-lg relative">
                <Link href="/explore">
                    <p>Dope</p>
                </Link>

                <div className="rounded-full border-2 border-[#df5f4f] w-[7px] h-[7px] absolute top-[6px] right-[-8px]"></div>
            </div>
            <div className="flex items-center gap-3">
                <Link href="/cart">
                    <div className="w-[40px] h-[40px] border-2 rounded-full flex justify-center items-center">
                        <MdOutlineShoppingCart className="w-[20px] h-[20px] cursor-pointer" />
                    </div>
                </Link>

                <Link href="/order">
                    <div className="w-[40px] h-[40px] border-2 rounded-full flex justify-center items-center">
                        <MdHistory className="w-[20px] h-[20px] cursor-pointer" />
                    </div>
                </Link>

                {isLoggedIn ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger className="hover:bg-transparent">
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                Hi, {localStorage.getItem("email")}
                            </DropdownMenuLabel>
                            <DropdownMenuItem onClick={handleLogout}>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <Link href="/login">
                        <FaUserCircle className="w-[25px] h-[25px] cursor-pointer" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
