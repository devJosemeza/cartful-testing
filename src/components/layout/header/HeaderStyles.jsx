import styled from "styled-components"
import { COLORS } from "../../../styles/variables"


export const HeaderStyles = styled.header`
    height: ${165.2 / 16}rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${COLORS.black};
    .wrapper{
       
        .title{
            a{
                font-size: ${32/16}rem;
                font-weight: 700;
                color: ${COLORS.white};
            }
        }
    }

`