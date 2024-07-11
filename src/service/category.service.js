import { APIService } from "./api.service";
import { URL_API } from "@/constants/env";

export class CategoryService extends APIService {

    constructor() {
        super(URL_API)
    }
    
    async getCategories(url) {
        return this.get(`${url}`)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }
}