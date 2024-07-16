import styled from "styled-components"
import { DEVICE } from "../../../styles/variables";

export const Step2tStyles = styled.div`
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
        }

        .button-continue{ 
            margin: 2rem auto 0 auto;
              
        }
    }
   

`

export const ArchedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  width: 90%;
  margin: 0 auto;
  height: 20vh;
    @media ${DEVICE.maxxs} {
        height: auto;
        width: 100%;
        flex-wrap: wrap;
    }
  .card {
    position: relative;

    transform-origin: center;
    transition: transform 0.3s;
    @media ${DEVICE.maxxs} {
        top: auto!important;
        transform: rotate(0deg)!important;
    }
  }

  .card:nth-child(1) {
    top: 3.7rem;
    transform: rotate(-12deg);
  }

  .card:nth-child(2) {
    top: 1.7rem;
    transform: rotate(-8deg);
  }

  .card:nth-child(3) {
    top: .5rem;
    transform: rotate(-4deg);
  }

  .card:nth-child(4) {

  }

  .card:nth-child(5) {
    top: .5rem;
    transform: rotate(4deg);
  }

  .card:nth-child(6) {
    top: 1.7rem;
    transform: rotate(8deg);
  }

  .card:nth-child(7) {
    top: 3.7rem;
    transform: rotate(12deg);
  }

`;  