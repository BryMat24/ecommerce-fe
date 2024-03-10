import FetchClient from "@/services/service-client";

class CartService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getCarts() {
        try {
            const { data } = await this.httpClient.get("/cart", true);
            let total = 0;
            data.forEach((el) => {
                total += el?.product?.price * el?.quantity;
            });
            data.totalPrice = total;
            return data;
        } catch (err) {
            throw err;
        }
    }

    async addCart(productId, quantity = 1) {
        try {
            const { data } = await this.httpClient.post(`/cart/${productId}`, { quantity }, true);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async updateQuantityCart(productId, updateStatus) {
        try {
            const { data } = await this.httpClient.put(`/cart/${productId}?updateStatus=${updateStatus}`, true);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async deleteItem(productId) {
        try {
            const { data } = await this.httpClient.delete(`/cart/${productId}`, true);
            return data;
        } catch (err) {
            throw err;
        }
    }
}

const cartService = new CartService(FetchClient);
export default cartService;