import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
  }
  body {
    color: ${props => props.theme.colors.grey};
    background: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.primary};
    position: relative;
    min-height: 100%;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }

  /* KEEP FOOTER BOTTOM EVEN IF MAIN CONTENT IS SHORT  */
  #gatsby-focus-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1
  }
 
`
export default GlobalStyle
