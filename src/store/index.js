// 使用configureStore创建Store
import { configureStore } from "@reduxjs/toolkit";
import goodsInfoSlice from "./features/goodsInfoSlice";
import cartInfoSlice from "./features/cartInfoSlice";
import ordersInfoslice from "./features/ordersInfoslice";
const store =configureStore({
    // 所有的Reducer在这里combine
    reducer:{
        goodsInfo:goodsInfoSlice,
        cartInfo:cartInfoSlice,
        ordersInfo:ordersInfoslice
    }
})

// 默认导出store
export default store
