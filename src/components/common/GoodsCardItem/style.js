import styled from 'styled-components'


export const ItemWrapper=styled.div`
    
    width:8.75rem;
    height: 15.5rem;
    margin: .2rem .2rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: .8rem;
    .m8{
        margin: 0 .4rem;
    }
    .goods-img{
        /* border-radius: .8rem; */
        width:8.75rem;
        height: 8.75rem;
        top: 0;
        img{
            border-radius: .8rem .8rem 0 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .goods-title{
        margin: .1rem .4rem;
        font-size: .8rem;
        p{
            text-align: left;
            max-height: 1.6rem;
            overflow:hidden;
        }
    }
    .goods-coupon{
        margin: .2rem .2rem;
        font-size: .7rem;
        color: red;
        display: flex;
        div{
            display: flex;
            border-radius: .2rem;
            border: .1rem solid pink;
            li{
                text-align: center;
                font-size: .1rem;
                padding: .1rem .2rem;
                &:nth-child(2){
                    width: 2.5rem;
                    border-left: .1rem dashed pink;
                    text-overflow:ellipsis; 
                    overflow:hidden; 
                    white-space:nowrap;
                }
            }
            &:first-child{
                margin-right: .1rem;
            }
            &:last-child{
                background-color: #FFF0F5;
                margin-left:.2rem;
            }
        }
    }
    .goods-refprice{
        font-size: .7rem;
        text-align: left;
        color: gray;
        margin: .2rem .4rem;
    }
    .goods-occupy{
        padding: .8rem 0rem;
    }
    .goods-subprice{
        flex: 1;
        display: flex;
        font-size: .8rem;
        margin: .2rem .4rem;
        
        ul{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: left;
            
            li{
                flex: 1;
                position: relative;
                span{
                    position: absolute;
                    bottom: 0;
                }
                
            }
            &:nth-child(1){
                color: red;
            }
            &:nth-child(2){
                color: orange;
            }
        }
        bottom: 0;
    }
    .goods-price{
        
        flex: 1;
        text-align: left;
        font-size: .8rem;
        color: red;
        margin: .2rem .4rem;
        position: relative;
        span{
            position: absolute;
            bottom: 0;
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
    .skeleton-wrapper-flex{
        display: flex;
        align-items: baseline;
    }   
    

`