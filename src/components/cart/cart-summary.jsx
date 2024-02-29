"use client";
import { Button } from "@/components/ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/axios";

const getCartItem = (item, fetchCart) => {
    // Error CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    const removeItem = async (id, updateStatus) => {
        await apiClient.put(`/cart/${id}?updateStatus=${updateStatus}` ,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                "Content-Type": "application/json"
            }
        }).then(() => fetchCart())
    }
    return(
        <div className="w-[calc(100%-4rem)] flex flex-row mb-6">
            <div className="w-48 h-48 bg-foreground text-primary-foreground flex items-center justify-center">Image</div>
            <div className="flex flex-col px-4 w-[calc(100%-12rem)]">
                <div className="text-xl font-bold my-1">{item.product.name}</div>
                <div className="text-sm text-muted-foreground mb-1">Category: {item.product.category}</div>
                <div className="text-sm text-muted-foreground mb-1">Details: {item.product.description}</div>
                <div className="text-sm text-muted-foreground mb-1">Quantity: {item.quantity}</div>
                <div className="text-xl text-right flex justify-between mt-8">
                    <div>
                        <Button variant="ghost" className="h-12 w-12 rounded-full text-xl" onClick={() => {removeItem(item.product.id, "decrement")}}>
                            -
                        </Button>
                        <Button variant="ghost" className="h-12 w-12 rounded-full text-xl" onClick={() => {removeItem(item.product.id, "increment")}}>
                            +
                        </Button>
                    </div>
                    
                    <div className="font-bold">
                        S${item.product.price * item.quantity}  
                    </div>
                </div>
                
            </div>
            
            
        </div>
    )
}
export default function CartSummary({cart, fetchCart}){
    console.log(cart)
    return(
        <div className="w-full h-full">
            {cart.map(item => getCartItem(item, fetchCart))}
        </div>
    )
}