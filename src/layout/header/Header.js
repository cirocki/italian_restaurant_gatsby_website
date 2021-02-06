import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Container from "../container/Container"
import Branding from "./Branding"
import Hamburger from "./Hamburger"
import NavLinks from "./NavLinks"

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.white};
  border-bottom: 2px solid ${props => props.theme.colors.light};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
`
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  align-items: center;
  @media (max-width: 1024px) {
    align-items: flex-start;
    flex-direction: column;
  }
`
const StyledBrandingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1069px) {
    padding: 0 20px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`

export default function Header() {
  // REGISTER GSAP SCROLLTRIGGER
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }
  })

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <StyledBrandingWrapper>
            <Branding />
            <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
          </StyledBrandingWrapper>
          <NavLinks isOpen={isOpen} toggleMenu={toggleMenu} />
        </StyledNav>
      </Container>
    </StyledHeader>
  )
}
