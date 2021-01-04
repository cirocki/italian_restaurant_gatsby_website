import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  padding: 1rem 0;
`
const StyledLink = styled.a`
  color: ${props => props.theme.colors.grey};
  line-height: 1.8;
  transition: color 0.2s ease 0s;
  &:hover {
    color: ${props => props.theme.colors.gold};
  }
`

export default function Phone() {
  return (
    <StyledDiv>
      <p>
        <StyledLink href="tel:+590560560">590-560-560</StyledLink>
      </p>
      <p>
        <StyledLink href="tel:+486546767">(+39) 654-67-67</StyledLink>
      </p>
    </StyledDiv>
  )
}
