import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import { animateScroll as scroll } from "react-scroll"

const StyledWrapper = styled.div`
  padding: 1rem 0;
`
const StyledLink = styled(GatsbyLink)`
  color: ${props => props.theme.colors.footerTextColor};
  padding: 1rem;
`

export default function FooterLinks() {
  return (
    <StyledWrapper>
      <button onClick={() => scroll.scrollTo(0)}>top</button>
      <StyledLink to="/privacy">Privacy Policy</StyledLink>
      <StyledLink to="/termsofuse">Terms of Use</StyledLink>
    </StyledWrapper>
  )
}
