import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faPinterestSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

const StyledSocialsDiv = styled.div`
  padding-top: 1.5rem;
`
const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin-right: 0.75rem;
`
const StyledLink = styled.a`
  color: ${props => props.theme.colors.grey};
  line-height: 2;
  transition: color 0.2s ease 0s;
  &:hover {
    color: ${props => props.theme.colors.gold};
  }
`

export default function Socials() {
  return (
    <StyledSocialsDiv>
      <StyledLink href="https://www.facebook.com/cirockipl/">
        <StyledIcon icon={faFacebookSquare} />
      </StyledLink>
      <StyledLink href="https://www.linkedin.com/in/cirocki/">
        <StyledIcon icon={faTwitterSquare} />
      </StyledLink>
      <StyledLink href="https://www.behance.net/cirocki/">
        <StyledIcon icon={faPinterestSquare} />
      </StyledLink>
    </StyledSocialsDiv>
  )
}
