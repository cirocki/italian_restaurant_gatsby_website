import React from "react"
import styled from "styled-components"

const StyledButton = styled.a`
  margin-top: 2rem;
  padding: 0.625rem 2rem;
  align-self: flex-start;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${props => props.theme.colors.gold};
  border: 2px solid ${props => props.theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
`

export default function ButtonGhost({ children }) {
  return <StyledButton>{children}</StyledButton>
}
