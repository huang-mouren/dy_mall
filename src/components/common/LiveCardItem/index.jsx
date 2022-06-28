import React from 'react'
import i from '@/assets/images/i.jpg'
import { ItemWrapper } from './style'
import { Space,Skeleton } from 'antd-mobile'
export default function LiveCardItem({source,loading}) {
    const {title,visitorsnum,goodsnum,name,hostpic,bgimg,goodsimg}=source
    
    const renderItem=()=>{
        return (
            <div className='live-bgimg'>
                <div className='live-state ml'>
                    <div>直播中</div>
                    <div className='live-head-vistors'>{visitorsnum}观看</div>
                </div>
                <div className='live-goods ml mb'>
                    <div className='live-goods-img'><img className='img' src={i} data-src={goodsimg} alt=''/></div>
                    <div className='live-goods-nums'>{goodsnum}件商品</div>
                </div>
                <div className='live-title ml mb'>{title}</div>
                <div className='live-host ml mb'>
                    <div className='live-host-pic'><img className='img' src={i} data-src={hostpic} alt=''/></div>
                    <div className='live-host-name'>{name}</div>
                </div>
            </div>)
    }
    const renderSkeletonItem=()=>{
        return (
            <div className='live-bgimg'>
                <Space direction='vertical'>
                    <Skeleton animated className='midskeleton ml mt' />
                    <div className='skeleton-wrapper-flex end ml'>
                        <Skeleton animated className='squareskeleton' />
                        <Skeleton animated className='smallskeleton' />
                    </div>
                    <Skeleton animated className='longskeleton ml'  />
                    <div className='skeleton-wrapper-flex ml center'>
                        <Skeleton animated className='circleskeleton' />
                        <Skeleton animated className='smallskeleton' />
                    </div>
                </Space>
            </div>
        )
    }

    
  return (
    <ItemWrapper bgimg={bgimg} >
        {loading?renderSkeletonItem():renderItem()}
    </ItemWrapper>
  )
}
