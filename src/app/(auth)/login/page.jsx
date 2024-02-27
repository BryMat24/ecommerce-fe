"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { apiClient } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

export default function LoginPage() {
    const [userData, setUserData] = useState({});
    const { toast } = useToast();
    const router = useRouter();

    const handleOnChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const { data } = await apiClient.post("/login", userData);
            localStorage.setItem("access_token", data?.token);
            localStorage.setItem("email", data?.email);
            toast({ title: "Login success!" });
            router.push("/explore");
        } catch (err) {
            console.log(err);
            toast({
                title: "Login error!",
                description: err?.response?.data?.message,
            });
        }
    };

    return (
        <div className="w-full flex justify-center items-center h-[calc(100vh-3.5rem)]">
            <form
                className="w-96 h-96 flex flex-col justify-center bg-primary-foreground p-12 rounded-lg"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl mb-6 font-bold text-center">Login</h1>
                <Label htmlFor="username" className="">
                    Email
                </Label>
                <Input
                    type="text"
                    id="email"
                    placeholder="email"
                    className="mb-6 mt-2 bg-transparent"
                    name="email"
                    onChange={handleOnChange}
                />
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    className="mb-6 mt-2 bg-transparent"
                    onChange={handleOnChange}
                />
                <Button type="submit" className=" text-white">
                    Login
                </Button>
                <Link href="/register" className="mt-2 mx-auto">
                    Don't have an account?
                </Link>
            </form>
        </div>
    );
}
