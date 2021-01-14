import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logoImage from "../../img/branding/Mondello Restaurant logo.svg"
import { globalHistory as history } from "@reach/router"
import { animateScroll as scroll } from "react-scroll"

const StyledLogoWrapper = styled.div`
  width: 10rem;
  padding: 1rem 0;
  z-index: 9999;

  @media (max-width: 419px) {
    width: 9rem;
  }
`

const StyledLogo = styled.img`
  cursor: pointer;
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
        <AniLink to="/" cover direction="right" duration={1} bg="#968b63">
          <img src={logoImage} alt="Mondello Restaurant logo"></img>
        </AniLink>
      )}
    </StyledLogoWrapper>
  )
}
