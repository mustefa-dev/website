import axios from "axios";

export const API_BASE_URL = process.env.REACT_APP_BASE_URL;

if (!API_BASE_URL) {
    console.error('REACT_APP_BASE_URL is not defined');
}

export const INIT_HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

export const axiosService = axios.create({
    baseURL: API_BASE_URL,
    headers: INIT_HEADERS,
});
