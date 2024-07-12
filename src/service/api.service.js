/**
 * base call api service
 */
import axios from "axios";
import Cookies from "js-cookie";
import router from '@/router/index';
export class APIService {

    constructor(baseURL) {
        this.baseURL = baseURL;
        this.router = router;
        this.initInterceptors();
    }

    setAccessToken(token) {
        Cookies.set("accessToken", token, { expires: 60 });
    }

    getAccessToken() {
        return Cookies.get("accessToken");
    }

    purgeAccessToken() {
        Cookies.remove("accessToken", { path: "/" });
    }

    getHeaders() {
        return {
            Authorization: `Bearer ${this.getAccessToken()}`,
        };
    }

    get(url, config = {}) {
        return axios({
            method: "get",
            url: this.baseURL + url,
            headers: this.getAccessToken() ? this.getHeaders() : {},
            ...config,
        });
    }

    post(url, data = {}, config = {}) {
        return axios({
            method: "post",
            url: this.baseURL + url,
            data,
            headers: this.getAccessToken() ? this.getHeaders() : {},
            ...config,
        });
    }

    put(url, data = {}, config = {}) {
        return axios({
            method: "put",
            url: this.baseURL + url,
            data,
            headers: this.getAccessToken() ? this.getHeaders() : {},
            ...config,
        });
    }

    delete(url, data, config = {}) {
        return axios({
            method: "delete",
            url: this.baseURL + url,
            headers: this.getAccessToken() ? this.getHeaders() : {},
            ...config,
        });
    }
    request(config = {}) {
        return axios(config);
    }

    initInterceptors() {

        axios.interceptors.request.use(
            async (config) => {
                // Catch request before sending
                const accessToken = Cookies.get("user_info_token");
                if (accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        axios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if(error.response.status === 401){
                    // reset token
                    const accessToken = Cookies.get("user_info_token");
                    const newData = this.post(`api/users/user_authenticate/refreshToken`, accessToken)
                    Cookies.set('user_info_token',newData.data.data.token)
                }else if (error.response.status === 403){
                    // to => page 403
                }
                return Promise.reject(error);
            }
        );
    }
}