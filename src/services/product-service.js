import FetchClient from "@/services/service-client";

class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getProducts(params) {
        try {
            const { data } = await this.httpClient.get(`${process.env.NEXT_PUBLIC_PRODUCT_SERVER}/product` + `${params ? params : ""}`, false);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async getProductDetail(productId) {
        try {
            const { data } = await this.httpClient.get(`${process.env.NEXT_PUBLIC_PRODUCT_SERVER}/product/${productId}`, false);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async getSimilarProducts(productId) {
        try {
            const { data } = await this.httpClient.get(`${process.env.NEXT_PUBLIC_PRODUCT_SERVER}/product/similar/${productId}`, false);
            return data;
        } catch (err) {
            throw err;
        }
    }
}

const productService = new ProductService(FetchClient);
export default productService;