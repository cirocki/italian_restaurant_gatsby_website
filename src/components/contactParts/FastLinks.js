import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { footerLinksData } from "../../data/footerLinks"

const StyledItem = styled.li`
  padding-bottom: 0.625rem;
`

const StyledLink = styled(AniLink)`
  color: ${props => props.theme.colors.grey};
  font-size: 1rem;
  line-height: 1.8;
  transition: color 0.2s ease 0s;
  &:hover {
    color: ${props => props.theme.colors.gold};
  }
  @media (max-width: 1068px) {
    padding: 1rem 0;
  }
`

export default function FastLinks() {
  return (
    <nav>
      <ul>
        {footerLinksData.map(item => (
          <StyledItem key={item.name}>
            <StyledLink
              to={item.path}
              cover
              direction="right"
              duration={1}
              bg="#968b63"
            >
              {item.name}
            </StyledLink>
          </StyledItem>
        ))}
      </ul>
    </nav>
  )
}
