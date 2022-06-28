import React from 'react'
import { 
    GoodsCardListWrapper,
    TabsWrapper,
    ListWrapper
} from './style'
import GoodsCardItem from '../common/GoodsCardItem'
import LiveCardItem from '../common/LiveCardItem'
import VideoCardItem from '../common/VideoCardItem'
import {Tabs,InfiniteScroll} from 'antd-mobile'
import { createHash} from '@/utils'


export default function GoodsCardList(props) {
  
    const {activityKey,requestKey,setActivityKey,
          goodsData,liveData,videoData,
          loading,loadMore,hasMore}=props
    // console.log(activityKey);
    const tabItems=[
        {key:'chaodian',title:'潮店精选'},
        {key:'fenqi',title:'分期免息'},
        {key:'51yuan',title:'51元封顶'},
        {key:'haowu',title:'好物直播'},
        {key:'daren',title:'达人种草'},
    ]

    const renderGoodsCardItem=()=>{
      return(
          loading?[...new Array(8).keys()].map((index)=>(
            <GoodsCardItem 
                source='' 
                key={index} 
                loading={loading}
            />
          )):goodsData.map(source =>{
              return (activityKey==source.tag&&
                  <GoodsCardItem 
                      source={source}  
                      key={source.key} 
                      id={source.key}
                      loading={loading}
                  />
              )
          } 
        )
    )    
    }
    const renderLiveCardItem=()=>{
      return (loading?([...new Array(8).keys()].map((index)=>{      
        return(
          <LiveCardItem 
            source='' 
            key={index} 
            loading={loading}
          />
        )
      })):(liveData.map(source=>{
        return(
          <LiveCardItem 
              source={source} 
              key={source.key} 
              id={source.key}
              loading={loading}
          />
        )
      }))
    )
    }
    const renderVideoCardItem=()=>{
      return ( loading?[...new Array(8).keys()].map((index)=>(
        <VideoCardItem source='' key={index} loading={loading}/>
      )):videoData.map(source=>
        (<VideoCardItem 
          source={source} 
          key={source.key} 
          id={source.key} 
          loading={loading}/>)  
      ))
    }
  return (
    <GoodsCardListWrapper>
          <TabsWrapper>
            <Tabs
                activeKey={activityKey} 
                onChange={
                    key=>{
                        const index=tabItems.findIndex(item=>item.key===key)
                        setActivityKey(tabItems[index].key)
                    }
                }
            >
              {
                tabItems.map(item=>(
                    <Tabs.Tab title={item.title} key={item.key}/>
                ))
              }
            </Tabs>
          </TabsWrapper>
        <ListWrapper id='scroll-top'>
            {['chaodian','fenqi','51yuan'].includes(activityKey) && renderGoodsCardItem()}
            {activityKey=='haowu' && renderLiveCardItem()}     
            {activityKey =='daren'&& renderVideoCardItem()}
        </ListWrapper>
        {requestKey.includes(activityKey) && (<InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={0}/>)}         
    </GoodsCardListWrapper>

  )
}
