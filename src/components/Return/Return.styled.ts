import styled from "styled-components";

interface ReturnConfig {
  disabled?: boolean;
}

export const Return = styled.img<ReturnConfig>`
  width: clamp(25px, 6vw, 40px);
  
  position: fixed;
  top: clamp(22px, 6vw, 35px);
  left: clamp(22px, 6vw, 35px);


  transition: opacity 0.3s;
  cursor: pointer;

  opacity: ${(props) => props.disabled && 0};
  pointer-events: ${(props) => props.disabled && "none"};
`;
