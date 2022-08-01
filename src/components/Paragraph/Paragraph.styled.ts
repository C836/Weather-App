import styled from "styled-components";

interface ParagraphConfig {
  size?: string;
  align?: string;
  lineHeight?: string;
}

export const Paragraph = styled.p<ParagraphConfig>`
  font-family: "Montserrat", sans-serif;
  color: white;

  font-size: ${(props) => props.size || "1rem"};
  text-align: ${(props) => props.align || "left"};
  line-height: ${(props) => props.lineHeight || 1};
`;
