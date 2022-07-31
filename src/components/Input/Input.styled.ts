import styled from 'styled-components'

export const Input = styled.input<{activeList: boolean}>`
  width: 100%;
  padding: 3%;

  background-color: white;
  opacity: 75%;
  border-radius: 10px;
  outline: none;

  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1rem, 5vw, 1.25rem);
  color: var(--main-color);

  border-bottom-left-radius: ${props => props.activeList ? 0 : "auto"};
  border-bottom-right-radius: ${props => props.activeList ? 0 : "auto"};
`