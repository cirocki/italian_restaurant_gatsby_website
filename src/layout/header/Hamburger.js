import React from "react"
import styled from "styled-components"
import "./Hamburger.css"

const StyledHamburgerButton = styled.button`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`

export default function Hamburger({ toggleMenu, isOpen }) {
  return (
    <StyledHamburgerButton
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
      onClick={toggleMenu}
      className={`hamburger hamburger--spin js-hamburger ${
        isOpen ? "is-active" : ""
      }`}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </StyledHamburgerButton>
  )
}
