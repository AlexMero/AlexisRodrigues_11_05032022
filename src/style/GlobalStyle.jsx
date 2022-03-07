import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
}
body {
  margin: 40px 100px 0 100px;
  position: relative;
}
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
