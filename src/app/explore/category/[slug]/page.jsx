"use client";
import { useEffect, useState } from "react"
import LoadingCategory from "./components/loading/loading";
import CategoryProduct from "./components/product/product";

export default function CategoryDetailsPage({ params }){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await fetch('/api/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ category: params.slug }),
            })
            .then(res => res.json())
            .then(res => res.data)
            .then(res =>{
                setProducts(res);
                setLoading(false);
            });
        }
        fetchData();
    }, []);
    
    return(
        loading? 
        (
            <LoadingCategory/>
        )
        :
        (
            <CategoryProduct products={products}/>
        )
    )
}