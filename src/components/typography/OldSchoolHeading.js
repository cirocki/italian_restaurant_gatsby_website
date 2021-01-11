import React from "react"
import styled from "styled-components"

const StyledHeading = styled.h3`
  color: ${props =>
    props.whiteColor ? props.theme.colors.white : props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1.5rem;
  line-height: 1.7;
  @media (max-width: 499px) {
    font-size: 1.25rem;
  }
  @media (max-width: 374px) {
    font-size: 1.125rem;
  }
`

export default function OldSchoolHeading({ children, whiteColor }) {
  return <StyledHeading whiteColor={whiteColor}>{children}</StyledHeading>
}
