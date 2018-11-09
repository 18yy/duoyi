import axios from 'axios'

const services = axios.create({
<<<<<<< HEAD
    baseURL: "http://39.108.138.225:8080",  //公共路径
    // withCredentials: true  使得发送请求的时候带上cookie的
=======
	baseURL: "http://39.108.138.225:8080", //公共路径
	// withCredentials: true  使得发送请求的时候带上cookie的
	/*headers: {
		'Content-Type': 'application/json'
	} */
>>>>>>> f847dd3... 完成个人中心现有的所有接口
});

export default services;