import styled from "styled-components";

import style from '@/assets/global-style'

export const Wrapper=styled.div`
    background-color: #f5f5f5;
    .rem12{
        font-size: 1.2rem;
    }
    .bg_inherit{
        background-color: #f5f5f5;
        .adm-jumbo-tabs-tab-description{
            background-color: #f5f5f5;
        }
    }
    .bg_white{
        background-color: white;
    }
`
export const JumboTabsWrapper=styled.div`

    margin: .4rem .6rem;
    .adm-jumbo-tabs-tab-description{
        background-color: white;
        margin-top: .4rem;
        a{
            color: black; 
        }
        
    }
    .icon_img_wrapper{
        width: 2.5rem;
        height: 2.5rem;
        .icon_img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`
export const ChosenWrapper=styled.div`
    margin: .4rem .6rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 1rem;
    background-color: white;
    .chosen_content{
       height: 6rem;
    }
    .chosen_header{
        padding: .4rem .4rem;
        display: flex;
        align-items: center;
        .chosen_title{
            font-size: 1rem;
            font-weight: bold;
        }
        .chosen_tag{
            font-size: .7rem;
            color: white;
            width: 2rem;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            border-radius: .5rem .5rem .5rem 0;
            margin-left: .4rem;
        }
        .bgtheme{
            background-color: ${style['theme-color']};
        }
        .bgblack{
            background-color: black;
        }
    }
    .chosen_main{
        display: flex;
        align-items: center;
        justify-content: space-around;
        .chosen_img_wrapper{
            position: relative;
            width: 3.5rem;
            height: 3.5rem;
            padding: 0 .4rem;
            border-radius: 1.75rem; 
            .chosen_img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            .radius{
                border-radius: 1.75rem;
                border: 0.1rem solid ${style['theme-color-light']};
            }
            .chosen_img_name{
                overflow:hidden; 
                white-space:nowrap;
                font-size: .8rem;
                line-height: 1rem;
            }
            .colortype{
                position: absolute;
                bottom: -0.5rem;
                max-width: 3rem;
                height: 1rem;
                border-radius: .5rem;
                color: white;
                background-color: ${style['theme-color-light']};
                left: 50%;
                transform: translateX(-50%);
                border: 0.15rem solid white;
            }
            .normaltype{
                position: absolute;
                bottom: -0.5rem;
                max-width: 3rem;
                background-color:#f5f5f5
            }
            
        }
    }
    
`
export const RecommendWrapper=styled.div`
    display: flex;
    justify-content: space-around;
    
`
