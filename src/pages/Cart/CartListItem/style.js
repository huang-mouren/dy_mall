import styled from "styled-components";

import style from '@/assets/global-style'

export const Wrapper = styled.div`
    margin-bottom: .8rem;
    background-color: #f5f5f5;
    border-radius: 1rem;
    .checkbox_wrapper{
        margin: 0 .8rem;
    }
`
export const HeaderWrapper = styled.div`
    border-radius: 1rem 1rem 0 0;
    background-color: white;
    margin: 0 .8rem;
    padding: 0.8rem 0;
    display: flex;
    
    .shop_info_wrapper{
        display: flex;
        height: 1rem;
        .shop_img_wrapper{
            width: 1rem;
            height: 1rem;
            .shop_img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .shop_name{
            font-size: .8rem;
            font-weight: bold;
            margin-left: .4rem;
            line-height: 1rem;
        }
    }

`
export const ItemWrapper = styled.div`
    margin: 0 .8rem;
    background-color: white;
    padding: 0 .8rem .8rem 0;
    border-radius: 0 0 1rem 1rem;
    .item_wrapper{
        padding: .4rem 0;
        display: flex;
        align-items: center;
        .item_info_wrapper{
        display: flex;
        flex: 1;
        align-items: center;
        .item_img_wrapper{
            width: 4rem;
            height: 4rem;
            .item_img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .item_detail_wrapper{
            height: 4rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: .8rem;
            .item_name{
                font-size: .8rem;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .item_type{
                font-size: .7rem;
                height: 1rem;
                line-height: 1rem;
                color: gray;
                background-color: #f5f5f5;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .item_price_count_wrapper{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .item_price{
                    color: ${style['theme-color']};
                    font-size: 1.2rem;
                }
                .item_count_wrapper{
                    display: flex;
                    align-items: center;
                    border: .05rem solid gray;
                    border-radius: .5rem;
                    font-size: .8rem;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    .item_count_button{
                        border-radius: .5rem;
                        background-color: #f5f5f5;
                        width: 1.6rem;
                        font-weight: bold;
                        text-align: center;
                        border: none;
                    }
                    .item_count{
                        width: 1.6rem;
                        text-align: center;
                        border-left: .05rem solid gray;
                        border-right: .05rem solid gray;

                    }
                }
            }
        }
        
    }
    }
    
`