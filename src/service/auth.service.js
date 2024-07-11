import { APIService } from "./api.service";
import { URL_API } from "@/constants/env";

export class AuthService extends APIService {

    constructor() {
        super(URL_API)
    }

    async userInfo(url) {
        return this.get(`${url}`)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }
    
    async login(url,data) {
        return this.post(`${url}`,data)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }

    async logout(url) {
        return this.get(url)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }

    async refreshToken(url,data) {
        return this.post(`${url}`,data)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }

    async register(url,data) {
        return this.post(`${url}`,data)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }

    async changePassword(url,data) {
        return this.put(`${url}`,data)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }
}