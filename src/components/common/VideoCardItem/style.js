import styled from "styled-components";

export const ItemWrapper=styled.div`

    .video-icon{
        margin: .3rem .3rem;
        text-align: left;
        height: 1rem;
        .fa-play-circle:before{
            display: inline-block;
            height: .75rem;
            width: .75rem;
            background-color: white;
            color: red;
            border-radius: .4rem;
            line-height:.8rem;
            text-align: center;
        }
        
    }
    .ml{
        margin-left: .4rem;
    }
    .mt{
        margin-top: .4rem;
    }
    .mt3{
        margin-top: 3rem;
    }
    .video-bgimg{
        width:8.75rem;
        height: 12rem;
        margin: .2rem .2rem;
        border-radius: .8rem;
        display: flex;
        flex-direction: column; 
        background-image: url(${props=>props.bgimg});
        background-size:cover ;
        background-repeat:no-repeat ;
        background-color: white;
    }
    .video-icon{

    }
    .video-host{
        flex:1;
        display: flex;
        align-items: flex-end;
        img{
            width: 2rem;
            height: 2rem;  
            border-radius: 1rem;
            border: .05rem solid white; 
            margin: 0 .3rem;
        }
        .video-host-name{
            color: white;
            font-size: .8rem;
            margin-bottom: .8rem;
            
        }
    }

    .video-goods{
        display: flex;
        height: 4rem;
        background-color: white;
        margin: .8rem .3rem;
        border-radius: .4rem;
        align-items: center;
        .video-goods-img{
            margin-left: .4rem;
            justify-content: center;
            img{
                width: 3rem;
                height: 3rem;
                border: .1rem solid white;
                border-radius: .4rem;
                margin-top: .1rem;
            }
        }
        .video-goods-info{
            flex: 1;
            display: flex;
            flex-direction: column;
            vertical-align: text-bottom;
            .goods-des{
                font-size: .8rem;
                text-align: left;
                color: gray;
                overflow: hidden;  
                text-overflow: ellipsis;  
                display: -webkit-box;  
                -webkit-line-clamp: 2;  
                -webkit-box-orient: vertical;
            }
            .goods-price{
                flex: 1;
                text-align: left;
                justify-content: center;
                font-size: .8rem;
                color: red;
                span{
                    display: inline-block;
                } 
            }
        }
    }

    .iconskeleton{
        height: 1rem;
        width: 1rem;
        border-radius: .5rem;
    }
    .midskeleton{
        height: 1rem;
        width: 4.5rem;
        border-radius: .5rem;
    }
    .smallskeleton{
        height: .8rem;
        width: 3rem;
        border-radius: .4rem;
    }
    .circleskeleton{
        height: 2rem;
        width: 2rem;
        border-radius:1rem;
    }
    
    .squareskeleton{
        width: 4rem;
        height: 4rem;
    }
    .skeleton-flex-1{
        margin-top: 5rem;
    }
    .skeleton-wrapper-flex{
        display: flex;
        align-items: center;
        
    } 
    
`