import styled from 'styled-components'

export const Input = styled.input<{active_list: boolean}>`
  width: 100%;
  padding: 3%;

  background-color: white;
  opacity: 75%;
  border-radius: 10px;
  outline: none;

  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1rem, 5vw, 1.25rem);
  color: #6AA2D1;

  border-bottom-left-radius: ${props => props.active_list && 0};
  border-bottom-right-radius: ${props => props.active_list && 0};
`