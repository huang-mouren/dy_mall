import { axiosInstance } from "./config";

export const getGoodsInfoRequest = () =>
    axiosInstance.get('/goodsInfo')

export const getOrdersInfoRequest = () =>
    axiosInstance.get('/ordersInfo')

export const getCartInfoRequest = () =>
    axiosInstance.get('/cartInfo')