import axios from 'axios';


// let url = "https://navrang-pgdav.herokuapp.com/api/"
let url = "http://127.0.0.1:4000/api";

const instance = axios.create({
    baseURL: url
});

export default instance;