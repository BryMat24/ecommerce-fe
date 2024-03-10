"use client";

import { useEffect, useState } from "react";
import cartService from "@/services/cart-service";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import convertDollar from "@/utils/format-currency";
import capitalizeFirstLetter from "@/utils/capitalize";

export default function CartPage() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        fetchCart();
    }, []);

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

    const updateCartQuantity = async (updateStatus) => {
        try {
            setLoading(true);
            await cartService.updateQuantityCart(productId, updateStatus);
            setLoading(false);
            toast({
                title: "Cart quantity updated!",
            });
        } catch (err) {
            toast({
                title: "Error!",
                description: err?.response?.data?.message,
            });
        }
    };

    return loading ? (
        <>Loading</>
    ) : (
        <div className="w-full py-12 px-12 mt-16 border-t-2 mx-16">
            <h1 className="font-bold text-3xl mb-8">Your Cart</h1>
            {cart.length === 0 ? (
                <div className="text-muted-foreground">Cart is empty</div>
            ) : (
                <>
                    <div className="flex bg-[#2F2F2F] py-2 text-white px-5">
                        <div className="w-2/3">Product</div>
                        <div className="flex-1">Quantity</div>
                        <div>Subtotal</div>
                    </div>
                    {cart?.map((el, index) => (
                        <div className="flex py-2 px-5" key={index}>
                            <div className="w-2/3 flex gap-5">
                                <img
                                    src={el?.product?.imageUrl}
                                    alt=""
                                    className="object-cover w-28 h-28"
                                />
                                <div className="flex flex-col justify-center">
                                    <p className="font-md text-xl">
                                        {capitalizeFirstLetter(
                                            el?.product?.name
                                        )}
                                    </p>
                                    <p className="font-bold">
                                        {convertDollar.format(
                                            el?.product?.price
                                        )}
                                    </p>
                                    <p className="text-red-400 cursor-pointer text-sm mt-2">
                                        Remove
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center">
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        className="h-8 w-8 rounded-full text-lg"
                                        onClick={() => {
                                            removeItem(
                                                item.product.id,
                                                "decrement"
                                            );
                                        }}
                                    >
                                        -
                                    </Button>
                                    <div className="font-medium text-sm">
                                        {el?.quantity}
                                    </div>
                                    <Button
                                        variant="ghost"
                                        className="h-8 w-8 rounded-full text-lg"
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
                            </div>
                            <div className="flex items-center">
                                <div>
                                    {convertDollar.format(
                                        el?.quantity * el?.product?.price
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex px-5 items-end flex-col">
                        <div className="border-black border-t-2 w-64 pt-2 flex justify-between">
                            <div>Subtotal:</div>
                            <div className="font-bold">
                                {convertDollar.format(cart.totalPrice)}
                            </div>
                        </div>
                        <Button className="mt-5 rounded-3xl px-5">
                            Proceed to checkout
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}
