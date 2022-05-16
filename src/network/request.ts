import axios from 'axios';

export function request(config: Object) {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 5000,
    });
    instance.interceptors.request.use(
        (config) => {
            return config;
        },
        (err) => {
            return err;
        }
    );
    instance.interceptors.response.use(
        (res) => {
            return res;
        },
        (err) => {
            return err;
        }
    );

    return instance(config);
}
