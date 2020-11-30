import React from "react"
import styled from "styled-components"
import Container from "../container/Container"
const StyledHeader = styled.header`
  padding: 1rem;
  background: ${props => props.theme.colors.light};
`

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <h1>Header</h1>
      </Container>
    </StyledHeader>
  )
}
