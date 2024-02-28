"use client";

import { useEffect, useState } from "react";
import OrderSummary from "./components/order-summary/order-summary";
import CartSummary from "./components/cart-summary/cart-summary";
import { apiClient } from "@/lib/axios";

export default function CartPage(){
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const resetState = () => {
        setCart([]);
        setLoading(true);
    }
    
    // convert the obtained productId and quantity to the actual product details
    const convertCart = async (rawCart) => {
        resetState()
        await rawCart.forEach(async (item) => {
            await apiClient.get(`/product/${item.productId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then(data => setCart(prev => [...prev, {product: data.data, quantity: item.quantity}]))
        })
        return cart;
    }

    // fetch cart to get the list of products (productId) and its corresponding quantity
    const fetchCart = async () => {
        resetState();
        await apiClient.get("/cart", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(async data => await convertCart(data.data))
        .then(() => setLoading(false))
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
                            <OrderSummary products={cart}></OrderSummary>
                        </div>
                    </div>
                )
            }
        </div>
    )
}