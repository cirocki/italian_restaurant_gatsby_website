import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

const StyledWrapper = styled.div`
  padding: 1rem 0;
  @media (max-width: 840px) {
    display: none;
  }
`
const StyledLink = styled(GatsbyLink)`
  color: ${props => props.theme.colors.footerTextColor};
  padding: 1rem;
`

export default function FooterLinks() {
  return (
    <StyledWrapper>
      <StyledLink to="/privacy">Privacy Policy</StyledLink>
      <StyledLink to="/termsofuse">Terms of Use</StyledLink>
    </StyledWrapper>
  )
}
