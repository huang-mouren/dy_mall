import React from 'react'
import { Wrapper, HeaderWrapper,ItemWrapper} from './style'
import LazyLoad from 'react-lazyload'
import { useDispatch } from 'react-redux'
import { deleteOrder } from '@/store/features/ordersInfoslice'
import {Modal,Toast} from 'antd-mobile'
import temp from '@/assets/images/temp.jpg'
import mi from '@/assets/images/mi.png'
import iphone from '@/assets/images/goods2.jpg'


Toast.config({ duration: 500, position: 'center' })
const OrdersListItem = ({order,shop,buyGoods}) => {
    
    const dispatch=useDispatch() 

    const renderItem = (source) => {
        const {id,name,imgUrl,type,price,count}=source;
        return (
            <div className='item_wrapper' key={id}>
                <div className="item_info_wrapper">
                    <div className="item_img_wrapper">
                        <LazyLoad className="item_img_wrapper"
                            placeholder={
                                <img width="100%" height="100%" style={{ "objectFit": "cover" }} src={temp} />}
                        >
                            <img src={imgUrl} alt="" className="item_img" />
                        </LazyLoad>
                    </div>
                    <div className="item_detail_wrapper">
                        <div className="item_name_price_wrapper flex_wrapper">
                            <div className="item_name">{name}</div>
                            <div className="item_price">￥{price}</div>
                        </div>
                        <div className="item_type_count_wrapper flex_wrapper">
                            <div className="item_type">{type}</div>
                            <div className="item_count">x{count}</div>
                        </div>
                        <div className="item_tag_wrapper flex_wrapper">
                            <div className="item_tag">7天无理由退货</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Wrapper>
            <HeaderWrapper>
                <div className="shop_info_wrapper">
                    <div className="shop_img_wrapper">
                        <LazyLoad className="shop_img_wrapper"
                            placeholder={
                                <img width="100%" height="100%" style={{ "objectFit": "cover" }} src={temp} />}
                        >
                            <img src={shop.imgUrl} alt="" className="shop_img" />
                        </LazyLoad>
                    </div>
                    <div className="shop_name">{shop.name}&gt;</div>
                </div>
                <div className="order_state">{order.state}</div>
            </HeaderWrapper>
            <ItemWrapper>
                {
                    buyGoods.map((item)=>{
                        return (renderItem(item))
                    })
                }
                <div className="item_total_action_wrapper">
                    <div className="item_total">合计: 
                        <span className='prcie'>
                            ￥{buyGoods.reduce((total,item)=>(total+item.price*item.count),0)}
                        </span> 
                    </div>
                    <div className="item_action">
                        <div className="button_del button" 
                            onClick={()=>{
                                // dispatch(deleteOrder({order}))
                                Modal.show({
                                    title:'确定删除订单?',
                                    content: '删除订单后不可恢复',
                                    closeOnMaskClick:true,
                                    showCloseButton: true,
                                    closeOnAction: true,
                                    actions: [
                                        {
                                          key: 'confirm',
                                          text: '确认',
                                          primary:true,
                                          onClick:()=>{
                                            dispatch(deleteOrder({order}));
                                            Toast.show({
                                                content: '删除成功'
                                            })
                                          }
                                        },
                                      ],
                                })
                            }}
                        >删除订单</div>
                        <div className="button_buyagain button">再次购买</div>
                    </div>
                </div>
            </ItemWrapper>

        </Wrapper>
    )
}

export default OrdersListItem
