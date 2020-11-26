import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding: 1rem;
  background: ${props => props.theme.colors.light};
`

export default function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  )
}
