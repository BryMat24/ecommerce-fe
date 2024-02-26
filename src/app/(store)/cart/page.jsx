"use client";

import { useEffect, useState } from "react";
import OrderSummary from "./components/order-summary/order-summary";
import CartSummary from "./components/cart-summary/cart-summary";
export default function CartPage(){
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCart = async () => {
        setLoading(true);
        await fetch("/api/cart", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => res.data)
        .then(res => {
            setCart(res);
            setLoading(false);
        })
    }
    useEffect(() => {
        fetchCart();
    }, [])

    return(
        loading? <></> :
        <div className="w-full py-12 px-12">
            <h1 className="font-bold text-3xl mb-2">Cart</h1>
            {
                cart.length === 0? <div className="text-muted-foreground">Cart is empty</div> :
                (
                    <div className="w-full flex flex-row">
                        <div className="w-2/3">
                            <CartSummary cart={cart} fetchCart={fetchCart}></CartSummary>
                        </div>
                        <div className="w-1/3">
                            <OrderSummary cart={cart}></OrderSummary>
                        </div>
                    </div>
                )
            }
        </div>
    )
}