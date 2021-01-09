import React from "react"
import styled from "styled-components"

const StyledHeading = styled.h2`
  color: ${props => props.theme.colors.gold};
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 1px;
  padding-bottom: 1.5rem;
`

export default function ModernHeading({ children }) {
  return <StyledHeading>{children}</StyledHeading>
}
