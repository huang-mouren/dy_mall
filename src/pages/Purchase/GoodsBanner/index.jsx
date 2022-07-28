import React from 'react'
import { Wrapper } from './style'
import firstImg from './1.jpg'
import secondImg from './2.jpg'
import thirdImg from './3.jpg'
import fourthImg from './4.jpg'
import { SwiperWrapper } from './style'
import { Swiper } from 'antd-mobile/es/components/swiper/swiper'
const GoodsBanner = () => {
const imgs=[firstImg,secondImg,thirdImg]
const swiperItem=imgs.map((imgUrl,index)=>{
    return(
        <Swiper.Item key={index} >
            <div className='img-wrapper'>
                <img src={imgUrl} alt="" />
            </div>
        </Swiper.Item>  
    )
})
    return (
        <Wrapper>
            <SwiperWrapper>
                <Swiper
                    autoplay
                    loop
                >
                    {swiperItem}
                </Swiper>
            </SwiperWrapper>
            <div className='img-wrapper-t'>
                <img src={fourthImg} alt="" />
            </div>
        </Wrapper>
    )
}

export default GoodsBanner
