import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
  color: ${props => props.theme.colors.grey};
  font-size: 1.125rem;
  line-height: 1.7;
`

export default function MainParagraph({ children }) {
  return <StyledParagraph>{children}</StyledParagraph>
}
