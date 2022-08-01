import styled from "styled-components";

import style from '@/assets/global-style'

export const Wrapper=styled.div`
    .main{
        min-height:100vh; 
    }
    
`
export const HeaderWrapper=styled.div`
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f5f5f5;
    position: sticky;
    top: 0;
    z-index: 999;
`
export const ListWrapper=styled.div`
`
export const FooterWrapper=styled.div`
    position: sticky;
    bottom: 0;
    padding: .8rem .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    .checkbox_wrapper{
        display: flex;
        align-items: center;
        position: relative;
        &:after{
            position: absolute;
            content: '';
            display: block;
            height: .8rem;
            width: 0.075rem;
            background-color: gray;
            top: 50%;
            left: 110%;
            transform: translate(-110%,-50%);
        }
    }
    .footer_buy_wrapper{

        display: flex;
        align-items: center;
        font-size: .8rem;
        height: 2rem;
        .buy_total{
            line-height: 2rem;
            .total{
                font-size: 1.4rem;
                color: ${style['theme-color']};
            }
        }
        .buy_settle{
            margin-left: .4rem;
            .button_settle{
                border: none;
                width: 5rem;
                height: 2rem;
                background-color: ${style['theme-color']};
                border-radius: .5rem;
                font-size: 1rem;
                line-height: 2rem;
                color: white;
            }
        }
    }
`