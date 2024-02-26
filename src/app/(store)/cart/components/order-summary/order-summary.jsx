"use client";
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
export default function OrderSummary({cart}){
    const [total, setTotal] = useState(0);
    useEffect(() => {
        cart.forEach(item => {
            setTotal(total + item.quantity * item.product.price)
        })
    }, [])
    return(
        <div className="w-full h-full p-6">
            <h2 className="font-bold text-xl w-full">Order Summary</h2>
            <div className="flex flex-row text-sm">
                <div className="w-2/3">
                    <div className="my-4">Subtotal</div>
                    <div className="my-4">Shipping</div>
                    <div className="font-bold">Estimated Total</div>
                </div>
                <div className="w-1/3">
                    <div className="my-4">S${total.toFixed(2)}</div>
                    <div className="my-4">S$0.00</div>
                    <div className="font-bold">S${total.toFixed(2)}</div>
                </div>
            </div>
            <Button className="w-full mt-6">Checkout</Button>
        </div>
    )
}