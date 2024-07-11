import FetchClient from "@/services/service-client";

class CartService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getCarts() {
        try {
            const { data } = await this.httpClient.get(`${process.env.NEXT_PUBLIC_SERVER}/cart`, true);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async addCart(productId, quantity = 1) {
        try {
            const { data } = await this.httpClient.post(`${process.env.NEXT_PUBLIC_SERVER}/cart/${productId}`, { quantity }, true);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async updateQuantityCart(productId, updateStatus) {
        try {
            const { data } = await this.httpClient.put(`${process.env.NEXT_PUBLIC_SERVER}/cart/${productId}?status=${updateStatus}`, true);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async deleteItem(productId) {
        try {
            const { data } = await this.httpClient.delete(`${process.env.NEXT_PUBLIC_SERVER}/cart/${productId}`, true);
            return data;
        } catch (err) {
            throw err;
        }
    }
}

const cartService = new CartService(FetchClient);
export default cartService;