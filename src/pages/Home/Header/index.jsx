import React from 'react'
import { Wrapper,SearchWrapper} from './style'
import { NavBar } from 'antd-mobile'
import { Link } from 'react-router-dom'
import {Badge} from 'antd-mobile'
import { useSelector } from 'react-redux'
const Header = () => { 
    const {buyGoods} =useSelector((store)=>store.cartInfo)
    return (
        <Wrapper>   
            <NavBar right={
                    <Link to='/cart'>
                        <Badge content={buyGoods.allIds.length?buyGoods.allIds.length:''} color="#FF2C57">
                            <i className='iconfont icon-gouwuche '/>
                        </Badge>
                    </Link>}>
                <SearchWrapper>
                    <i className='iconfont icon-sousuo rem1'/>
                    <input className='search_input' type="text" placeholder='苹果'/>
                    <button className='search_button'>搜索</button>
                </SearchWrapper>
            </NavBar>
        </Wrapper>
    )
}

export default Header
