import React from 'react'
import { Wrapper } from './style'
import {SpinLoading} from 'antd-mobile'
const Loading = () => {
  return (
    <Wrapper>
     <SpinLoading color="#FF2C57" />
    <div>loading</div> 
    </Wrapper>
  )
}

export default Loading
