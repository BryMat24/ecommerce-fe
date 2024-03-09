"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import authService from "@/services/auth-service";

export default function LoginPage() {
    const [userData, setUserData] = useState({});
    const router = useRouter();
    const { toast } = useToast();

    const handleOnChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = await authService.login(userData);
            toast({ title: "Login success!", message: data?.message });
            router.push("/explore");
        } catch (err) {
            toast({
                title: "Login error!",
                description: "Invalid email/password",
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
