import styled from "styled-components"
import { COLORS } from "../../../styles/variables"

export const Step3tStyles = styled.div`
    .wrapper{
        display: flex;
        justify-content: center;
        flex-direction: column;
        h2{
            font-weight: 400;
            font-size: ${48/ 16}rem;
            line-height: ${52.8 / 16 }rem;
            width: 100%;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 2rem;
        }

        p{
            font-weight: 400;
            font-size: ${14.5/ 16}rem;
            line-height: ${21.75 / 16 }rem;
            text-align: center;
        }

        .btn-cta{

            display: flex;
            gap: 4rem;
            align-items: center;
            padding: 2rem 0;
            margin: 0 auto;

            a{
                color: ${COLORS.black}!important;
                font-family: "Roboto", sans-serif;
                font-size: ${17 /16}rem;
                position: relative;
                &:before{
                    content: '';
                    border-bottom: .15rem solid ${COLORS.black};
                    position: absolute;
                    width: 100%;
                    top: 2rem;
                }  
            }
        }

    }
   

`
