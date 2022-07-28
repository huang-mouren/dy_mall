import styled from "styled-components";

import style from '@/assets/global-style'

export const Wrapper=styled.div`

`
export const HeaderWrapper=styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: white;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .adm-nav-bar-title{
        padding: 0; 
    }
    .search_wrapper{
        height: 1.75rem;
        width: 13rem;
        border-radius: 0.85rem;
        background-color: #F4F4F4;
        display: flex;
        align-items: center;
        color: gray;
        .search_icon{
            margin: 0 .8rem;
            font-size: 1.2rem;
        }
    }
    
`
export const SwiperTabsWrapper=styled.div`
    position: sticky;
    top: 2.5rem;
    z-index: 999;
    background-color: white;
`
export const OrdersListWrapper=styled.div`
`
