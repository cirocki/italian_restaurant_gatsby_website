import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  display: block;
  overflow: hidden;
  align-self: flex-end;
  margin-top: 0.5rem;
  padding: 1rem 2rem;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 400;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  z-index: 1;
  position: relative;
  width: 100%;
  background: ${props => props.theme.colors.gold};
  color: ${props => props.theme.colors.white};
  transition: all 0.2s ease 0s;
  &:hover {
    background: ${props => props.theme.colors.dark};
  }
`

export default function SubmitButton({ children }) {
  return <StyledButton type="submit">{children}</StyledButton>
}
