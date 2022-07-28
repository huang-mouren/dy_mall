import React from 'react'
import { Wrapper ,HeaderWrapper,ItemWrapper} from './style'
import {Checkbox} from 'antd-mobile'
// 使用useDispatch来派发action
import { useDispatch } from 'react-redux'
// 引入cart的action
import { 
    increcount ,
    decrecount,
    changeChecked,
    changeShopAllChecked
} from '@/store/features/cartInfoSlice'
import LazyLoad from 'react-lazyload'
import temp from '@/assets/images/temp.jpg'
import iphone from '@/assets/images/goods2.jpg'
import mi from '@/assets/images/mi.png'
const CartListItem = ({shop,buyGoods}) => {
    const dispatch=useDispatch()
    const renderItem=(source)=>{
        const {id,name,imgUrl,type,price,count,checked}=source
        // console.log(id,name,imgUrl,type,price,count,checked);
        return (
            <div className='item_wrapper' key={id}>
                <div className="checkbox_wrapper" 
                    onClick={()=>{dispatch(changeChecked({id}))}}
                >
                        <Checkbox checked={checked} />
                </div> 
                <div className="item_info_wrapper">
                    <div className="item_img_wrapper">
                    <LazyLoad className="item_img_wrapper"
                        placeholder={ 
                        <img width="100%" height="100%" style={{"objectFit":"cover"}} src={temp}/>}
                    >
                        <img src={imgUrl} alt="" className="item_img" />
                    </LazyLoad>
                    </div>
                    <div className="item_detail_wrapper">
                        <div className="item_name">{name}</div>
                        <div className="item_type">{type}</div>
                        <div className="item_price_count_wrapper">
                            <div className="item_price">￥{price}</div>
                            <div className="item_count_wrapper">
                                <div className="item_count_button item_count_decrease"
                                    onClick={()=>{dispatch(decrecount({id}))}}
                                >-</div>
                                <div className="item_count">{count}</div>
                                <div className="item_count_button item_count_increase"
                                    onClick={()=>{dispatch(increcount({id}))}}
                                >+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <Wrapper>
            <HeaderWrapper>
                <div className="checkbox_wrapper"
                    onClick={()=>{dispatch(changeShopAllChecked({shop,buyGoods}))}}
                >
                    {/* 通过buyGoods中的商品的checked的长度 与 总物品的长度 来驱动 该店铺的全选状态 */}
                    <Checkbox checked={shop.buyGoods.length == 
                            shop.buyGoods.filter((item)=>buyGoods.byId[item].checked).length}/>
                </div>
                <div className="shop_info_wrapper">
                    <div className="shop_img_wrapper">
                    <LazyLoad className="shop_img_wrapper"
                        placeholder={ 
                        <img width="100%" height="100%" style={{"objectFit":"cover"}} src={temp}/>}
                    >
                        <img src={shop.imgUrl} alt="" className="shop_img" />
                    </LazyLoad>
                    </div>
                    <div className="shop_name">{shop.name}&gt;</div>
                </div>
            </HeaderWrapper>
            <ItemWrapper>
                {shop.buyGoods.map((item)=>{
                    return (renderItem(buyGoods.byId[item]))
                })}
            </ItemWrapper>
        </Wrapper>
    )
}

export default CartListItem
