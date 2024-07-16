import styled from "styled-components"
import { COLORS, DEVICE } from "../../styles/variables"


export const BestMatchTableStyles = styled.div`
    display: flex;
    margin: 2rem 8rem;
    background-color: ${COLORS.dark_beige};
    position: relative;
    overflow: hidden;
    height: ${464 /16}rem;

    @media ${DEVICE.maxxs} {
        margin: 0;
        height: auto;
        flex-direction: column;
    }


    .product-featured{
        width: 30%;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
        border-right: .1rem dashed #86837E;

        @media ${DEVICE.maxxs} {
            width: 100%;
            border-right: none;
            border-bottom: .1rem dashed #86837E;
        }

        h3{
            color: #7E836D;
            font-size: ${23.4 / 16}rem;
            line-height: ${28.09 /16 }rem;
            font-weight: 400;
            text-transform: uppercase;
        }

        img{
            width: ${ 313 /16 }rem;
            height: ${ 293 / 16}rem;

        }

        .product-name{
            color: ${COLORS.black};
            font-size: ${20 / 16}rem;
            line-height: ${24 /16 }rem;
            font-weight: 400;
            text-transform: uppercase;
        }
        .price{
            color: ${COLORS.black}
            font-size: ${18 / 16}rem;
            line-height: ${16 /16 }rem;
            font-weight: 700;
        }

    }

    .product-info{
        width: 70%;
        @media ${DEVICE.maxxs} {
            width: 100%;
        }
        h4{
            color: #7E836D;
            font-size: ${12 / 16}rem;
            line-height: ${16.8 /16 }rem;
            font-weight: 400;
            text-transform: uppercase;
        }

        .top{
            border-bottom: .1rem dashed #86837E;
            padding: 1rem;
            .description{
                color: ${COLORS.black};
                font-size: ${20 / 16}rem;
                line-height: ${24 /16 }rem;
                font-weight: 400;
                text-align: center;
                text-transform: uppercase;
                width: 50%;
                margin: 2rem auto 3rem auto;
                @media ${DEVICE.maxxs} {
                    width: 100%;
                    margin: 1.5rem 0;
                    text-align: left;
                }
            }
        }

        .notes{
            display: flex;
            width: 100%;
            height: ${283 /16}rem;
            @media ${DEVICE.maxxs} {
                flex-direction: column; 
                height: auto;
            }

            .no-dashed{
                border-right: none!important;
                @media ${DEVICE.maxxs} {
                    border-bottom: none!important;
                }
            }
            .note-item{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 3.5rem;
                width: 25%;
                border-right: .1rem dashed #86837E;
                position: relative;
                height: 100%;
                justify-content: center;
                @media ${DEVICE.maxxs} {
                    padding: 4rem 1rem 3rem 1rem;
                    width: 100%;
                    border-right: none;
                    border-bottom: .1rem dashed #86837E;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 1rem;
                }
                h4{
                    text-align: left;
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                }
                img{    
                    width: 5rem;
                    height: 5rem;
                
                }
                p{
                    text-align: center;
                    @media ${DEVICE.maxxs} {
                        text-align: left;
                        width: 45%;
                    }
                }
            }
        }
        
    }


`