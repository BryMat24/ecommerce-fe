"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import Link from "next/link";
import authService from "@/services/auth-service";

const Register = () => {
    const [userData, setUserData] = useState({});
    const router = useRouter();
    const { toast } = useToast();

    const handleOnChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = await authService.register(userData);
            toast({ title: "Register success!", message: data?.message });
            router.push("/login");
        } catch (err) {
            toast({
                title: "Register error!",
                // description: err?.response?.data?.message,
            });
        }
    };

    return (
        <div className="w-full flex justify-center items-center h-[calc(100vh-3.5rem)]">
            <Image
                src="/login.png"
                className="w-[36rem] h-[36rem] rounded-s-lg shadow-2xl"
                alt="login png"
                width={1440}
                height={900}
            />

            <form
                className="w-[36rem] h-[36rem] flex flex-col justify-center bg-primary-foreground p-12 rounded-e-lg shadow-2xl"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl mb-6 font-bold text-center">
                    Register
                </h1>
                <Label htmlFor="username" className="">
                    Username
                </Label>
                <Input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="mb-6 mt-2 bg-transparent"
                    name="name"
                    onChange={handleOnChange}
                />

                <Label htmlFor="username" className="">
                    Email
                </Label>
                <Input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="mb-6 mt-2 bg-transparent"
                    name="email"
                    onChange={handleOnChange}
                />

                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="mb-6 mt-2 bg-transparent"
                    name="password"
                    onChange={handleOnChange}
                />
                <Button type="submit" className=" text-white">
                    Register
                </Button>
                <Link href="/login" className="mt-2 mx-auto">
                    Already have an account?
                </Link>
            </form>
        </div>
    );
};

export default Register;
