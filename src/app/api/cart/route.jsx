import { carts } from "./const"
import { NextResponse } from "next/server";

// will return list of products and their quantity in the cart
export async function GET(){
    const cartItems = carts;

    return NextResponse.json({data: cartItems})
}

export async function POST(request){
    const product = await request.json().then(res => res.product);
    const quantity = await request.json().then(res => res.quantity);
    const cartItems = carts.concat({product, quantity});

    return NextResponse.json({data: cartItems})
}

// will filter the cart and remove the product with the given id
// if this function is called, the sequence will be:
//      PUT (update the cart) -> GET (re-fetch the cart)
export async function PUT(request){
    const id = await request.json().then(res => res.id);
    const cartItems = carts.filter(item => item.product.id !== id);

    return NextResponse.json({id, data: cartItems})
}