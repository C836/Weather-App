import styled from "styled-components";

export const Weather = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: opacity 0.3s;

  opacity: ${(props) => props.disabled && 0};
  pointer-events: ${(props) => props.disabled && "none"};
`;

export const Display = styled.div`
  display: flex;
  align-items: center;
`