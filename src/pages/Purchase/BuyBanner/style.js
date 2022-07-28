import styled from "styled-components";

export const Wrapper = styled.div`
        height: 75vh;
        display: flex;
        margin: .5rem 0.5rem;
        
        justify-content: space-between;
        flex-direction: column;
        .buy-info{
            display: flex;
            .buy-choose{
                margin-top: 1rem;
                margin-left: .5rem;
                .price{
                    color: red;
                }
                .stock{
                    color: gray;
                    font-size: .6rem;
                    margin: .4rem 0;
                }
                .chosen-info{
                    font-size: .7rem;
                    .chosen{
                        margin: 0 .2rem;
                    }
                }
            }
            
        }
        .buy-count{
            display: flex;
            font-size: .8rem;
            align-items:center;
            justify-content: space-between;
            .chosen-count{
                align-items: center;
                button{
                    width: 1.5rem;
                    height: 1.5rem;
                    font-size: 1rem;
                    border: 0;
                    background-color: #f5f5f5;
                }
                .count{
                    margin: 0 .5rem;
                }
            }
        }
        .btn-buy{
            height: 2.5rem;
            width: 100%;
            background-color: red;
            color: white;
            font-size: 1rem;
            border: 0;
        }
`