import { motion } from "framer-motion";
import styled from "styled-components"
import { DEVICE } from "../../styles/variables";

export const TransitionStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top:10.325rem;
  height: calc( 100vh - 10.325rem);
  background-color: #9CAF96;
  text-align: center;
  width: 100%;
  z-index: 99;

  @media ${DEVICE.maxxs} {
    left: 0;
  }
  
  .content{
    @media ${DEVICE.maxxs} {
      width: 35vw;
    }
  }

  img {
    height: auto;

  }

  p {
    font-size: ${28 / 16}rem;
    font-family: "Roboto", sans-serif;
    color: #000;

    @media ${DEVICE.maxxs} {
      font-size: ${16 / 16}rem;
    }
  }
`;
