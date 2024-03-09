"use client";

import { useEffect, useState } from "react";
import OrderSummary from "@/components/cart/order-summary";
import cartService from "@/services/cart-service";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

export default function CartPage() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const fetchCart = async () => {
            try {
                setLoading(true);
                const data = await cartService.getCarts();
                setCart(data);
                setLoading(false);
            } catch (err) {
                toast({
                    title: "Error!",
                    description: err?.response?.data?.message,
                });
            }
        };

        fetchCart();
    }, []);

    return loading ? (
        <>Loading</>
    ) : (
        <div className="w-full py-12 px-12">
            <h1 className="font-bold text-3xl mb-2">Cart</h1>
            {cart.length === 0 ? (
                <div className="text-muted-foreground">Cart is empty</div>
            ) : (
                <div className="w-full flex flex-row">
                    <div className="w-2/3">
                        <div className="w-full h-full">
                            {cart?.map((item, index) => (
                                <div
                                    className="w-[calc(100%-4rem)] flex flex-row mb-6"
                                    key={index}
                                >
                                    <div className="w-48 h-48 bg-[#F2F2F2] text-primary-foreground flex items-center justify-center">
                                        <img
                                            src={item?.product?.imageUrl}
                                            alt="image"
                                        />
                                    </div>
                                    <div className="flex flex-col px-4 w-[calc(100%-12rem)]">
                                        <div className="text-xl font-bold my-1">
                                            {item?.product?.name}
                                        </div>
                                        <div className="text-sm text-muted-foreground mb-1">
                                            Details:{" "}
                                            {item?.product?.description}
                                        </div>
                                        <div className="text-sm text-muted-foreground mb-1">
                                            Quantity: {item?.quantity}
                                        </div>
                                        <div className="text-xl text-right flex justify-between mt-8">
                                            <div>
                                                <Button
                                                    variant="ghost"
                                                    className="h-12 w-12 rounded-full text-xl"
                                                    onClick={() => {
                                                        removeItem(
                                                            item.product.id,
                                                            "decrement"
                                                        );
                                                    }}
                                                >
                                                    -
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    className="h-12 w-12 rounded-full text-xl"
                                                    onClick={() => {
                                                        removeItem(
                                                            item.product.id,
                                                            "increment"
                                                        );
                                                    }}
                                                >
                                                    +
                                                </Button>
                                            </div>

                                            <div className="font-bold">
                                                S$
                                                {item.product.price *
                                                    item.quantity}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/3">
                        <OrderSummary products={cart}></OrderSummary>
                    </div>
                </div>
            )}
        </div>
    );
}
