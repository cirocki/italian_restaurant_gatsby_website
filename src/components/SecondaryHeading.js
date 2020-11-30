import React from "react"
import styled from "styled-components"

const StyledHeading = styled.h1`
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-size: 1.125rem;
  letter-spacing: 2px;
  padding-bottom: 2.5rem;
`

export default function SecondaryHeading({ children }) {
  return <StyledHeading>{children}</StyledHeading>
}
