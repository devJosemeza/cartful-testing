import styled from "styled-components"
import { COLORS, DEVICE } from "../../../styles/variables"


export const HeaderStyles = styled.header`
    height: ${165.2 / 16}rem;
    
    background: ${COLORS.black};
    position: relative;
    .wrapper{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        @media ${DEVICE.maxxs} {
            justify-content: flex-start;
            padding: 0 2rem;
        }
        
        .title{
            a{
                font-size: ${32/16}rem;
                font-weight: 700;
                color: ${COLORS.white};
                text-align: center;
                @media ${DEVICE.maxxs} {
                    font-size: ${26/16}rem;
                }
            }
        }

        .hamburger{
            display: flex;
            flex-direction: column;
            position: absolute;
            right: 4rem;
            gap: .6rem;
            @media ${DEVICE.maxxs} {
                right: 2rem;
            }
            span{
                background: ${COLORS.white};
                border-radius: 1rem;
                width: ${46 / 16}rem;
                height: .2rem;
                padding: 0;
                border: none;
                @media ${DEVICE.maxxs} {
                    width: ${42 / 16}rem;
                }
            }
        }
    }

`