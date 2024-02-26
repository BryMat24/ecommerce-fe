"use client";

import CategoryNavbar from "./components/navigation/navbar"
import { NavbarContext } from "./components/context/navbar";
export default function CategoryLayout({ children }){
    return(
        <NavbarContext>
            <div className="w-full pr-14">
                <CategoryNavbar />
                {children}
            </div>
        </NavbarContext>
    )
}