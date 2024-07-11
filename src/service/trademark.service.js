import { APIService } from "./api.service";
import { URL_API } from "@/constants/env";

export class TrademarkService extends APIService {

    constructor() {
        super(URL_API)
    }
    
    async getTrademarks(url) {
        return this.get(`${url}`)
        .then((response) => response?.data.data)
        .catch((error) => {
            throw error?.response?.data;
        });
    }
}