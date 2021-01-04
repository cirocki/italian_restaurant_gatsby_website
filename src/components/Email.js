import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
  color: ${props => props.theme.colors.grey};
  line-height: 1.8;
  transition: color 0.2s ease 0s;
  &:hover {
    color: ${props => props.theme.colors.gold};
  }
`

export default function Email() {
  return (
    <div>
      <StyledLink href="mailto:info@mondenello.it.com">
        info@mondenello.it.com
      </StyledLink>
    </div>
  )
}
