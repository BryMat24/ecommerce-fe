"use client";
import Link from "next/link";
import Image from "next/image";
import orderService from "@/services/order-service";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import convertDollar from "@/utils/format-currency";
import formatLongDate from "@/utils/format-date";

export default function OrderPage() {
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const { toast } = useToast();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const data = await orderService.getOrders();
                setOrders(data);
                setLoading(false);
            } catch (err) {
                toast({
                    title: "Error!",
                    description: err?.response?.data?.message,
                });
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="p-12 w-full mt-16 border-t-2 mx-16">
            <div className="w-full">
                <h1 className="font-bold text-3xl mb-6">Orders</h1>
                {orders.length === 0 ? (
                    <div className="text-muted-foreground">Order is empty</div>
                ) : (
                    <div className="w-full flex flex-col">
                        {orders.map((order, index) => (
                            <Link
                                href={`/order/${order?.id}`}
                                key={index}
                                className="w-full h-36 border-b-2 border-r-2 m-4 flex items-center justify-between transition-all hover:translate-y-[-0.25rem] hover:shadow-lg"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center justify-center h-36 w-36 p-2 bg-[#F2F2F2]">
                                        <img
                                            className="object-contain"
                                            src={order?.imageUrl}
                                        />
                                    </div>
                                    
                                    <div className="flex gap-2 flex-col">
                                        <p className="font-bold">
                                            Order ID: {order?.id}
                                        </p>
                                        <p>
                                            {convertDollar.format(
                                                order?.totalPrice
                                            )}
                                        </p>
                                        <p>{formatLongDate(order?.dateIn)}</p>
                                    </div>
                                </div>
                                <div className="px-4 text-2xl font-semibold pr-16">
                                    View Detail
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
