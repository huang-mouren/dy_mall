import styled from "styled-components";
import i from '/src/assets/images/i.jpg'

export const ItemWrapper=styled.div`
    color: white;
    font-size: .6rem;
    .ml{
        margin-left: .4rem;
    }
    .mt{
        margin-top: .4rem;
    }
    .mb{
        margin-bottom: .4rem;
    }
    .live-bgimg{
        width:8.75rem;
        height: 14rem;
        margin: .2rem .2rem;
        border-radius: .8rem;
        display: flex;
        flex-direction: column; 
        background-image: url(${props=>props.bgimg});
        background-size:cover ;
        background-repeat:no-repeat ;
        background-color: white;
        
    }
    .live-state{
        width: 5rem;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        margin-top:.4rem;
        border-radius: .2rem;
        div{
            padding: .1rem .1rem;
            &:first-child{
                flex: 1;
                background-color: red;
                border-radius: .2rem;
            }
        }
    }
    .live-goods{
        flex: 1;
        display: flex;
        align-items: flex-end;
        img{
            width: 3rem;
            height: 3rem;
            object-fit: cover;
        }
        .live-goods-nums{
            padding-left: .4rem;
        }
    }
    .live-title{
        height: .9rem;
        text-align: left;
        font-size: .8rem;
        overflow:hidden;
        text-overflow: clip;
    }
    .live-host{
        display: flex;
        align-items:center;
        img{
            width: 2rem;
            height: 2rem;
            border-radius: 1rem;
            border: .1rem solid white;
        }
        .live-host-name{
            font-size: .7rem;
            margin-left: .4rem;
        }
        
    }

    .longskeleton{
        height: 0.8rem;
        width: auto;
        border-radius: .4rem;
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
        width: 3rem;
        height: 3rem;
    }
    .end{
        margin-top: 5rem;
        align-items: flex-end;
    }
    .center{
        align-items: center;
    }
    .skeleton-wrapper-flex{
        display: flex;
    } 
`