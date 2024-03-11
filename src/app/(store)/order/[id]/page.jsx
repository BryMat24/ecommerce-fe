"use client";

import { useParams } from "next/navigation";
import { IoMdAirplane } from "react-icons/io";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import orderService from "@/services/order-service";
import formatLongDate from "@/utils/format-date";
import convertDollar from "@/utils/format-currency";

const OrderItem = () => {
    const params = useParams();
    const { toast } = useToast();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchOrderItems = async () => {
            try {
                setLoading(false);
                const data = await orderService.getOrderDetail(params.id);
                setOrders(data);
                setLoading(true);
            } catch (err) {
                toast({
                    title: "Error!",
                    description: err?.response?.data?.message,
                });
            }
        };

        fetchOrderItems();
    }, []);

    return (
        <div className="w-full p-12 mt-16 mx-16 border-t-2">
            <h1 className="text-3xl font-bold">Order ID: {params?.id}</h1>
            <div className="flex my-6">
                <h2>
                    Order date:{" "}
                    <span className="text-[#5b5a5a]">
                        {formatLongDate(orders[0]?.order?.dateIn)}
                    </span>
                </h2>
                <div className="px-6 text-gray-300">|</div>
                <h2 className="flex justify-center items-center text-red-500">
                    <IoMdAirplane className="w-5 h-5 mr-1" />
                    <div className="">Estimated delivery: 5 days</div>
                </h2>
            </div>
            <div className="border-y-2">
                {orders.map((orderItem, index) => (
                    <div
                        className="w-full h-36 m-4 flex items-center"
                        key={index}
                    >
                        <div className="h-36 w-36 bg-[#F2F2F2] rounded-lg p-2">
                            <img
                                src={orderItem?.productOrder?.imageUrl}
                                alt="product image"
                                className="w-full h-full object-contain"
                            ></img>
                        </div>
                        <div className="w-full pr-8">
                            <div className="flex mx-4 justify-between">
                                <h2 className="text-xl">
                                    {orderItem?.productOrder?.name}
                                </h2>
                                <h2 className="text-xl">
                                    {convertDollar.format(
                                        orderItem?.productOrder?.price *
                                            orderItem?.quantity
                                    )}
                                </h2>
                            </div>
                            <div className="flex mx-4 justify-between text-[#5b5a5a]">
                                <div>Quantity: {orderItem?.quantity}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-b-2 flex p-4">
                <div className="w-1/2">
                    <h2 className="text-xl mb-2">Payment</h2>
                    <div>Visa {"4242 ****"}</div>
                    <div className="font-bold">Payment Approved</div>
                </div>
                <div className="w-1/2 pr-4">
                    <h2 className="text-xl mb-2">Order Summary</h2>
                    <div className="">
                        <div className="flex w-full justify-between text-xl">
                            <div>Subtotal</div>
                            <div className="">
                                {convertDollar.format(
                                    orders[0]?.order?.totalPrice
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;
