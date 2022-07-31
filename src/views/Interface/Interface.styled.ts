import styled from "styled-components";

export const Interface = styled.div``;

export const LanguageSelector = styled.div`
  padding-bottom: 20px;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Languages = styled.div`
  padding-bottom: 12px;

  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const ScaleSelector = styled.div`
  position: absolute;
  top: 2.5vh;
  right: 3vw;

  display: flex;
  align-items: center;

  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  color: white;
`;
