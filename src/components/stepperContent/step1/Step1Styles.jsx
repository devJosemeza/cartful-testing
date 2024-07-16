import styled from "styled-components"
import { DEVICE } from "../../../styles/variables";

export const Step1Styles = styled.div`
    .wrapper{
        display: flex;
        justify-content: center;
        flex-direction: column;
        h2{
            font-weight: 400;
            font-size: ${30/ 16}rem;
            line-height: ${39 / 16 }rem;
            width: 100%;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 2rem;
        }

        .container-card{
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            @media ${DEVICE.maxxs} {
                flex-wrap: wrap;
                flex-direction: row;
            }
        }

        .button-continue{ 
            margin: 2rem auto 0 auto;
              
        }
    }
   

`
