import axios from "axios";
const URL = import.meta.env.VITE_BASE_API_URL

const instance = axios.create({
    baseURL:URL
    // timeout:1000
})

export default instance;