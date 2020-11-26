import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 1rem;
  background: ${props => props.theme.colors.light};
`
export default function Footer() {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  )
}
