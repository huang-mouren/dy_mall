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
export const FooterWrapper=styled.div`
    display: flex;
    align-items: center;
    position: sticky;
    bottom: 0;
    z-index: 999;
    background-color: white;
    padding: .4rem .4rem;
    .icons_wrapper{
        display: flex;
        align-items: center;
        width: 8rem;
        justify-content: space-around;
        .icons_item_wrapper{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .icon{
                width: 1.4rem;
                height: 1.4rem;
            }
            .img_icon{
                width: 1.4rem;
                height: 1.4rem;
            }
        }
    }
    .btn_wrapper{
        display: flex;
        align-items: center;
        justify-content: space-around;
        .btn{
            text-align: center;
            width: 5rem;
            height: 2.5rem;
            line-height: 2.5rem;
        }
        .btn_cart{
            color: ${style['theme-color']};
            background-color: #FFF4F6; 
        }
        .btn_buy{
            color: white;
            background-color: ${style['theme-color']};
        }
    }
`
export const TabsWrapper=styled.div`
    background-color: white;
    position: sticky;
    top: 2.25rem;
    z-index: 999;
`
export const MainWrapper=styled.div`
    min-height: 32rem;
    margin-bottom: 2rem;
`