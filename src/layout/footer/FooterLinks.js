import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const StyledWrapper = styled.div`
  padding: 1rem 0;
  @media (max-width: 1024px) {
    display: none;
  }
`
const StyledLink = styled(AniLink)`
  color: ${props => props.theme.colors.footerTextColor};
  padding: 1rem;
`

export default function FooterLinks() {
  return (
    <StyledWrapper>
      <StyledLink
        to="/privacy"
        cover
        direction="right"
        duration={1}
        bg="#968b63"
      >
        Privacy Policy
      </StyledLink>
      <StyledLink
        to="/privacy"
        cover
        direction="right"
        duration={1}
        bg="#968b63"
      >
        Terms of Use
      </StyledLink>
    </StyledWrapper>
  )
}
