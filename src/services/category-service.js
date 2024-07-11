import FetchClient from "@/services/service-client";

class CategoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getCategories() {
        try {
            const { data } = await this.httpClient.get(`${process.env.NEXT_PUBLIC_SERVER}/product/category`, false);
            return data;
        } catch (err) {
            throw err;
        }
    }
}

const categoryService = new CategoryService(FetchClient);
export default categoryService;