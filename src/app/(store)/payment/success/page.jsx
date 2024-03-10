"use client";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import orderService from "@/services/order-service";

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
        <div>
            <div>Payment success</div>
            <div>
                Thank you for your payment. An automated payment receipt will be
                sent to your registered email
            </div>
            <p>Back to home!</p>
        </div>
    );
};

export default SuccessPage;
