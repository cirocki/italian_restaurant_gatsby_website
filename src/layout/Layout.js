import React from "react"
import Theme from "../styles/Theme"
import "./../styles/reset.css"
import "./../styles/fonts.css"
import GlobalStyle from "../styles/GlobalStyle"

import Header from "./header/Header"
import Footer from "./footer/Footer"

export default function Layout({ children }) {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </Theme>
    </>
  )
}
