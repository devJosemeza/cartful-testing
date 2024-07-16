import styled from "styled-components"
import { COLORS } from "../../styles/variables"


export const LayoutStyles = styled.div`

    button{
        background: ${COLORS.black};
        height: ${40 / 16}rem;
        padding: 0 ${15 / 16}rem;
        color: ${COLORS.white};
        transition: all .3s;
        cursor: pointer;

        &:hover{
            background: ${COLORS.white};
            color: ${COLORS.black};
            transition: all .3s;
        }
    }

    button.disable{
        background: ${COLORS.dark_beige};
    }

`