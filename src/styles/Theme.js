import { ThemeProvider } from "styled-components"
import React from "react"

const theme = {
  colors: {
    dark: "#16191a",
    red: "#b52d2d",
    green: "#208135",
    light: "#f2f2f2",
    white: "#fff",
    grey: "#828282",
  },
  fonts: {
    primary: `"Jost", sans-serif`,
    secondary: `"Playfair Display", serif`,
  },
  maxWidth: {
    xs: "479px",
    s: "768px",
    m: "1024px",
    l: "1200px",
    xl: "1799px",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
