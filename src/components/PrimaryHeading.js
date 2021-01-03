import React from "react"
import styled from "styled-components"

const StyledHeading = styled.h2`
  color: ${props =>
    props.whiteColor ? props.theme.colors.white : props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1.5rem;
  line-height: 1.7;
  margin-bottom: ${props => (props.margin ? `${props.margin}px` : "0")};
  @media (max-width: 499px) {
    font-size: 1.25rem;
  }
  @media (max-width: 404px) {
    font-size: 1.125rem;
  }
`

export default function PrimaryHeading({ children, margin, whiteColor }) {
  return (
    <StyledHeading whiteColor={whiteColor} margin={margin}>
      {children}
    </StyledHeading>
  )
}
