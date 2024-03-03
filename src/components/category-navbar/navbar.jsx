import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import { CategoryState } from "@/context/navbar-context";
import categoryService from "@/services/category-service";
import { useEffect } from "react";

const getNavLinkes = (category, active, setActive) => {
    const hoverStyle =
        " hover:text-black hover:bg-transparent hover:border-b-[1.5px]";
    const activeStyle = " border-b-[1.5px]";
    return (
        <Button
            asChild
            className={
                "py-0 px-0 align-left justify-center w-20 mx-2 text-md bg-transparent text-black rounded-none border-primary" +
                hoverStyle +
                (active == category.name ? activeStyle : "")
            }
            onClick={() => setActive(category.name)}
        >
            <Link
                href={
                    category?.name !== "all"
                        ? `/explore/category/${category?.name}`
                        : "/explore"
                }
                className=""
            >
                <div>{category.name.charAt(0).toUpperCase() + category.name.slice(1, category.length)}</div>
            </Link>
        </Button>
    );
};
export default function CategoryNavbar() {
    const { active, setActive } = useContext(CategoryState);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await categoryService.getCategories();
                data.unshift({ name: "all" });
                setCategories(data);
            } catch (err) {
                toast({
                    title: "Fetch error!",
                    description: err?.response?.data?.message,
                });
            } finally {
                console.log(categories)
            }
        };

        fetchCategories();
    }, []);

    return (
        <nav className="flex w-full p-0 pt-4 justify-center">
            <div className="flex w-1/2 justify-center">
                {categories.map((category, index) => (
                    <div key={index}>
                        {getNavLinkes(category, active, setActive)}
                    </div>
                ))}
            </div>
        </nav>
    );
}
