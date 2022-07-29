import styled from "styled-components";

export const Select = styled.ul`
  width: 100%;
  margin-top: 1px;

  border-radius: 10px;
  background-color: white;
  opacity: 75%;

  top: 100%;
  z-index: -1;
  position: absolute;

  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const Option = styled.button`
  display: flex;
  align-items: baseline;
  padding: 2% 3%;

  font-family: "Montserrat", sans-serif;
  font-size: clamp(1rem, 5vw, 1.25rem);
  color: var(--main-color);

  cursor: pointer;

  :hover{
    color: var(--secondary-color);
  }

  p, small {
    pointer-events: none;
    margin-right: 10px;
  }

  small {
    font-size: clamp(0.8rem, 5vw, 0.9rem);
  }
`;
