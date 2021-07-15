import axios from 'axios';
import Logger from '../utils/Logger';
export default class ApiClient {

    static BASE_URL = 'http://192.46.214.45:3333/api';

    static REQUEST_METHOD = {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE',
    }

    static addCommonHeaders(headers) {
        headers["Content-Type"] = "application/json";
        headers["Accept"] = "application/json";
        return headers;
    }

    /**
     * 
     * @param {*} method to use for api request -> GET, POST, DELETE, PUT
     * @param {*} url - endpoint to append after baseUrl
     * @param {*} payload - to send with request
     * @param {*} params - to append as query strings
     * @param {*} apiHeaders - additional headers
     * @param {*} isAuthTokenRequired - if true must pass the token with API request
     * @returns 
     */
    static async call(method, url, payload, params, apiHeaders, isAuthTokenRequired = true) {

        let headers = apiHeaders ? apiHeaders : {};
        let requestParams = params ? params : {};

        headers = this.addCommonHeaders(headers);
        //TODO: get tokens from reducer or localstorage
        let userData = JSON.parse(window.localStorage.getItem('user'));
        const token = userData?.token;
        if(isAuthTokenRequired) {
            headers["Authorization"] = "Bearer " + token;
        }

        // let axiosInstance = axios.create({baseURL: process.env.REACT_APP_BASE_URL});
        // TODO: Need to rework on .env setup
        let axiosInstance = axios.create({baseURL: this.BASE_URL});

        // Logger.log('Web Service Url:', `${process.env.REACT_APP_BASE_URL}${url}`);
        Logger.log('Web Service Url:', `${this.BASE_URL}${url}`);
        Logger.log('Web Service Method:', method);
        Logger.log('Web Service payload:', payload);
        Logger.log('Web Service headers:', headers);
        Logger.log('Web Service params:', requestParams);

        try {
            let response = await axiosInstance.request({
                method: method,
                url: url,
                data: payload,
                params: requestParams,
                headers: headers,
            });
            Logger.log('Web Service Response:', response);
            if (response.status === 200) {
                if (response.data != null) {
                    return response.data;
                } else {
                    throw new Error('Something went wrong');
                }
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            Logger.log('API-Error:', error);
            throw error;
        }

    }
}