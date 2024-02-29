import FetchClient from "@/services/service-client";

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
}

const productService = new ProductService(FetchClient);
export default productService;