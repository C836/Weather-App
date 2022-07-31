import styled from "styled-components";

export const History = styled.table`
  margin-top: 40px;
`;

export const Row = styled.tr`
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: clamp(0.75rem, 3.5vw, 1rem);

  b {
    font-size: clamp(0.75rem, 3.5vw, 1.25rem);
  }
`;

export const Column = styled.td`
  padding: 0 1.5vw;
`;

export const Description = styled(Column)`
  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const Bar = styled(Column)`
  width: 120px;
  max-width: 15vw;
  padding: 0;

  position: relative;

  ::after {
    content: '';
    width: 100%;
    height: 4px;

    position: absolute;

    background: linear-gradient(
      90deg,
      rgba(181, 197, 155, 1) 0%,
      rgba(181, 159, 122, 1) 100%
    );
  }
`;
