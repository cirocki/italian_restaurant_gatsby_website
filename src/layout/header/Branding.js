import React from "react"
import logoImage from "../../img/branding/Mondello Restaurant logo.svg"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

const StyledLogoWrapper = styled.div`
  width: 10rem;
  padding: 1rem 0;
  z-index: 9999;
  @media (max-width: 399px) {
    width: 9rem;
  }
`

export default function Branding() {
  return (
    <StyledLogoWrapper>
      <GatsbyLink to="/">
        <img src={logoImage} alt="Mondello Restaurant logo"></img>
      </GatsbyLink>
    </StyledLogoWrapper>
  )
}
