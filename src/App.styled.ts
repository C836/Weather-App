import styled from "styled-components";

export const Home = styled.div<{disabled: boolean}>`
  transition: opacity 0.3s;

  opacity: ${props => props.disabled && 0};
  pointer-events: ${props => props.disabled && "none"};
`

export const Input_Wrapper = styled.section`
  width: 600px;
  max-width: 90%;

  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  row-gap: 16px;
`

export const Weather = styled.div<{disabled: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);

  transition: opacity 0.3s;

  opacity: ${props => props.disabled && 0};
  pointer-events: ${props => props.disabled && "none"};
`

export const Weather_Wrapper = styled.div`
  display: flex ;
  align-items: center;
`
