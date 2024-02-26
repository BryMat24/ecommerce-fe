import { carts } from "./const"
import { NextResponse } from "next/server";

// will return list of products and their quantity in the cart
//
export async function GET(){
    const cartItems = carts;

    return NextResponse.json({data: cartItems})
}