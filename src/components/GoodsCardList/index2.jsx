import React from "react";
import { 
    GoodsCardListWrapper,
    TabsWrapper,
    ListWrapper
} from './style'
import GoodsCardItem from '../common/GoodsCardItem'
import LiveCardItem from '../common/LiveCardItem'
import VideoCardItem from '../common/VideoCardItem'
import {Tabs} from 'antd-mobile'
export default function GoodCardList(){
    
    //
    const [activityKey,setActivityKey]=useState('chaodian');
    //
    const tabItems=[
        {key:'chaodian',title:'潮店精选'},
        {key:'fenqi',title:'分期免息'},
        {key:'51yuan',title:'51元封顶'},
        {key:'haowu',title:'好物直播'},
        {key:'daren',title:'达人种草'},
    ]
    return(
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
            <ListWrapper>
                {<GoodsCardItem/>}
                {<LiveCardItem/>}
                {<VideoCardItem/>}
            </ListWrapper>
        </GoodsCardListWrapper>
    )
}