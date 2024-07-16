import styled from "styled-components"
import { COLORS, DEVICE } from "../../styles/variables"


export const CardStyles = styled.div`

    &.small{
        width: ${150 / 16 }rem;
        height: ${177 / 16}rem;
        @media ${DEVICE.maxxs} {
            width:46%;
            height: ${130 / 16}rem;
        }
    }

    &.medium{
        width: ${180 / 16 }rem;
        height: ${271 / 16}rem;
        @media ${DEVICE.maxxs} {
            width:46%;
            height: ${180 / 16}rem;
        }
    }
    
    cursor: pointer;
    transition: background-color 0.3s, opacity 0.3s;
     ${({ isSelected, color }) => (!isSelected ? `background-color:${color}!important;` : 'background-color:#E9E4DB;' )}
    opacity: ${({ isAnySelected, isSelected }) => (isAnySelected && !isSelected ? '0.3' : '1')};
    position: relative; 

    &:hover{
        background-color: ${COLORS.white}!important;
    }
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 1.9rem;
        gap: 1.5rem;
        height: 100%;
        @media ${DEVICE.maxxs} {
            gap: 1rem;
        }
        .icon{
            width: ${80 / 16 }rem;
            height: ${80 / 16}rem;
            margin: 0 auto;
            @media ${DEVICE.maxxs} {
                width: 3rem;
                height: 3rem;
            }
        }

        .title{
            p{
                font-family: "Roboto", sans-serif;
                font-weight: 400;
                font-size: ${14.5 / 16}rem;
                text-align: center;
            }
        }

        .subtitle{
            p{
                font-family: "Roboto", sans-serif;
                font-size: ${11 / 16}rem;
                font-weight: 400;
                text-align: center;
            }
        } 

    }
`