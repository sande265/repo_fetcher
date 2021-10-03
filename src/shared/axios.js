import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASEURL
})

api.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        return Promise.reject(error.response);
    });

api.interceptors.request.use(
    function (config) {
        // let token = loginToken()
        // if (token) {
        //     config.headers["Authorization"] = 'Bearer ' + token;
        // }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export const success = (type, payload) => {
    return { type: type, payload }
}

export const failure = (type, payload) => {
    return { type: type, payload }
}

export const processing = (type, payload) => {
    return { type: type, payload }
}