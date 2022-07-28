import { createSlice } from "@reduxjs/toolkit";
// 使用范式化State
const initialState={
    shops:{
        byId:{
            "mi11":{
                id:"mi11",
                name:"小米官方旗舰店11",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/1122879666_1184688902_88_88.png",
                buyGoods:["goods11","goods22"],
            },
            "mi22":{
                id:"mi22",
                name:"小米官方旗舰店22",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/1122879666_1184688902_88_88.png",
                buyGoods:["goods33","goods44"],
            },
            "mi33":{
                id:"mi3",
                name:"小米官方旗舰店33",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/1122879666_1184688902_88_88.png",
                buyGoods:["goods55"],
            },
        },
        allIds:["mi11","mi22","mi33"]
    },
    buyGoods:{
        byId:{
            "goods11":{
                id:"goods11",
                shopId:"mi11",
                name:"RedmiNote11 4G手机1",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/-1221252186_1875163208_360_212.jpg",
                type:"12+256G 全网通 黑",
                price:3599,
                count:1,
                checked:false
            },
            "goods22":{
                id:"goods22",
                shopId:"mi11",
                name:"RedmiNote11 4G手机2",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/-1221252186_1875163208_360_212.jpg",
                type:"12+256G 全网通 黑",
                price:3599,
                count:2,
                checked:false
            },
            "goods33":{
                id:"goods33",
                shopId:"mi22",
                name:"RedmiNote11 4G手机3",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/-1221252186_1875163208_360_212.jpg",
                type:"12+256G 全网通 黑",
                price:3599,
                count:3,
                checked:false
            },
            "goods44":{
                id:"goods44",
                shopId:"mi22",
                name:"RedmiNote11 4G手机4",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/-1221252186_1875163208_360_212.jpg",
                type:"12+256G 全网通 黑",
                price:3599,
                count:4,
                checked:false
            },
            "goods55":{
                id:"goods55",
                shopId:"mi33",
                name:"RedmiNote11 4G手机4",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/-1221252186_1875163208_360_212.jpg",
                type:"12+256G 全网通 黑",
                price:3599,
                count:5,
                checked:false
            }
        },
        allIds:["goods11","goods22","goods33","goods44","goods55"]
    }
}
const cartInfoSlice=createSlice({
    name:'cartInfo',
    initialState,
    reducers:{
        // 购买商品数量加1
        increcount:(state,{payload})=>{
            state.buyGoods.byId[payload.id].count+=1;
        },
        decrecount:(state,{payload})=>{
            state.buyGoods.byId[payload.id].count-=1;
            if(state.buyGoods.byId[payload.id].count<1){
                // count不能小于1
                state.buyGoods.byId[payload.id].count=1;
            }
        },
        changeChecked:(state,{payload})=>{
            state.buyGoods.byId[payload.id].checked=!state.buyGoods.byId[payload.id].checked;
        },
        changeShopAllChecked:(state,{payload})=>{
            // 获取目前是否全选
            const isShopAllChecked= (payload.shop.buyGoods.length == 
            payload.shop.buyGoods.filter((item)=>
                payload.buyGoods.byId[item].checked).length);
            // console.log(isShopAllChecked);
            payload.shop.buyGoods.map((item)=>
                // 将checked设置为目前全选状态的非
                state.buyGoods.byId[item].checked=!isShopAllChecked);
        },
        changeAllChecked:(state,{payload})=>{
            // 获取目前是否全选
            const isAllChecked= (payload.buyGoods.allIds.length == 
                payload.buyGoods.allIds.filter((item)=>
                    payload.buyGoods.byId[item].checked).length);
            
            payload.buyGoods.allIds.map((item)=>
                // 将checked设置为目前全选状态的非
                state.buyGoods.byId[item].checked=!isAllChecked)
        },
        // 删除CartList中的内容
        deleteCartList:(state,{payload})=>{
            const checkedItemId=payload.buyGoods.allIds.filter((item)=>
            payload.buyGoods.byId[item].checked);
            // 过滤掉被删除的ItemId
            state.buyGoods.allIds=state.buyGoods.allIds.filter((item)=>!checkedItemId.includes(item));
            // 再通过checkedItemId修改 buyGoods中Item 内容
            checkedItemId.forEach((item)=>{
                Reflect.deleteProperty(state.buyGoods.byId,item);
            });
            // 修改shops中的buyGoods
            state.shops.allIds.forEach((item)=>{
                // 过滤掉shops中buyGoods中被删除的ItemId
                state.shops.byId[item].buyGoods=state.shops.byId[item].buyGoods.filter((item)=>!checkedItemId.includes(item));
            });
            // 检查某个店铺购买的goods是否全被删除
            state.shops.allIds.forEach((item)=>{
                if(state.shops.byId[item].buyGoods.length===0){
                    state.shops.allIds=state.shops.allIds.filter((id)=>!(id===item))
                    // 删除该店铺的cartInfo
                    Reflect.deleteProperty(state.shops.byId,item)
                }
            })
            
        }
    }
})
export const {
        increcount,
        decrecount,
        changeChecked,
        changeShopAllChecked,
        changeAllChecked,
        deleteCartList
}=cartInfoSlice.actions

export default cartInfoSlice.reducer