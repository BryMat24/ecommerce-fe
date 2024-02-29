import FetchClient from "@/services/service-client";

class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getProducts() {
        try {
            const { data } = await this.httpClient.get("/product", false);
            return data;
        } catch (err) {
            throw err;
        }
    }
}

const productService = new ProductService(FetchClient);
export default productService;