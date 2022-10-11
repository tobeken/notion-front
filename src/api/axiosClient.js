import axios from "axios"

const BASE_URL="http://local:5000/api/v1";
const getToken = () =>localStorage.getItem("token")

const axiosClient = axios.create({
    baseURL:BASE_URL,
});

//APIを叩く前の前処理

axiosClient.interceptors.request.use(async(config)=> {
    return{
        ...config,
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${getToken()}`, //リクエストヘッダにJWTをつけてサーバーに渡す
        }
    }
})

axiosClient.interceptors.response.use((response)=>{
    return response.data;
},
(err)=>{
    throw err.response
})

export default axiosClient