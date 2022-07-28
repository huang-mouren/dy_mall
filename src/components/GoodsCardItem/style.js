import styled from "styled-components";

import style from '@/assets/global-style'

export const Wrapper=styled.div`
    /* width: 8rem; */
    margin: .4rem 0;
    border-radius: 1rem;
    background-color: white;
    .item_wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        .item_img_wrapper{
            width:8.25rem;
            height: 8.25rem;
            .item_img{
                border-radius: 1rem;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .item_info_wrapper{
            width: 8.25rem;
            padding: .4rem .4rem;
            .item_name{
                font-size: 1rem;
                max-height: 2rem;
                overflow: hidden;
            } 
            .item_price{
                font-size: 1rem;
                color: ${style['theme-color']};
            }
        }
    }
`