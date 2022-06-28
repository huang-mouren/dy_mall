import { useState , useEffect } from 'react'
import './App.css'
import { getGoodsData,getLiveData,getVideoData } from './api/request'
import GoodsCardList from './components/GoodsCardList'
import { checkImgs,throttle, } from './utils'
function App() {
  
  const [activityKey,setActivityKey]=useState('chaodian');
  const [requestKey,setRequestKey]=useState([])
  const [infiniteKey,setInfiniteKey]=useState([])
  const [loading,setLoading]=useState(false)
  const [firstLoad,setFirstLoad]=useState(1)
  const [goodsData,setGoodsData]=useState([])
  const [liveData,setLiveData]=useState([])
  const [videoData,setVideoData]=useState([])
  const [hasMore, setHasMore] = useState(true)
  

  useEffect(()=>{
    window.scrollTo({top:0})
    if(!requestKey.includes(activityKey)){
      setLoading(true);
      (async ()=>{
        if(['chaodian','fenqi','51yuan'].includes(activityKey)){
          let {data}=await getGoodsData()
          setGoodsData([...data])
        }
        if(activityKey == 'haowu'){
          let {data}=await getLiveData()
          setLiveData([...data])
        }
        if(activityKey == 'daren'){
          let {data}=await getVideoData()
          setVideoData([...data])
        }
        setLoading(false);
        setRequestKey([...requestKey,activityKey])
      })()  
    }
  },[activityKey])

  useEffect(()=>{
    // 得到数据或切换tab load时对图片进行检查
      checkImgs() 
  },[goodsData,liveData,videoData,activityKey])


  // useEffect(()=>{
  //   setInfiniteKey([...requestKey])
  // },[requestKey])

  // window.addEventListener("load",checkImgs())
  window.addEventListener("scroll",throttle(checkImgs))

  async function loadMore() {
    
    if(['chaodian','fenqi','51yuan'].includes(activityKey)){
      // console.log('loadmore1');
      let {data}=await getGoodsData()
      setGoodsData([...goodsData,...data])
      setHasMore(data.length > 0)
    }
    if(activityKey == 'haowu'){
      // console.log('loadmore2');
      let {data}=await getLiveData()
      setLiveData([...liveData,...data])
      setHasMore(data.length > 0)
    }
    if(activityKey == 'daren'){
      // console.log('loadmore3');
      let {data}=await getVideoData()
      setVideoData([...videoData,...data])
      setHasMore(data.length > 0)
    }
    
    

  }
  return (
    <div className="App">
        <GoodsCardList 
          activityKey={activityKey} 
          requestKey={requestKey}
          infiniteKey={infiniteKey}
          setActivityKey={setActivityKey}
          goodsData={goodsData} 
          liveData={liveData}
          videoData={videoData}
          loading={loading}
          loadMore={loadMore}
          hasMore={hasMore}
        />
    </div>
  )
}

export default App
