import axios from "axios";

const api = axios.create({
    baseURL: 'https://http://localhost:3333'
});

export default api;