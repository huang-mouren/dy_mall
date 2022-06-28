import axios from 'axios'

export const getGoodsData=()=>
    axios.get('https://www.fastmock.site/mock/626bc8fcac24ccf6aafae123567b1712/goodsdata/shopping/goodsinfo')



export const getLiveData=()=>
    axios.get('https://www.fastmock.site/mock/626bc8fcac24ccf6aafae123567b1712/goodsdata/shopping/liveinfo')


    export const getVideoData=()=>
    axios.get('https://www.fastmock.site/mock/626bc8fcac24ccf6aafae123567b1712/goodsdata/shopping/videoinfo')