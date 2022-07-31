import styled from "styled-components";

export const Option = styled.button`
  display: flex;
  align-items: baseline;
  padding: 2% 3%;

  font-family: "Montserrat", sans-serif;
  font-size: clamp(1rem, 5vw, 1.25rem);
  color: var(--main-color);

  cursor: pointer;

  :hover {
    color: var(--secondary-color);
  }

  p,
  small {
    pointer-events: none;
    margin-right: 10px;
  }

  small {
    font-size: clamp(0.8rem, 5vw, 0.9rem);
  }
`;
