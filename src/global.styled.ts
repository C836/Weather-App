import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --main-color: #6AA2D1;
    --secondary-color: #D2B3C1;
  }

  body {
    width: 100%;
    height: 100%;
    background-image: url(src/assets/img/background.jpg);
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
`