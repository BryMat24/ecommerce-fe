"use client";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import orderService from "@/services/order-service";
import Link from "next/link";

const SuccessPage = () => {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        console.log("test");
        addOrder();
    }, []);

    const addOrder = async () => {
        try {
            setLoading(true);
            await orderService.createOrders(localStorage.getItem("sessionId"));
            setLoading(false);
        } catch (err) {
            toast({
                title: "Error!",
                description: err?.response?.data?.message,
            });
        }
    };

    return (
        <div className="flex items-center justify-center h-[90vh] w-full">
            <div className="pt-5">
                <img
                    src="/payment.png"
                    alt="payment successful image"
                    className="object-cover"
                />
                <p className="text-center text-2xl">
                    Your payment is successful!
                </p>
                <p className="text-center mt-3 text-[#777777] text-lg">
                    Thank you for your payment. An automated payment receipt
                    will be sent to your registered email.
                </p>
                <Link href="/explore">
                    <p className="text-center mt-8 text-[#FE6D6D] underline underline-offset-2">
                        Back to Home
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;
