import FetchClient from "@/services/service-client";

class CartService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getCarts() {
        try {
            const { data } = await this.httpClient.get("/cart", true);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async addCart(cartId, quantity = 1) {
        try {
            const { data } = await this.httpClient.post(`/cart/${cartId}`, { quantity }, true);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async updateQuantityCart(cartId, updateStatus) {
        try {
            const { data } = await this.httpClient.put(`/cart/${cartId}?updateStatus=${updateStatus}`, true);
            return data;
        } catch (err) {
            throw err;
        }
    }
}

const cartService = new CartService(FetchClient);
export default cartService;