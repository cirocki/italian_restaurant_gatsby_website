import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { navItemsData } from "../../data/navItems"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const StyledNavWrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    height: 0;
    width: 100%;
    background: ${props => props.theme.colors.light};
    position: relative;
    @media (min-width: 520px) and (max-width: 1024px) {
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        top: 0;
        width: 50%;
        height: 100%;
        background: ${props => props.theme.colors.white};
        z-index: 0;
      }
    }
  }
`

const StyledList = styled.ul`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2rem 0;
  }
`

const StyledItem = styled.li`
  margin: 0 1.5rem;
  @media (max-width: 1024px) {
    visibility: hidden;
    opacity: 0;
  }
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

const StyledLink = styled(AniLink)`
  display: block;
  padding: 1rem;
  color: ${props => props.theme.colors.dark};
  font-size: 1.125rem;
  transition: color 0.2s ease 0s;
  &:hover {
    color: ${props => props.theme.colors.gold};
  }
  @media (max-width: 1024px) {
    padding: 0.5rem 0;
    font-size: 1.25rem;
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

  const menuRefs = useRef([])
  menuRefs.current = []

  const addToRefs = el => {
    if (el && !menuRefs.current.includes(el)) {
      menuRefs.current.push(el)
    }
  }

  useEffect(() => {
    menuTL
      .set(wrapperLayer.current, { clearProps: "all" })
      .set(menuRefs.current, { clearProps: "all" })
      .to(wrapperLayer.current, { height: "auto", duration: 0.5 })
      .to(menuRefs.current, {
        autoAlpha: 1,
        x: 20,
        stagger: 0.1,
      })
      .reverse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    menuTL.reversed(!isOpen)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <StyledNavWrapper ref={wrapperLayer}>
      <StyledList ref={itemsLayer}>
        {navItemsData.map(item => (
          <StyledItem key={item.name} ref={addToRefs}>
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
      </StyledList>
    </StyledNavWrapper>
  )
}
