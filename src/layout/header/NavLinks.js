import React, { useRef, useState, useEffect } from "react"
import { Link as GatsbyLink } from "gatsby"
import { navItemsData } from "../../data/navItems"
import styled from "styled-components"
import { gsap } from "gsap"

const StyledNavWrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    height: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const StyledList = styled.ul`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    visibility: hidden;
    opacity: 0;
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
  @media (max-width: 1200px) {
    margin: 0.5rem;
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

export default function NavLinks({ toggleMenu, isOpen }) {
  // GSAP
  let itemsLayer = useRef(null)
  let wrapperLayer = useRef(null)

  // Setup a timeline to use
  const [menuTL] = useState(
    gsap.timeline({
      paused: true,
      defaults: { ease: "power4.out" },
    })
  )

  useEffect(() => {
    menuTL
      .set(wrapperLayer.current, { clearProps: "all" })
      .set(itemsLayer.current, { clearProps: "all" })
      .to(wrapperLayer.current, { height: "auto", duration: 0.5 })
      .to(itemsLayer.current, { autoAlpha: 1 })
      .reverse()
  }, [])

  useEffect(() => {
    menuTL.reversed(!isOpen)
  }, [isOpen])

  return (
    <StyledNavWrapper ref={wrapperLayer}>
      <StyledList ref={itemsLayer}>
        {navItemsData.map(item => (
          <StyledItem key={item.name}>
            <StyledLink to={item.path}>{item.name}</StyledLink>
          </StyledItem>
        ))}
      </StyledList>
    </StyledNavWrapper>
  )
}
