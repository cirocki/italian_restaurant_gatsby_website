import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

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
      <StyledLink href="mailto:info@mondello.it.com">
        <StyledIcon icon={faEnvelope} />
        info@mondello.it.com
      </StyledLink>
    </div>
  )
}
