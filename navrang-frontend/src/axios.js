import axios from 'axios';

const instance = axios.create({
    baseURL: "http://192.168.1.159:4000/api/"
    // baseURL: "http://127.0.0.1:4000/api/"
});

export default instance;