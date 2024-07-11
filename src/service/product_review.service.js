import { APIService } from "./api.service";
import { URL_API } from "@/constants/env";

export class ProductReviewService extends APIService {

    constructor() {
        super(URL_API)
    }
    
    async getProductReviews(url) {
        return this.get(`${url}`)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }

    async getProductReview(url) {
        return this.get(`${url}`)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }

    async createProductReview(url, data) {
        return this.post(`${url}`,data)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }

    async updateProductReview(url, data) {
        return this.put(`${url}`,data)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }

    async deleteProductReview(url) {
        return this.delete(`${url}`)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }
}