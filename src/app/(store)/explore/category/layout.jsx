"use client";

import CategoryNavbar from "@/components/category-navbar/navbar";
import { NavbarContext } from "@/context/navbar-context";

export default function CategoryLayout({ children }) {
    return (
        <NavbarContext>
            <div className="w-full pr-14">
                <CategoryNavbar />
                {children}
            </div>
        </NavbarContext>
    );
}
