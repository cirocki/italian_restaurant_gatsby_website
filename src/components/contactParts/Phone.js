import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faPhone } from "@fortawesome/free-solid-svg-icons"

const StyledDiv = styled.div`
  padding: 1rem 0;
`
const StyledLink = styled.a`
  color: ${props => props.theme.colors.grey};
  line-height: 2;
  transition: color 0.2s ease 0s;
  &:hover {
    color: ${props => props.theme.colors.gold};
  }
`
const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

export default function Phone() {
  return (
    <StyledDiv>
      <p>
        <StyledLink href="tel:+486546767">
          <StyledIcon icon={faPhone} />
          (+39) 654-67-67
        </StyledLink>
      </p>
      <p>
        <StyledLink href="tel:+590560560">
          <StyledIcon icon={faMobileAlt} style={{ marginRight: "1rem" }} />
          590-560-560
        </StyledLink>
      </p>
    </StyledDiv>
  )
}
