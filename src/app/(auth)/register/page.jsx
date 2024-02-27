"use client";
import { useState } from "react";
import { apiClient } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Register = () => {
    const [data, setData] = useState({});
    const { toast } = useToast();
    const router = useRouter();

    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await apiClient.post("/register", data);
            toast({ title: "Register success!" });
            router.push("/login");
        } catch (err) {
            toast({
                title: "Register error!",
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
            </form>
        </div>
    );
};

export default Register;
