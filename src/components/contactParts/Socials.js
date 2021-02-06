import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagramSquare,
  faPinterestSquare,
} from "@fortawesome/free-brands-svg-icons"

const StyledSocialsDiv = styled.div`
  padding-top: 1.25rem;
`
const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${props => (props.mysize === "lg" ? "1.75rem" : "1.5rem")};
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

export default function Socials({ mysize }) {
  return (
    <StyledSocialsDiv>
      <StyledLink
        href="https://www.facebook.com/cirockipl/"
        aria-label="Facebook"
      >
        <StyledIcon icon={faFacebookSquare} mysize={mysize} />
      </StyledLink>
      <StyledLink
        href="https://www.linkedin.com/in/cirocki/"
        aria-label="LinkedIn"
      >
        <StyledIcon icon={faInstagramSquare} mysize={mysize} />
      </StyledLink>
      <StyledLink
        href="https://www.behance.net/cirocki/"
        aria-label="Pinterest"
      >
        <StyledIcon icon={faPinterestSquare} mysize={mysize} />
      </StyledLink>
    </StyledSocialsDiv>
  )
}
