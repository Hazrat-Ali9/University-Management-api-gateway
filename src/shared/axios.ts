import axios, { AxiosInstance } from "axios";
import config from "../config";

const HttpService = (baseUrl: string): AxiosInstance => {
    const instance = axios.create({
        baseURL: baseUrl,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    instance.interceptors.request.use(
        (config) => {
            return config
        },
        (error) => {
            return error
        }
    );

    instance.interceptors.response.use(
        (response) => {
            return response.data
        },
        (error) => {
            return Promise.reject(error)
        }
    );

    return instance;
}

const AuthService = HttpService(config.authServiceUrl);
const CoreService = HttpService(config.coreServiceUrl);

export { HttpService, AuthService, CoreService }
