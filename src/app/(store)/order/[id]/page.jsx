"use client";

import { useParams } from "next/navigation";
import { IoMdAirplane } from "react-icons/io";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
    }
]

const order = {
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
    ],
    subTotal: 700,
}

const getOrderCard = (orderItem) => {
    return(
        <div className="w-full h-36 m-4 flex items-center">
            <div className="h-36 w-36 bg-black">
                <Image></Image>
            </div>
            <div className="w-full pr-8">
                <div className="flex mx-4 justify-between">
                    <h2 className="text-xl">{orderItem.product.name}</h2>
                    <h2 className="text-xl">S${orderItem.product.price * orderItem.quantity}</h2>
                </div>
                <div className="flex mx-4 justify-between text-gray-400">
                    <div>Item type</div>
                    <div>Quantity: {orderItem.product.quantity}</div>
                </div>
            </div>
        </div>
    )
}


const OrderItem = () => {
    const params = useParams();
    return (
        <div className="w-full p-12 mt-16 mx-16 border-t-2">
            <h1 className="text-3xl font-bold">Order ID: {params?.id}</h1>
            <div className="flex my-6">
                <h2>Order date: {order.date}</h2>
                <div className="px-6 text-gray-300">|</div>
                <h2 className="flex justify-center items-center text-red-500"> 
                    <IoMdAirplane className="w-5 h-5 mr-1"/>
                    <div className="">Estimated delivery: {order.delivery}</div>
                </h2>
            </div>
            <div className="border-y-2">
                { order.items.map((orderItem, index) => getOrderCard(orderItem))}
            </div>
            <div className="border-b-2 flex p-4">
                <div className="w-1/2">
                    <h2 className="text-xl mb-2">Payment</h2>
                    <div>Visa { "4123 ****" }</div>
                    <div className="font-bold">Payment Approved</div>
                </div>
                <div className="w-1/2 pr-4">
                    <h2 className="text-xl mb-2">Order Summary</h2>
                    <div className="">
                        <div className="flex w-full justify-between text-xl">
                            <div>Subtotal</div>
                            <div className="">${order.subTotal}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default OrderItem;