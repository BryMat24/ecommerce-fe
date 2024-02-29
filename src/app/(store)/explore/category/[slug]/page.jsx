"use client";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/axios";
import CategoryProduct from "@/components/product-card/product-card";

export default function CategoryDetailsPage({ params }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (params.slug === "all") {
                const { data } = await apiClient.get("/product", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "access_token"
                        )}`,
                    },
                });
                setProducts(data);
                setLoading(false);
                return;
            }

            // Otherwise, we filter the product based on the category (categoryId)
            const categoryList = await apiClient
                .get("/category", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "access_token"
                        )}`,
                    },
                })
                .then((res) => res.data);
            const categoryId = categoryList.find(
                (category) => category.name === params.slug
            ).id;
            const query = `?categoryId=${categoryId}`;
            const { data } = await apiClient.get(`/product${query}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                    )}`,
                },
            });
            setProducts(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    return <div>ntar ini</div>;
}
