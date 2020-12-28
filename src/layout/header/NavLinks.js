import React, { useRef, useState, useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"
import { navItemsData } from "../../data/navItems"
import styled from "styled-components"

const StyledList = styled.ul`
  display: flex;
  @media (max-width: 1068px) {
    flex-direction: column;
  }
`

const StyledItem = styled.li`
  margin: 0 1.5rem;
  &:last-of-type {
    margin-right: 0;
  }
  &:last-of-type > a {
    padding-right: 0;
  }
  @media (max-width: 1068px) {
    margin: 0.5rem 0;
  }
`

const StyledLink = styled(GatsbyLink)`
  display: block;
  padding: 1rem;
  color: ${props => props.theme.colors.dark};
  font-size: 1.125rem;
  @media (max-width: 1068px) {
    padding: 1rem;
  }
`

export default function NavLinks() {
  return (
    <div>
      <StyledList>
        {navItemsData.map(item => (
          <StyledItem key={item.name}>
            <StyledLink to={item.path}>{item.name}</StyledLink>
          </StyledItem>
        ))}
      </StyledList>
    </div>
  )
}
