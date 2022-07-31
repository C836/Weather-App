import styled from "styled-components";

export const Home = styled.div<{ disabled: boolean }>`
  width: 600px;
  max-width: 90%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  row-gap: 16px;

  transition: opacity 0.3s;

  opacity: ${(props) => props.disabled && 0};
  pointer-events: ${(props) => props.disabled && "none"};
`;
