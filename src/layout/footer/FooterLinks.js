import React from "react"
// import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Link from "gatsby-plugin-transition-link"

const StyledWrapper = styled.div`
  padding: 1rem 0;
  @media (max-width: 840px) {
    display: none;
  }
`
const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.footerTextColor};
  padding: 1rem;
`

export default function FooterLinks() {
  return (
    <StyledWrapper>
      <AniLink to="/about" cover direction="right" duration={1} bg="#968b63">
        Go to page 2 with a cover right
      </AniLink>
      <StyledLink to="/privacy">Privacy Policy</StyledLink>
      <StyledLink to="/termsofuse">Terms of Use</StyledLink>
    </StyledWrapper>
  )
}
