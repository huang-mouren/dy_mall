import React from 'react'
import i from '@/assets/images/i.jpg'
import { ItemWrapper } from './style'
import { Loading } from 'antd-mobile'
import { Space,Skeleton } from 'antd-mobile'
export default function VideoCardItem({source,loading}) {
    const {price,name,goodsdes,hostpic,bgimg,goodsimg}=source

    const renderItem=()=>{
        return (
            <div className="video-bgimg">
                <div className='video-icon'>
                <i className="fa fa-play-circle" />
                </div>
                <div className="video-host">
                    <div className='video-host-pic'><img className='img' src={i} data-src={hostpic}/></div>
                    <div className="video-host-name">{name}</div>
                </div>
                <div className="video-goods">
                    <div className='video-goods-img'><img className='img' src={i} data-src={goodsimg}/></div>
                    <div className="video-goods-info">
                        <div className="goods-des"><span>{goodsdes}</span></div>
                        <div className="goods-price"><span>￥{price}</span></div>
                    </div>
                </div>
            </div>
        )
    }

    const renderSkeletonItem=()=>{
        return (
            <div className="video-bgimg">
                <Space direction='vertical'>
                    <Skeleton animated className='iconskeleton ml mt'/>
                    <div className="skeleton-wrapper-flex ml mt3">
                        <Skeleton animated className='circleskeleton'/>
                        <Skeleton animated className='smallskeleton' />
                    </div>
                    <div className="skeleton-wrapper-flex ml mt">
                        <Skeleton animated className='squareskeleton'/>
                        <div className="skeleton-wrapper">
                            <Space direction='vertical'>
                                <Skeleton animated className='midskeleton'/>
                                <Skeleton animated className='midskeleton'/>
                                <Skeleton animated  className='smallskeleton'/>
                            </Space>
                        </div>
                    </div>
                </Space>
            </div>
        )
    }
  return (
    <ItemWrapper bgimg={bgimg}>
        {loading?renderSkeletonItem():renderItem()}
    </ItemWrapper>
  )
}
