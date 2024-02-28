"use client";

import { Button } from "@/components/ui/button";
import { GrCart } from "react-icons/gr";
import { useState, useEffect } from "react"
export default function ProductPage({params}){
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`/api/product/${params.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(res => {console.log(res); return res.data})
            .then(res => {
                setProduct(res)
                setLoading(false)
                console.log(res)
            })
        }
        fetchProduct();
    },[])

    const addToCart = async (quantity, productID) => {
        await fetch('/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productID, quantity})
        })
        .then(res => res.json())
        .then(res => res.data)
        .then(res => console.log(res))
    }

    return(
        !loading &&
        <div className="p-12 w-full h-full flex relative">
            <div className="w-[30rem] h-[30rem] bg-black flex justify-center items-center text-white">
                Image
            </div>
            <div className="px-12 w-[calc(100%-30rem)] h-[30rem] flex flex-col">
                <h1 className="text-xl font-bold">{product.name}</h1>
                <div className="font-semibold">Category: {product.category}</div>
                <div className="font-semibold text-lg my-10">S$ {product.price}</div>
                <div className="font-semibold">Description: </div>
                <div className="text-muted-foreground">{product.description}</div>
                

                <div className="absolute bottom-16">
                    <div className="">Quantity</div>
                    <div className="flex items-center mb-2">
                        <Button className="w-12 h-12 p-0 rounded-full" variant="ghost"onClick={() => setQuantity(Math.max(quantity-1, 1))}>-</Button>
                        <div className="mx-4 text-md">{quantity}</div>
                        <Button className="w-12 h-12 p-0 rounded-full" variant="ghost" onClick={() => setQuantity(Math.min(quantity+1, product.stock))}>+</Button>
                    </div>
                    <Button onClick={() => addToCart(quantity, params.id)}>
                        <GrCart className="mr-2"/>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}