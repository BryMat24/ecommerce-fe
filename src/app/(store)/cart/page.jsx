"use client";

import { useEffect, useState } from "react";
import cartService from "@/services/cart-service";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import convertDollar from "@/utils/format-currency";
import capitalizeFirstLetter from "@/utils/capitalize";
import Swal from "sweetalert2";
import orderService from "@/services/order-service";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();
    const router = useRouter();

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

    const updateCartQuantity = async (productId, updateStatus) => {
        try {
            setLoading(true);
            await cartService.updateQuantityCart(productId, updateStatus);
            await fetchCart();
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

    const handleRemoveItem = async (productId) => {
        try {
            setLoading(true);
            await cartService.deleteItem(productId);
            await fetchCart();
            setLoading(false);
            toast({
                title: "Item removed from cart!",
            });
        } catch (err) {
            toast({
                title: "Error!",
                description: err?.response?.data?.message,
            });
        }
    };

    const handleCheckout = async () => {
        try {
            setLoading(true);
            const data = await orderService.getCheckoutSession(cart);
            router.push(data?.checkoutUrl);
            setLoading(false);
        } catch (err) {
            toast({
                title: "Error!",
                description: err?.response?.data?.message,
            });
        }
    };

    return (
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
                                    className="object-contain w-28 h-28"
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
                                    <p
                                        className="text-red-400 cursor-pointer text-sm mt-2"
                                        onClick={() => {
                                            Swal.fire({
                                                title: `Do you want to remove this item from cart?`,
                                                showCancelButton: true,
                                                confirmButtonText: "Delete",
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    handleRemoveItem(
                                                        el?.product?.id
                                                    );
                                                }
                                            });
                                        }}
                                    >
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
                                            if (el.quantity == 1) return;
                                            updateCartQuantity(
                                                el?.product?.id,
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
                                            if (
                                                el?.quantity ==
                                                el?.product?.stock
                                            )
                                                return;
                                            updateCartQuantity(
                                                el?.product?.id,
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
                        <Button
                            className="mt-5 rounded-3xl px-5 w-[180px]"
                            onClick={handleCheckout}
                            disable={loading}
                        >
                            {loading ? "Loading..." : "Proceed to checkout"}
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}
