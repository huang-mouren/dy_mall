import React from 'react'
import { Wrapper } from './style'
import GoodsCardItem from '../GoodsCardItem'
import { useSelector } from 'react-redux'
const RecommendList = () => {
    const {goods}=useSelector((store)=>store.goodsInfo)
    return (
        <>
        <div>你可能还喜欢</div>
        <Wrapper>
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
        </Wrapper>
        </>
    )
}

export default RecommendList
