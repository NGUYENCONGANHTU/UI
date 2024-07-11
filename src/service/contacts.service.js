import { APIService } from "./api.service";
import { URL_API } from "@/constants/env";

export class ContactsService extends APIService {

    constructor() {
        super(URL_API)
    }
    
    async createContact(url, data) {
        console.log(data);
        return this.post(`${url}`, data)
          .then((response) => response?.data.data)
          .catch((error) => {
            throw error?.response?.data;
          });
      }
}