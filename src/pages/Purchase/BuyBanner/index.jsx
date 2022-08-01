import React ,{useState,useRef, useEffect}from 'react'
import { Wrapper } from './style'
import MiIMg from './1.jpg'
import { Selector } from "antd-mobile";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/features/cartInfoSlice';
import {Toast} from 'antd-mobile';
const BuyBanner = ({tagertGoodsInfo,targetShopInfo,onSetVisible}) => {

  const {imgUrl,price,types}=tagertGoodsInfo
  const [buyCounts,SetBuyCounts]=useState(1)
  const [buyTypeArr,setBuyTypeArr]=useState([])
  const [buyGoodsInfo,setBuyGoodsInfo]=useState({
    "shopId":tagertGoodsInfo["shopId"],
    "name":tagertGoodsInfo["name"],
    "imgUrl":tagertGoodsInfo["imgUrl"],
    "price":tagertGoodsInfo["price"],
    "checked":false
  })
  const tempArr=buyTypeArr
  const onSetBuyCounts=(num)=>{
    // 购买数量不为0
    SetBuyCounts(buyCounts+num>0?buyCounts+num:1)
  }
  const onSetBuyTypeArr=(type,index)=>{
    tempArr[index]=type
    setBuyTypeArr([...tempArr])
    // buyTypeArr[index]=type;
  }
  const dispatch=useDispatch()
  useEffect(()=>{
    setBuyGoodsInfo({...buyGoodsInfo,...{
      "id":tagertGoodsInfo["id"]+buyTypeArr.join(' / '),
      "count":buyCounts,
      "type":buyTypeArr.join(' / ') //将type 变为string并且以 “/” 分隔
    }})
  },[buyCounts,buyTypeArr])
  return (
    <Wrapper>
          <div className="buy-info" >
            <div className="img" style={{ width: "4rem", height: "4rem" }}>
              <img src={imgUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="buy-choose">
              <div className="price">￥{price}</div>
              <div className="stock">库存896件</div>
              <div className="chosen-info">
                <span>请选择</span>
                  {types.allTypes.map((item,index)=>{
                    return <span className="chosen" key={index}>{buyTypeArr[index]?buyTypeArr[index]:item}</span>
                  })}

              </div>
            </div>
          </div>
          <div className="type_chosen_wrapper">
            {types.allTypes.map((item,index)=>{
              return <div className="type_chosen" key={index}>
                <div className="type">{item}</div>
                <Selector
                onChange={(arr)=>{
                  // arr为所选值数组 为单选 故只有一个元素
                  onSetBuyTypeArr(arr[0],index)
                  // console.log(buyTypeArr.join('/'))
                }}
                options={
                  types[item].map((item)=>{
                    return {
                      "label":item,
                      "value":item
                    }
                  })
                }
                showCheckMark={false}
                style={{ '--checked-text-color': 'red', '--checked-color': 'pink' }}
                />
              </div>
            })}
          </div>

          <div className="buy-count">
            <span>购买数量</span>
            <span className='chosen-count'>
              <button className="btn-reduce" 
                onClick={()=>onSetBuyCounts(-1)}
              >-</button>
              <span className='count'>{buyCounts}</span>
              <button className="btn-add"
                onClick={()=>onSetBuyCounts(1)}
              >+</button>
            </span>
          </div>
          <div className="btn-buy-container">
            <button className="btn-buy" 
              onClick={()=>{

                dispatch(addToCart({targetShopInfo,buyGoodsInfo}))
                onSetVisible()
                Toast.show({
                  content: "加入购物车成功!",
                })
              }}
            >确认</button>
          </div>
    </Wrapper>
  )
}

export default BuyBanner
