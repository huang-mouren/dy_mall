import React, { useEffect } from 'react'
import { ItemWrapper} from './style'
import i from '@/assets/images/i.jpg'
import { Skeleton,Space } from 'antd-mobile'



export default function GoodsCardItem({source,loading}) {
  const {title,coupon,refprice,subprice,price,img} = source
  const renderItem=()=>{
    return (
    <>
      <div className="goods-img">
        <img className="img" src={i}  data-src={img}/>
      </div>
      <div className="goods-title">
        <p>{title}</p>
      </div>
      <div className="goods-coupon">
        {coupon&&<div>
            <li>券</li>
            <li>{coupon}</li>
        </div>
        }
        <div>
            <li>正快省新</li> 
        </div>
      </div>
      {refprice>0?(<div className="goods-refprice">
            <span>参考价￥{refprice}</span>
      </div>):(<div className='goods-occupy'></div>)}
      {subprice?(<div className="goods-subprice">
        <ul>
          <li><span>补贴价</span></li>
          <li><span>￥{subprice}</span></li>
        </ul>
      <ul>
        <li><span>已补</span></li>
        <li><span>￥{refprice-subprice}</span></li>
        </ul>
      </div>):
      (<div className="goods-price"><span>￥{price}</span></div>)
      }
    </>
    )
  }

  const renderSkeletonItem=()=>{
    return (
      <Space direction='vertical'>
        <div className="goods-img">
            <img src={i}/>
        </div>
        <Skeleton animated className='longskeleton m8'/>
        <Skeleton animated className='longskeleton m8'/>
        <Skeleton animated className='midskeleton m8'/>
        <Skeleton animated className='smallskeleton m8' />
        <div className="skeleton-wrapper-flex m8">
          <Skeleton animated className='midskeleton' />
          <Skeleton animated className='smallskeleton' />
        </div>
      </Space>
    )
  }
  return (
      <ItemWrapper >
        { loading?renderSkeletonItem():renderItem()}
      </ItemWrapper>
  )
}
