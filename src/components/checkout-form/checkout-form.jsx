"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutForm(){
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Submitted")
        console.log(form)
    }
    return (
        <div>
            <form className="flex flex-col space-y-4 w-3/4" onSubmit={(e) => handleSubmit(e)}>
                <h3 className="mt-4 text-xl font-bold">Contact Information</h3>
                <div className="flex flex-row justify-between">
                    <Input
                        type="text"
                        placeholder="First Name"
                        className="border border-muted-foreground rounded-md p-2 w-[calc(50%-0.75rem)]"
                        value={form.firstName}
                        onChange={(e) => setForm({...form, firstName: e.target.value})}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        className="border border-muted-foreground rounded-md p-2 w-[calc(50%-0.75rem)]"
                        value={form.lastName}
                        onChange={(e) => setForm({...form, lastName: e.target.value})}
                        required
                    />
                </div>
                <Input
                    type="email"
                    placeholder="Email"
                    className="border border-muted-foreground rounded-md p-2"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    required
                />
                <Input
                    type="contact"
                    placeholder="Contact"
                    className="border border-muted-foreground rounded-md p-2"
                    value={form.contact}
                    onChange={(e) => setForm({...form, contact: e.target.value})}
                    required
                />

                <h3 className="mt-4 text-xl font-bold">Shipping Address</h3>
                <Input
                    type="text"
                    placeholder="Address"
                    className="border border-muted-foreground rounded-md p-2"
                    value={form.address}
                    onChange={(e) => setForm({...form, address: e.target.value})}
                    required
                />
                <div className="flex justify-between">
                    <Input
                        type="text"
                        placeholder="City"
                        className="border border-muted-foreground rounded-md p-2 w-[calc(33%-0.5rem)] mr-4"
                        value={form.city}
                        onChange={(e) => setForm({...form, city: e.target.value})}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="State"
                        className="border border-muted-foreground rounded-md p-2 w-[calc(33%-0.5rem)] mr-4"
                        value={form.state}
                        onChange={(e) => setForm({...form, state: e.target.value})}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Postal Code"
                        className="border border-muted-foreground rounded-md p-2 w-[calc(33%-0.5rem)]"
                        value={form.postalCode}
                        onChange={(e) => setForm({...form, postalCode: e.target.value})}
                        required
                    />
                </div>
                <div className="w-36 ml-auto">
                    {/* <Button className="w-full"></Button> */}
                    <button type="submit" className="w-full bg-primary rounded-md p-2 text-white">Checkout</button>
                </div>
            </form>
        </div>
    )
}