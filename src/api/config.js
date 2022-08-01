import axios from "axios"

export const baseUrl = 'https://www.fastmock.site/mock/efb99b7bee0fe1e8fc2887e9a7d16759/douyin_mall';
const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误')
    }
)

export { axiosInstance }