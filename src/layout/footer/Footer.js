import React from "react"
import styled from "styled-components"
import Container from "../container/Container"
import Author from "./Author"
import Copyrights from "./Copyrights"

const StyledFooter = styled.footer`
  padding: 1rem;
  background: ${props => props.theme.colors.light};
`
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Copyrights />
        <Author />
      </Container>
    </StyledFooter>
  )
}
