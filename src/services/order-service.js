"use client";
import FetchClient from "@/services/service-client";

class OrderService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getCheckoutSession(cartItems) {
        try {
            const checkoutItems = []
            cartItems.forEach((el) => {
                checkoutItems.push({
                    productName: el.product.name,
                    quantity: el.quantity,
                    price: el.product.price,
                    productId: el.product.id
                })
            })

            const { data } = await this.httpClient.post("/order/create-checkout-session", checkoutItems, true);
            localStorage.setItem("sessionId", data?.sessionId);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async getOrders() {
        try {
            const { data } = await this.httpClient.get("/order", true);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async createOrders(sessionId) {
        try {
            await this.httpClient.post("/order", sessionId, true);
        } catch (err) {
            throw err;
        }
    }
}

const orderService = new OrderService(FetchClient);
export default orderService;