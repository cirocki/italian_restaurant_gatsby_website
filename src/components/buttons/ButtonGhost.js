import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

const StyledButton = styled(GatsbyLink)`
  display: block;
  overflow: hidden;
  margin-top: 2rem;
  padding: 0.625rem 2rem;
  align-self: ${props => (props.right ? "flex-end" : "flex-start")};
  font-size: 0.875rem;
  font-weight: 400;
  color: ${props => props.theme.colors.gold};
  border: 2px solid ${props => props.theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  z-index: 1;
  position: relative;
  &:hover {
    color: ${props => props.theme.colors.dark};
    &:after {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      transition: all 0.35s;
    }
  }
  &:after {
    background: ${props => props.theme.colors.gold};
    content: "";
    display: block;
    position: absolute;
    left: -100%;
    right: 100%;
    top: 0;
    bottom: 0;
    z-index: -1;
    transition: all 0.35s;
  }
`

export default function ButtonGhost({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>
}

// INTERNAL AND EXTERNAL LINK
// <ButtonGhost as="a" href="https://cirocki.pl">external</ButtonGhost>
// <ButtonGhost to="/about">internal</ButtonGhost>
