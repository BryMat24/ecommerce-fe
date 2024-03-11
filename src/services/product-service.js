import FetchClient from "@/services/service-client";
import capitalizeFirstLetter from "@/utils/capitalize";
import convertDollar from "@/utils/format-currency";

class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getProducts(params) {
        try {
            const { data } = await this.httpClient.get(`/product` + `${params ? params : ""}`, false);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async getProductDetail(productId) {
        try {
            const { data } = await this.httpClient.get(`/product/${productId}`, false);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async getSimilarProducts(productId) {
        try {
            const { data } = await this.httpClient.get(`/product/similar/${productId}`, false);
            return data;
        } catch (err) {
            throw err;
        }
    }
}

const productService = new ProductService(FetchClient);
export default productService;