"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function LoginPage(){
    const [haveAccount, setHaveAccount] = useState(true);
    return(
        <div className="w-full flex justify-center items-center h-[calc(100vh-3.5rem)]">
            <form className="w-96 h-96 flex flex-col justify-center bg-primary-foreground p-12 rounded-lg">
                <h1 className="text-3xl mb-6 font-bold text-center">{haveAccount? "Login" : "Sign Up"}</h1>
                <Label htmlFor="username" className="">Username</Label>
                <Input type="text" id="username" placeholder="Username" className="mb-6 mt-2 bg-transparent"/>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Password" className="mb-6 mt-2 bg-transparent"/>
                <Button type="submit" className=" text-white">Login</Button>
                <div className="text-sm pt-1">
                    {haveAccount? "Don't have an account?": "Already have an account?"}
                    <span className="font-bold hover:cursor-pointer pl-1 underline" onClick={() => setHaveAccount(false)}>{haveAccount? "Register": "Login"}</span>
                </div>
            </form>
        </div>
    )
}