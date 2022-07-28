import styled from "styled-components";

import style from '@/assets/global-style'

export const Wrapper = styled.div`
    margin-bottom:.8rem 
`
export const HeaderWrapper = styled.div`
    border-radius: 1rem 1rem 0 0;
    background-color: white;
    margin: 0 .8rem;
    padding: 0.8rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .shop_info_wrapper{
        display: flex;
        height: 1rem;
        padding-left: .8rem;
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
    .order_state{
        font-size: .8rem;
        font-weight: bold;
        margin-right: .8rem;
        line-height: 1rem;
        color: ${style['theme-color']};
    }
`
export const ItemWrapper = styled.div`
    margin: 0 .8rem;
    background-color: white;
    padding-bottom: .8rem;
    border-radius: 0 0 1rem 1rem;
    .item_wrapper{
        padding: .4rem 0;
        display: flex;
        align-items: center;
        .item_info_wrapper{
            display: flex;
            align-items: center;
            padding: 0 .8rem;
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
                margin-left: .4rem;
                .flex_wrapper{
                    display: flex;
                    align-items: center;
                }
                .item_name_price_wrapper{
                    justify-content: space-between;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    .item_name{
                        font-size: 1rem;
                        max-width: 8rem;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    .item_price{
                        font-size: .8rem;
                        color: gray;
                        max-width: 3rem;
                    }
                }
                .item_type_count_wrapper{
                    justify-content: space-between;
                    font-size: .8rem;
                    color: gray;
                }
                .item_tag_wrapper{
                    font-size: .6rem;
                    color: gray;
                    .item_tag{
                        height: 1rem;
                        line-height: 1rem;
                        padding: 0 .2rem;
                        border: .05rem solid gray;
                        border-radius: .3rem;
                    }
                }
            }
        }
    }
    .item_total_action_wrapper{
        padding: 0 .8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        .item_total{
            font-size: 1rem;
            margin: .8rem 0;
        }
        .item_action{
            display: flex;
            .button{
                width: 4rem;
                height: 1.6rem;
                font-size: .8rem;
                border: .1rem solid gray;
                border-radius: .5rem;
                margin-left: .4rem;
                text-align: center;
                line-height: 1.6rem;   
            }
        }
    }
`