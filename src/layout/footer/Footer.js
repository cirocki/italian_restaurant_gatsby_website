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
`
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
