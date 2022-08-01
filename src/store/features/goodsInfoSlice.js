// 通过createSlice 创建Slice
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { getGoodsInfoRequest } from "@/api/request";

// 使用createAsyncThunk创建异步action
// 该方法触发时会有三种状态
// pending(进行中) fulfilled(成功)，rejected(失败)
export const getGoodsInfo=createAsyncThunk('goodsInfo/getGoodsInfo', //type
    // data
    async ()=>{
        // console.log(await getGoodsInfoRequest())
        return  await getGoodsInfoRequest()
        // return data;
    }
)
const initialState={
    loading:false
    /** 
    goods:{
        byId:{
            1:{
                id:1,
                shopId:"mi111",
                name:"RedmiNote11 4G手机",
                imgUrl:"https://img14.360buyimg.com/n7/jfs/t1/189071/26/24872/250013/62870273E0be46c79/2be13b0a9f01f66f.jpg",
                price:999,
                types:{
                    "颜色":['黑色','蓝色','紫色'],
                    "存储":['8+128G','8+256G','12+256G'],
                    allTypes:["颜色","存储"]
                }
            },
            2:{
                id:2,
                shopId:"mi111",
                name:"ipad mini 平板电脑",
                imgUrl:"https://img10.360buyimg.com/n7/jfs/t1/86940/3/26618/122396/6246970cE40f70e5f/fbfef3df69cf8217.jpg",
                price:3599,
                types:{
                    "颜色":['黑色','蓝色','紫色'],
                    "存储":['8+128G','8+256G','12+256G'],
                    allTypes:["颜色","存储"]
                }
            },
            3:{
                id:3,
                shopId:"mi222",
                name:"RedmiNote11 4G手机",
                imgUrl:"https://img14.360buyimg.com/n7/jfs/t1/189071/26/24872/250013/62870273E0be46c79/2be13b0a9f01f66f.jpg",
                price:999,
                types:{
                    "颜色":['黑色','蓝色','紫色'],
                    "存储":['8+128G','8+256G','12+256G'],
                    allTypes:["颜色","存储"]
                }
            },
            4:{
                id:4,
                shopId:"mi222",
                name:"ipad mini 平板电脑",
                imgUrl:"https://img10.360buyimg.com/n7/jfs/t1/86940/3/26618/122396/6246970cE40f70e5f/fbfef3df69cf8217.jpg",
                price:3599,
                types:{
                    "颜色":['黑色','蓝色','紫色'],
                    "存储":['8+128G','8+256G','12+256G'],
                    allTypes:["颜色","存储"]
                }
            },
            
        },
        allIds:[1,2,3,4]
    },
    shops:{
        byId:{
            "mi111":{
                id:"mi111",
                name:"小米官方旗舰店111",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/1122879666_1184688902_88_88.png",
                goods:[1,2]
            },
            "mi222":{
                id:"mi222",
                name:"小米官方旗舰店222",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/1122879666_1184688902_88_88.png",
                goods:[3,4]
            },
        },
        allIds:["mi111","mi222"]
    },
    */
}
export const goodsInfoSlice=createSlice({
    //包含name,initialState,reducers等
    name:'goodsInfo',
    initialState:initialState,
    reducers:{
        // 定义reducer的方法 接收参数state和-action-> 有type 和payload->包含传所有传参
    },
    // extraReducers 字段让 slice 处理在别处定义的 actions， 
    // 包括由 createAsyncThunk 或其他slice生成的actions。
    extraReducers(builder){
        builder
        .addCase(getGoodsInfo.pending,(state)=>{
            console.log('请求数据中。。。');
            // state.loading=false;
        })
        .addCase(getGoodsInfo.fulfilled,(state,{payload})=>{
            console.log('请求数据完成',payload);
            state=Object.assign(state,payload)
            state.loading=true;
        })
        .addCase(getGoodsInfo.rejected,(state,err)=>{
            console.log('请求数据失败',err)
        })
    }
}   
)

// 导出action ->reducers里方法
// export const {}=goodsInfoSlice.actions

// 默认导出reducer
export default goodsInfoSlice.reducer