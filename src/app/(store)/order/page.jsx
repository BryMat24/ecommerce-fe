"use client";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Link from "next/link";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        quantity: 1
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        quantity: 2
    }
]

const orders = [
    {
        id: 1,
        items: [
            {
                product: products[0],
                quantity: 3
            },
            {
                product: products[1],
                quantity: 2
            }
        ]
    },
    {
        id: 2,
        items: [
            {
                product: products[1],
                quantity: 6
            }
        ]
    }
]

const getOrderCard = (order) => {
    return(
        <Link href={`/order/${order.id}`} className="w-full h-36 border m-4 flex items-center justify-between hover:bg-slate-50">
            <div className="h-36 w-36 bg-black">
                <Image></Image>
            </div>
            <div className="px-4 text-2xl font-semibold pr-16">View Order {">>>"}</div>
        </Link>
    )
}

export default function OrderPage(){
    return(
        <div className="p-12 w-full mt-16 border-t-2 mx-16">
            {orders.length === 0? <h1 className="font-bold text-3xl">No Orders</h1> : 
                (
                    <div className="w-full">
                        <h1 className="font-bold text-3xl mb-6">Orders</h1>
                        <div className="w-full flex flex-col">
                            {orders.map((order, index) => getOrderCard(order))}
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}