import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const handleAlignment = align => {
  switch (align) {
    case "right":
      return "flex-end"
    case "center":
      return "center"
    default:
      return "flex-start"
  }
}

const StyledButton = styled(AniLink)`
  display: block;
  overflow: hidden;
  margin-top: 2rem;
  padding: 0.625rem 2rem;
  align-self: ${props => handleAlignment(props.align)};
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
  return (
    <StyledButton {...rest} cover direction="right" duration={1} bg="#968b63">
      {children}
    </StyledButton>
  )
}

// INTERNAL AND EXTERNAL LINK
// <ButtonGhost as="a" href="https://cirocki.pl">external</ButtonGhost>
// <ButtonGhost to="/about">internal</ButtonGhost>
