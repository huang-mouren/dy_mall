import React, { useState, useRef, useEffect } from 'react'
import { Wrapper, HeaderWrapper, SwiperTabsWrapper, OrdersListWrapper } from './style'
import { NavBar, Tabs, Swiper,Badge } from 'antd-mobile'
import { SearchOutline, MoreOutline, } from 'antd-mobile-icons'
import { useNavigate } from 'react-router'
import OrdersListItem  from './OrdersListItem'
import { useSelector} from 'react-redux'

import RecommendList from '@/components/RecommednsList'
const Orders = () => {

    const {orders,shops,buyGoods,state}=useSelector((store)=>store.ordersInfo)
    const swiperRef = useRef()
    const [activeIndex, setActiveIndex] = useState(0)
    const tabItems = [
        { key: 'all', title: '全部' },
        { key: "bepaid", title: '待支付' },
        { key: "beshipped", title: '待发货' },
        { key: 'bereceived', title: '待收货' },
        { key: 'comment', title: '评价' },
        { key: 'refund', title: '退款/售后' }
    ]
    const navigate = useNavigate()
    const renderHeader = () => {
        return (
            <>
                <NavBar right={<div style={{ fontSize: 32 }}><MoreOutline /></div>} onBack={() => { navigate(-1) }}>
                    <div className="search_wrapper">
                        <div className="search_icon">{<SearchOutline />}</div>
                        <span className='search_tips'>搜索我的订单</span>
                    </div>
                </NavBar>
            </>
        )
    }
    const renderItem=(orders,state,shops,buyGoods)=>{
        const filterOrdersId=orders.allIds.filter((item)=>
        { return (orders.byId[item].state==state)}
        );
        return (filterOrdersId.map((item)=>{
            return(
                <OrdersListItem 
                    key={item} order={orders.byId[item]} 
                    shop={shops.byId[orders.byId[item].shopId]} 
                    buyGoods={orders.byId[item].buyGoods.map((item)=>(buyGoods.byId[item]))}
                />
            )
        }))
    }
    return (
        <Wrapper>
            <HeaderWrapper>
                {renderHeader()}
            </HeaderWrapper>
            <SwiperTabsWrapper>
                <Tabs
                    activeKey={tabItems[activeIndex].key}
                    onChange={key => {
                        const index = tabItems.findIndex(item => item.key === key)
                        setActiveIndex(index)
                        swiperRef.current?.swipeTo(index)
                    }
                    }
                >
                    {tabItems.map(item => (
                        <Tabs.Tab 
                        title={<Badge color='#FF2C57' content={state.includes(item.title)?
                            (orders.allIds.filter((id)=>
                                { return (orders.byId[id]&&orders.byId[id].state==item.title)}
                            ).length?orders.allIds.filter((id)=>
                            { return (orders.byId[id]&&orders.byId[id].state==item.title)}
                        ).length:'')
                            :''
                        }>{item.title}</Badge>   
                        } 
                        key={item.key} />))}
                </Tabs>
            </SwiperTabsWrapper>
            <OrdersListWrapper>
                <Swiper
                    direction='horizontal'
                    loop
                    indicator={() => null}
                    ref={swiperRef}
                    defaultIndex={activeIndex}
                    onIndexChange={(index) => { setActiveIndex(index) }}
                >
                    <Swiper.Item>
                        {
                            orders.allIds.map((item)=>{
                                
                                return(
                                    <OrdersListItem 
                                        key={item} order={orders.byId[item]} 
                                        shop={shops.byId[orders.byId[item].shopId]} 
                                        buyGoods={orders.byId[item].buyGoods.map((item)=>(buyGoods.byId[item]))}
                                    />
                                )
                            })
                        }
                    </Swiper.Item>
                    <Swiper.Item>
                        {
                            renderItem(orders,"待支付",shops,buyGoods)
                        }
                    </Swiper.Item>
                    <Swiper.Item>
                        {
                            renderItem(orders,"待发货",shops,buyGoods)
                        }
                    </Swiper.Item>
                    <Swiper.Item>
                        {
                            renderItem(orders,"待收货",shops,buyGoods)
                        }
                    </Swiper.Item>
                    <Swiper.Item>
                        <div>评价</div>
                    </Swiper.Item>
                    <Swiper.Item>
                        <div>退款</div>
                    </Swiper.Item>
                </Swiper>
                <RecommendList></RecommendList>
            </OrdersListWrapper>
            
        </Wrapper>
    )
}

export default Orders
