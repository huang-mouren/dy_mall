import {createSlice} from '@reduxjs/toolkit'

const initialState={
    orders:{
        byId:{
            "order1":{
                id:"order1",
                shopId:"mi1",
                buyGoods:["goods1","goods2"],
                state:"待支付"
            },
            "order2":{
                id:"order2",
                shopId:"mi2",
                buyGoods:["goods3"],
                state:"待发货"
            },
            "order3":{
                id:"order3",
                shopId:"mi1",
                buyGoods:["goods4"],
                state:"待收货"
            },
        },
        allIds:["order1","order2","order3"]
    },
    shops:{
        byId:{
            "mi1":{
                id:"mi1",
                name:"小米官方旗舰店1",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/1122879666_1184688902_88_88.png", 
            },
            "mi2":{
                id:"mi2",
                name:"小米官方旗舰店2",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/1122879666_1184688902_88_88.png", 
            }
        },
        allIds:["mi1","mi2"]
    },
    buyGoods:{
        byId:{
            "goods1":{
                id:"goods1",
                shopId:"mi1",
                name:"RedmiNote11 4G手机1",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/-1221252186_1875163208_360_212.jpg",
                type:"12+256G 全网通 黑",
                price:3599,
                count:1,
            },
            "goods2":{
                id:"goods2",
                shopId:"mi1",
                name:"RedmiNote11 4G手机2",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/-1221252186_1875163208_360_212.jpg",
                type:"12+256G 全网通 黑",
                price:3599,
                count:2,
            },
            "goods3":{
                id:"goods3",
                shopId:"mi2",
                name:"RedmiNote11 4G手机3",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/-1221252186_1875163208_360_212.jpg",
                type:"12+256G 全网通 黑",
                price:3599,
                count:3,
            },
            "goods4":{
                id:"goods4",
                shopId:"mi1",
                name:"RedmiNote11 4G手机4",
                imgUrl:"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/-1221252186_1875163208_360_212.jpg",
                type:"12+256G 全网通 黑",
                price:3599,
                count:4,
            },  
        },
        allIds:["goods1","goods2","goods3","goods4"]
    },
    state:["待支付","待发货","待收货"]

}

export const ordersInfoSlice=createSlice({
    name:'ordersInfo',
    initialState,
    reducers:{
        deleteOrder:(state,{payload})=>{
            Reflect.deleteProperty(state.orders.byId,payload.order.id)
            state.orders.allIds=state.orders.allIds.filter((item)=>{return !(item === payload.order.id)}) 
        },
        addOrder:(state,{payload})=>{
            const checkedItemId=payload.buyGoods.allIds.filter((item)=>
            payload.buyGoods.byId[item].checked);
            // 通过checkedItemId找出结算的goods和shop
            const checkedItem=checkedItemId.map((item)=>{return payload.buyGoods.byId[item]})
            // 增加结算的Item
            checkedItem.map((item)=>{
                state.buyGoods.allIds.push(item.id);
                state.buyGoods.byId[item.id]=item;
            });
            checkedItem.map((item)=>{
                if(!state.shops.allIds.includes(item.shopId)){
                    state.shops.allIds.push(item.shopId)
                    // 增加新的shop信息
                    state.shops.byId[item.shopId]={
                        id:payload.shops.byId[item.shopId].id,
                        name:payload.shops.byId[item.shopId].name,
                        imgUrl:payload.shops.byId[item.shopId].imgUrl,
                    }
                }
            });
            const tempbuyGoods={};
            checkedItem.forEach((item)=>{
                if(!(item.shopId in tempbuyGoods)){
                    tempbuyGoods[item.shopId]=[item.id]
                }else{
                    tempbuyGoods[item.shopId]=[...tempbuyGoods[item.shopId],item.id]
                }
                
            });
            for (let key in tempbuyGoods){
                state.orders.byId['order'+key]={
                    id:'order'+key,
                    shopId:key,
                    buyGoods:tempbuyGoods[key],
                    state:"待支付"
                }
                state.orders.allIds.push('order'+key);
            }
            
            
        }
    },
})

export const {deleteOrder,addOrder}=ordersInfoSlice.actions
export default ordersInfoSlice.reducer