import React, { useState, useEffect } from 'react'
import {
    Wrapper, HeaderWrapper, FooterWrapper, MainWrapper,
    TabsWrapper
} from './style'
import CommentBanner from "./CommentBanner";
import GoodsBanner from "./GoodsBanner";
import GoodsDetailBanner from "./GoodsDetailBanner";
import RecommendBanner from "./RecommedBanner";
import BuyBanner from "./BuyBanner";
import { NavBar, Badge, Tabs, Popup } from 'antd-mobile'
import { SearchOutline, } from 'antd-mobile-icons'
import { Link, useNavigate ,useParams} from 'react-router-dom'
import { useThrottleFn } from 'ahooks'
import shopIcon from './shopIcon.svg'
import collected from './collected.svg'
import { useSelector } from 'react-redux';
const Purchase = () => {

    const navigate = useNavigate()
    const params =useParams()
    // console.log(params); id
    const {goods,shops}=useSelector((store)=>store.goodsInfo)
    // 目标商品信息 通过动态路由获取商品信息id
    const tagertGoodsInfo=goods.byId[params.id];
    // 目标商店信息
    const targetShopInfo=shops.byId[tagertGoodsInfo.shopId];

    const [activeKey, setActiveKey] = useState("goods");
    const [isCollect, setIsCollect] = useState(false);
    const [visible, setVisible] = useState(false)

    const onSetVisible=()=>{
        setVisible(false)
    }
    const tabItems = [
        { key: "goods", title: "商品" },
        { key: "comment", title: "评价" },
        { key: "detail", title: "详情" },
        { key: "recommend", title: "推荐" },
    ];
    const tabHeight = 95;
    const { run: checkBanner } = useThrottleFn(
        () => {
            let currentKey = tabItems[0].key;
            for (const item of tabItems) {
                const element = document.getElementById(`anchor-${item.key}`);
                if (!element) continue;
                const rect = element.getBoundingClientRect();
                // console.log(element, rect.top, tabHeight);
                if (rect.top <= tabHeight) {
                    currentKey = item.key;
                } else {
                    break;
                }
            }
            setActiveKey(currentKey);
        },
        {
            leading: true,
            trailing: true,
            wait: 100,
        })

    useEffect(() => {
        // checkBanner()
        window.addEventListener("scroll", checkBanner);
        return () => {
            window.removeEventListener("scroll", checkBanner)
        }
    }, []);


    const renderHeader = () => {
        const {buyGoods} =useSelector((store)=>store.cartInfo)
        return (
            <>
                <NavBar right={
                    <Link to='/cart'>
                        <Badge content={buyGoods.allIds.length?buyGoods.allIds.length:''} color="#FF2C57">
                            <i className='iconfont icon-gouwuche ' />
                        </Badge>
                    </Link>}
                    onBack={() => { navigate(-1) }}>
                    <div className="search_wrapper">
                        <div className="search_icon">{<SearchOutline />}</div>
                        <span className='search_tips'>搜索我的订单</span>
                    </div>
                </NavBar>
            </>
        )
    }
    const renderFooter = () => {
        return (
            <>
                <div className="icons_wrapper">
                    <div className="icons_item_wrapper">
                        <div className="icon">{<img className='img_icon' src={shopIcon} />}</div>
                        <div className="name">店铺</div>
                    </div>
                    <div className="icons_item_wrapper">
                        <div className="icon"><i className='iconfont icon-kefu'></i></div>
                        <div className="name">客服</div>
                    </div>
                    <div className="icons_item_wrapper"
                        onClick={() => setIsCollect(!isCollect)}
                    >
                        <div className="icon">
                            {isCollect ? <img className='img_icon' src={collected} />
                                : <i className='iconfont icon-shoucang1'></i>}
                        </div>
                        <div className="name">收藏</div>
                    </div>
                </div>
                <div className="btn_wrapper">
                    <div className="btn btn_cart" 
                        onClick={() => { setVisible(true) }}
                    >加入购物车</div>
                    <div className="btn btn_buy"
                        onClick={() => { setVisible(true) }}
                    >立即购买</div>
                </div>
            </>
        )
    }
    return (
        <Wrapper>
            <HeaderWrapper>
                {renderHeader()}
            </HeaderWrapper>
            <TabsWrapper>
                <Tabs
                    activeKey={activeKey}
                    onChange={(key) => {
                        document.getElementById(`anchor-${key}`)?.scrollIntoView();
                        window.scrollTo({
                            top: window.scrollY - 90,
                        });
                        setActiveKey(key)
                    }}
                >
                    {tabItems.map((item) => {
                        return <Tabs.Tab title={item.title} key={item.key} />;
                    })}
                </Tabs>
            </TabsWrapper>
            <MainWrapper>
                <div id="anchor-goods">
                    <GoodsBanner />
                </div>
                <div id="anchor-comment">
                    <CommentBanner />
                </div>
                <div id="anchor-detail">
                    <GoodsDetailBanner />
                </div>
                <div id="anchor-recommend">
                    <RecommendBanner />
                </div>
            </MainWrapper>
            <FooterWrapper>
                {renderFooter()}
            </FooterWrapper>
            <Popup
                visible={visible}
                showCloseButton
                onClose={() => {
                    setVisible(false)
                }}
                onMaskClick={() => {
                    setVisible(false)
                }}
            >
                <BuyBanner 
                tagertGoodsInfo={tagertGoodsInfo}
                targetShopInfo={targetShopInfo}
                onSetVisible={onSetVisible}
                
                />
            </Popup>
        </Wrapper>
    )
}

export default Purchase
