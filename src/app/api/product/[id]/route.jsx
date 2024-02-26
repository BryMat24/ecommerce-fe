import {products} from "./const"
import { NextResponse } from "next/server"

export async function GET(request, {params}){
    const id = params.id;
    const product = products.find((product) => product.id === Number(id));
    return NextResponse.json({data: product})
}