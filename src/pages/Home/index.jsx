import React from 'react'
import { Wrapper,JumboTabsWrapper,ChosenWrapper,RecommendWrapper} from './style'
import Header from './Header'
import {JumboTabs} from 'antd-mobile'
import { Link } from 'react-router-dom'
import {Badge} from 'antd-mobile' 
// 通过useSelector 直接获取store里的state
import { useSelector } from 'react-redux'
import GoodsCardItem from '@/components/GoodsCardItem'
import butie from '@/assets/images/butie.webp'
import shuma from '@/assets/images/shuma.webp'
import baihuo from '@/assets/images/baihuo.webp'
import fuzhuang from '@/assets/images/fuzhuang.webp'
import jujia from '@/assets/images/jujia.webp'
import zubao from '@/assets/images/zubao.webp'
import meizhuang from '@/assets/images/meizhuang.webp'
import apple from '@/assets/images/apple.png'
import huawei from '@/assets/images/huawei.png'
import goods1 from '@/assets/images/goods1.jpg'
import goods2 from '@/assets/images/goods2.jpg'
const Home = () => {

    const {orders}=useSelector((store)=>store.ordersInfo)
    const {goods,shops}=useSelector((store=>store.goodsInfo))
    const rederUserJumboTabs = () => {
        return (
            <JumboTabs>
                <JumboTabs.Tab title={<Link to='/orders'>
                    <Badge color='#FF2C57' content={orders.allIds.filter((id)=>
                                { return (orders.byId[id]&&orders.byId[id].state=="待支付")}
                            ).length?("待支付"+orders.allIds.filter((id)=>
                            { return (orders.byId[id]&&orders.byId[id].state=="待支付")}
                        ).length):''}>
                        <i className='iconfont icon-wodedingdan rem12'/>
                    </Badge>
                    
                </Link>}
                    description={<Link to='/orders'>我的订单</Link>} key='orders'
                />
                <JumboTabs.Tab title={<Link to='/orders'><i className='iconfont icon-pingjiayouli'/></Link>}
                    description={<Link to='/orders'>评价中心</Link>} key='comment'
                />
                <JumboTabs.Tab title={<Link to='/refund'><i className='iconfont icon-tuikuan'/></Link>}
                    description={<Link to='/orders'>退款/售后</Link>} key='refund'
                />
                <JumboTabs.Tab title={<Link to='/orders'><i className='iconfont icon-kefuxiaoxi'/></Link>}
                    description={<Link to='/orders'>客服消息</Link>} key='message'
                />
                <JumboTabs.Tab title={<Link to='/orders'><i className='iconfont icon-a-youhuiquankaquan'/></Link>}
                    description={<Link to='/orders'>券红包</Link>} key='coupons'
                />
                <JumboTabs.Tab title={<Link to='/address'><i className='iconfont icon-dizhiguanli'/></Link>}
                    description={<Link to='/orders'>地址</Link>} key='address'
                />
                <JumboTabs.Tab title={<Link to='/orders'><i className='iconfont icon-zuji'/></Link>}
                    description={<Link to='/orders'>足迹</Link>} key='track'
                />
                <JumboTabs.Tab title={<Link to='/orders'><i className='iconfont icon-shoucang1'/></Link>}
                    description={<Link to='/orders'>收藏</Link>} key='collection'
                />
            </JumboTabs>
        )
    }
    const renderTypeJumboTabs = () => {
        return (
            <JumboTabs>
                <JumboTabs.Tab title={<Link to='/digital'>{renderIconImg(butie)}</Link>} 
                    description={<Link to='/digital'>百亿补贴</Link>} key='subsidy' />
                <JumboTabs.Tab title={<Link to='/digital'>{renderIconImg(baihuo)}</Link>}
                     description={<Link to='/digital'>百货超市</Link>} key='mall' />
                <JumboTabs.Tab title={<Link to='/digital'>{renderIconImg(shuma)}</Link>} 
                    description={<Link to='/digital'>手机数码</Link>} key='digital' 
                />
                <JumboTabs.Tab title={<Link to='/digital'>{renderIconImg(fuzhuang)}</Link>} 
                    description={<Link to='/digital'>潮品服饰</Link>} key='clothes' />
                <JumboTabs.Tab title={<Link to='/digital'>{renderIconImg(meizhuang)}</Link>} 
                    description={<Link to='/digital'>抖in美妆</Link>} key='makeup' />
                <JumboTabs.Tab title={<Link to='/digital'>{renderIconImg(jujia)}</Link>} 
                    description={<Link to='/digital'>居家好物</Link>} key='Household' />
                <JumboTabs.Tab title={<Link to='/digital'>{renderIconImg(zubao)}</Link>} 
                    description={<Link to='/digital'>珠宝美饰</Link>} key='jewelry' />
            </JumboTabs>
        )
    }
    const renderIconImg=(imgUrl)=>{
        return(
            <div className="icon_img_wrapper">
                <img src={imgUrl} alt="" className="icon_img" />
            </div>
        )
    }
    const renderChosenLive=()=>(
        <div className="chosen_content">
            <div className="chosen_header">
                <div className="chosen_title">直播精选</div>
                <div className="chosen_tag bgtheme">好逛</div>
            </div>
            <div className="chosen_main">
                <div className="chosen_img_wrapper ">
                    <img src={huawei} alt="" className="chosen_img radius" />
                    <div className="chosen_img_name colortype">华为官方旗舰店</div>
                </div>
                <div className="chosen_img_wrapper">
                    <img src={apple} alt="" className="chosen_img radius" />
                    <div className="chosen_img_name colortype">苹果官方旗舰店</div>
                </div>
            </div>
        </div>
        
    )
    const renderChosenGoods=()=>(
        <div className="chosen_content">
            <div className="chosen_header">
                <div className="chosen_title">品牌馆</div>
                <div className="chosen_tag bgblack">奢品</div>
            </div>
            <div className="chosen_main">
                <div className="chosen_img_wrapper">
                    <img src={goods2} alt="" className="chosen_img" />
                    <div className="chosen_img_name normaltype">苹果</div>
                </div>
                <div className="chosen_img_wrapper">
                    <img src={goods1} alt="" className="chosen_img" />
                    <div className="chosen_img_name normaltype">周大福</div>
                </div>
            </div>
        </div>
    )
    return (
        <Wrapper>
            
            <Header />
            <JumboTabsWrapper className='bg_inherit'>
                {rederUserJumboTabs()}
            </JumboTabsWrapper>
            <JumboTabsWrapper className='bg_white'>
                {renderTypeJumboTabs()}
            </JumboTabsWrapper>
            <ChosenWrapper>
                {renderChosenLive()}
                {renderChosenGoods()}
            </ChosenWrapper>
            <RecommendWrapper>
                <div className="recomend_column">
                    {goods.allIds.map((item)=>{
                        const goodsData=goods.byId[item]
                        return(
                            <GoodsCardItem key={item} goodsData={goodsData}/>
                        )
                    })}
                </div>
                <div className="recomend_column">
                    {goods.allIds.map((item)=>{
                        const goodsData=goods.byId[item]
                        return(
                            <GoodsCardItem key={item} goodsData={goodsData}/>
                        )
                    })}
                </div>
            </RecommendWrapper>
        </Wrapper>
    )
}


export default Home
