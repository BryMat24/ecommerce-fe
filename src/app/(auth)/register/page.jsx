"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import loginImage from "../../../../public/login.png";
import Image from "next/image";
import Link from "next/link";
const Register = () => {
    const [userData, setUserData] = useState({});
    const router = useRouter();

    const handleOnChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = authService.register(userData);
            toast({ title: "Login success!", message: data?.message });
            router.push("/login");
        } catch (err) {
            toast({
                title: "Login error!",
                description: err?.response?.data?.message,
            });
        }
    };

    return (
        <div className="w-full flex justify-center items-center h-[calc(100vh-3.5rem)]">
            <Image src={loginImage} className="w-[36rem] h-[36rem] rounded-s-lg shadow-2xl"/>
            <form
                className="w-[36rem] h-[36rem] flex flex-col justify-center bg-primary-foreground p-12 rounded-e-lg"
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
