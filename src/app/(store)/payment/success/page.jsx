"use client";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import orderService from "@/services/order-service";
import Link from "next/link";
import Image from "next/image";

const SuccessPage = () => {
    return (
        <div className="flex items-center justify-center h-[90vh] w-full">
            <div className="pt-5">
                <Image
                    src="/payment.png"
                    alt="payment successful image"
                    className="object-cover"
                    width={400}
                    height={300}
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
