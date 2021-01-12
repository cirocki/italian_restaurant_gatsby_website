import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import logoImage from "../../img/branding/Mondello Restaurant logo.svg"
import { globalHistory as history } from "@reach/router"
import { animateScroll as scroll } from "react-scroll"

const StyledLogoWrapper = styled.div`
  padding: 1rem 0;
  z-index: 9999;
`

const StyledLogo = styled.img`
  width: 10rem;
  cursor: pointer;
  @media (max-width: 419px) {
    width: 9rem;
  }
`

export default function Branding() {
  const { location } = history
  const path = location.pathname
  return (
    <StyledLogoWrapper>
      {path === "/" ? (
        <StyledLogo
          src={logoImage}
          alt="Mondello Restaurant logo"
          onClick={() => scroll.scrollTo(0)}
        ></StyledLogo>
      ) : (
        <GatsbyLink to="/">
          <img src={logoImage} alt="Mondello Restaurant logo"></img>
        </GatsbyLink>
      )}
    </StyledLogoWrapper>
  )
}
