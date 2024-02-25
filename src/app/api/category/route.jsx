import { products } from "./const"

import { NextResponse } from "next/server";
export async function POST(request) {
    const category = await request.json().then(res => res.category);
    const categoryProducts = category == 'all'? products:  products.filter(product => product.category === category);

    return NextResponse.json({data: categoryProducts});
}