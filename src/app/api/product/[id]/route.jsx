import {products} from "./const"
import { NextResponse } from "next/server"
import { apiClient } from "@/lib/axios";
export async function GET(request, {params}){
    const id = params.id;
    // const product = products.find((product) => product.id === Number(id));
    const product = await apiClient.get(`/product/${id}`)
    // const product = await fetch(`http://localhost:8080/product/${id}`)
    // .then(res => {console.log(res); return res.json()})
    // .catch(err => console.log(err))
    
    return NextResponse.json({data: product})
}