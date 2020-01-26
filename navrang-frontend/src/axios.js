import axios from 'axios';


let url = "https://navrang-pgdav.herokuapp.com/"

if (!process.env.PORT) {
    url = "http://127.0.0.1:4000/";
}
console.log(url);
const instance = axios.create({
    baseURL: url
});

export default instance;