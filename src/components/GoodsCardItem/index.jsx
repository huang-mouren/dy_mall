import React from 'react'
import { Wrapper } from './style'
import LazyLoad from 'react-lazyload'
import temp from '@/assets/images/temp.jpg'
const GoodsCardItem = ({goodsData}) => {
    console.log(goodsData);
    const {name,imgUrl,price}=goodsData
    const renderItem = () => {
        return (
            <div className="item_wrapper">
                <div className="item_img_wrapper">
                    
                    <LazyLoad className="item_img_wrapper"
                        placeholder={ 
                        <img width="100%" height="100%" src={temp}/>}
                    >
                        <img src={imgUrl} alt="" className="item_img" />
                    </LazyLoad>
                </div>
                <div className="item_info_wrapper">
                    <div className="item_name">{name}</div>
                    <div className="item_price">￥{price}</div>
                </div>
            </div>
        )
    }
    return (
        <Wrapper>
            {renderItem()}
        </Wrapper>
    )

}

export default GoodsCardItem
