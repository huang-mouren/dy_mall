import React, { useState } from 'react'
import { Wrapper,HeaderWrapper,ListWrapper ,FooterWrapper} from './style'
import {NavBar,Toast,Modal} from 'antd-mobile'
import CartListItem from './CartListItem'
import RecommendList from '@/components/RecommednsList'
import { useNavigate } from 'react-router'
import {Checkbox} from 'antd-mobile'
// 使用useSelector直接得到store的State 使用useDispatch派发action
import { useSelector,useDispatch } from 'react-redux'
// 引入action
import { changeAllChecked ,deleteCartList} from '@/store/features/cartInfoSlice'
import {addOrder} from '@/store/features/ordersInfoSlice'

Toast.config({ duration: 500, position: 'center' })
const Cart = () => {

    const [isManage,setIsManage]=useState(false)
    const dispatch=useDispatch()
    const {shops,buyGoods}=useSelector((store)=>store.cartInfo)
    const navigate=useNavigate()
    
    const renderCartHeader=()=>{
        return(
            <>
                <NavBar right={<div onClick={()=>setIsManage(!isManage)}>{isManage?'完成':'管理'}</div>} onBack={()=>{navigate(-1)}} >
                    购物车{`(${buyGoods.allIds.length})`}
                </NavBar>
            </>
        )
    }
    const renderCartFooter=()=>{
        return(
            <>  
                <div className="checkbox_wrapper"
                    onClick={()=>{dispatch(changeAllChecked({shops,buyGoods}))}}
                >
                    <Checkbox checked={buyGoods.allIds.length == 
                        buyGoods.allIds.filter((item)=>buyGoods.byId[item].checked).length
                        && shops.allIds.length
                    }>
                        全选
                    </Checkbox>
                </div>
                <div className="footer_buy_wrapper">
                    
                    {!isManage&&<div className="buy_total">
                        <span>合计:</span><span className="total">￥{
                            // 通过商品的checked状态来计算总价total 驱动UI状态 
                            buyGoods.allIds.reduce((total,item)=>
                                total+(buyGoods.byId[item].checked ? 
                                    parseFloat(buyGoods.byId[item].price * buyGoods.byId[item].count):0),0)
                        }</span>
                    </div>}
                    <div className="buy_settle">
                        {!isManage? <button className="button_settle"
                            onClick={()=>{
                                Modal.show({
                                    title:'确定购买商品?',
                                    content: '将前往订单页面支付',
                                    closeOnMaskClick:true,
                                    showCloseButton: true,
                                    closeOnAction: true,
                                    actions: [
                                        {
                                          key: 'confirm',
                                          text: '确认',
                                          primary:true,
                                          onClick:()=>{
                                            dispatch(addOrder({shops,buyGoods}))
                                            dispatch(deleteCartList({shops,buyGoods}));
                                            Toast.show({
                                                content: '操作成功'
                                            })
                                          }
                                        },
                                      ],
                                })
                            }}
                        >
                            结算{`(${buyGoods.allIds.filter((item)=>
                                buyGoods.byId[item].checked).length})`}</button>
                        : <button className="button_settle"
                                onClick={()=>{
                                    dispatch(deleteCartList({shops,buyGoods}));
                                    Toast.show({
                                        content: '删除成功'
                                    })
                                }}
                        >删除</button>}
                    </div>
                </div>
                
            </>
        )
    }
    return (
        <Wrapper>
            <HeaderWrapper >
                {renderCartHeader()} 
            </HeaderWrapper>
            <div className="main">
                <ListWrapper>
                    {shops.allIds.map((item)=>{
                        return(
                            <CartListItem  key={item} shop={shops.byId[item]} buyGoods={buyGoods}/>
                        )
                    })}
                </ListWrapper>
            </div>
            <RecommendList></RecommendList>
            <FooterWrapper >
                {renderCartFooter()}
            </FooterWrapper>
        </Wrapper>
    )
}

export default Cart
