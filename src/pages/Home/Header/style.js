import styled from "styled-components";

import style from '@/assets/global-style'

export const Wrapper=styled.div`
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: white;
    .adm-nav-bar-title{
        padding: 0;
    }
    .rem1{
        font-size: 1.1rem;
        margin: 0 .4rem 0 .4rem;
    }

`
export const SearchWrapper=styled.div`
    height: 1.5rem;
    border: 0.075rem solid ${style['theme-color-light']};
    border-radius: 0.85rem;
    display: flex;
    align-items: center;
    .search_input{
        flex: 1;
        height: 1.2rem;
        border: none;
        font-size: .8rem;
        width: 6rem;
        outline: 0;
    }
    .search_button{
        background-color: ${style['theme-color']};
        border: none;
        height: 1.4rem;
        width: 2.8rem;
        border-radius:0.7rem;
        color: white;
        line-height: 1.4rem;
        font-size: 0.7rem;
        font-weight: bold;
        margin-right: .1rem;
    }
`