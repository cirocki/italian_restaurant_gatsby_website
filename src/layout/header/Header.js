import React, { useState } from "react"
import styled from "styled-components"
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
  /* min-height: 78px; */
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
const StyledBrandingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`

export default function Header() {
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
