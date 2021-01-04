import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import { footerLinksData } from "../data/footerLinks"

const StyledItem = styled.li`
  padding-bottom: 0.625rem;
`

const StyledLink = styled(GatsbyLink)`
  line-height: 1.8;
  color: ${props => props.theme.colors.grey};
  font-size: 1rem;
  transition: color 0.2s ease 0s;
  &:hover {
    color: ${props => props.theme.colors.gold};
  }
  @media (max-width: 1068px) {
    padding: 1rem;
  }
`

export default function FastLinks() {
  return (
    <nav>
      <ul>
        {footerLinksData.map(item => (
          <StyledItem key={item.name}>
            <StyledLink to={item.path}>{item.name}</StyledLink>
          </StyledItem>
        ))}
        <li></li>
      </ul>
    </nav>
  )
}
