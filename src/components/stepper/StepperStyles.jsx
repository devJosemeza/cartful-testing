import styled from 'styled-components';
import { COLORS, DEVICE } from '../../styles/variables';

export const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 10.325rem);
  @media ${DEVICE.maxxs} {
    padding: 0 1rem;
  }
  
`;

export const StepperHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;
`;

export const Step = styled.div`
  width: ${24/16}rem;
  height: ${24/16}rem;
  border-radius: 50%;
  ${({ isActive }) => (isActive ? `` : `border: .1rem solid ${COLORS.black};`)}
  background-color: ${({ isActive, isCompleted }) => (isActive ? `${COLORS.yellow}` : isCompleted ? `${COLORS.black}` : '#fff')};
  color: ${({ isActive, isCompleted }) => (isActive || isCompleted ? `${COLORS.white}` : `${COLORS.black}`)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: auto;
  transition: background-color 0.3s;
  font-size: ${11 / 16}rem;
  font-weight: 700;
  
`;

export const StepContent = styled.div`
  width: 100%;
  min-height: 25rem;
   @media ${DEVICE.maxxs} {
        min-height: auto;
   }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 13rem;

  @media ${DEVICE.maxxs} {
    padding: 2rem 0;
    justify-content: flex-start;
    position: relative;
  }

  .btn-why{
    position: absolute;
    right: 13rem;

    @media ${DEVICE.maxxs} {
        positon: relative;
        right:  0;
    }
  }

  button {
    color: ${COLORS.black}!important;
    background: transparent!important;
    border: none;
    display: flex;
    gap: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: "Roboto", sans-serif;
    font-size: ${17 /16}rem;
    align-items: center;
    position: relative;
    padding: 0!important;

    &:before{
        content: '';
        border-bottom: .15rem solid ${COLORS.black};
        position: absolute;
        width: 100%;
        top: 2.4rem;
    }   
    
    &:hover{
        background: none!important;
    }

  }
`;
