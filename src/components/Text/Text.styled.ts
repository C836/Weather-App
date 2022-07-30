import styled from "styled-components";

export const Headline = styled.h1`
  width: 100%;

  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1rem, 6.7vw, 2.8rem);
  text-align: center;
  color: white;
`

export const Paragraph = styled.p<{size?: number, align?: string}>`
  font-family: 'Montserrat', sans-serif;
  color: white;

  font-size: ${props => props.size || "1rem"};
  text-align: ${props => props.align || "left"};;
`