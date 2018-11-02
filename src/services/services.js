import axios from 'axios'

const services = axios.create({
    baseURL: "http://39.108.138.225:8080",  //公共路径
    // withCredentials: true  使得发送请求的时候带上cookie的
});

export default services;