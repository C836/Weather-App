import styled from "styled-components";

export const Select = styled.div`
  width: 100%;

  border-radius: 10px;
  background-color: white;
  opacity: 75%;

  overflow: visible;
  top: 100%;
  z-index: -1;
  position: absolute;
`;

export const Option = styled.option`
  display: flex;
  align-items: baseline;
  padding: 2% 3%;

  font-family: "Montserrat", sans-serif;
  font-size: clamp(1rem, 5vw, 1.25rem);
  color: var(--main-color);

  small {
    font-size: clamp(0.8rem, 5vw, 0.9rem);
  }
`;
