"use client";
import FetchClient from "@/services/service-client";

class OrderService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getCheckoutSession(cartItems) {
        try {
            const checkoutItems = []
            cartItems?.items.forEach((el) => {
                checkoutItems.push({
                    productId: el.productId
                })
            })

            const { data } = await this.httpClient.post(`${process.env.NEXT_PUBLIC_SERVER}/order`, checkoutItems, true);
            localStorage.setItem("sessionId", data?.sessionId);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async getOrders() {
        try {
            const { data } = await this.httpClient.get(`${process.env.NEXT_PUBLIC_SERVER}/order`, true);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async getOrderDetail(orderId) {
        try {
            const { data } = await this.httpClient.get(`${process.env.NEXT_PUBLIC_SERVER}/order/${orderId}`, true);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async createOrders(sessionId) {
        try {
            await this.httpClient.post(`${process.env.NEXT_PUBLIC_SERVER}/order`, sessionId, true);
        } catch (err) {
            throw err;
        }
    }
}

const orderService = new OrderService(FetchClient);
export default orderService;