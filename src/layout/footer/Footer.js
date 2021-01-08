import React from "react"
import styled from "styled-components"
import Container from "../container/Container"
import Author from "./Author"
import Copyrights from "./Copyrights"
import FooterLinks from "./FooterLinks"

const StyledFooter = styled.footer`
  padding: 0.5rem 0;
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.footerTextColor};
  @media (max-width: 1069px) {
    padding: 0 1rem;
  }
`
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledWrapper>
          <Copyrights />
          <FooterLinks />
          <Author />
        </StyledWrapper>
      </Container>
    </StyledFooter>
  )
}
