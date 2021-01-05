import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import Container from "../layout/container/Container"
import heroBg from "../img/index/mondello-hero-image4.jpg"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  max-height: 1040px;
  background: ${props => props.theme.colors.dark};
  background: url(${heroBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: -120px;
    left: 50%;
    width: 2px;
    height: 240px;
    background: ${props => props.theme.colors.gold};
    @media (max-width: 768px) {
      bottom: -60px;
      height: 120px;
    }
  }
`
const StyledHeaderWrapper = styled.div`
  padding: 4rem 0;
  text-align: center;
`
const StyledHeading = styled.h1`
  padding-bottom: 40px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 6rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 5rem;
  }
  @media (max-width: 489px) {
    font-size: 3.75rem;
    padding-bottom: 20px;
  }
  @media (max-width: 374px) {
    font-size: 3rem;
  }
`
const StyledSubheading = styled.h2`
  color: ${props => props.theme.colors.gold};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 2rem;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  @media (max-width: 489px) {
    font-size: 1.5rem;
  }
  @media (max-width: 374px) {
    font-size: 1.25rem;
  }
`

export default function HeroSection() {
  // GSAP
  let headingRef = useRef(null)
  let subheadingRef = useRef(null)
  let headerRef = useRef(null)
  const [heroTL] = useState(
    gsap.timeline({
      delay: 0.5,
      defaults: {
        autoAlpha: 0,
      },
    })
  )

  useEffect(() => {
    heroTL
      .from(headingRef.current, {
        y: -100,
        ease: "power1.inOut",
        duration: 0.5,
      })
      .from(subheadingRef.current, {
        y: 50,
        ease: "power4.inOut",
        duration: 1,
      })
  }, [])

  useEffect(() => {
    gsap.to(headerRef.current, {
      autoAlpha: 0,
      y: -100,
      ease: "sine.out",
      pin: true,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "bottom 40%",
        end: "+=40%",
        scrub: true,
      },
    })
  }, [])

  return (
    <StyledSection>
      <Container>
        <StyledHeaderWrapper ref={headerRef}>
          <StyledHeading ref={headingRef}>Mondello</StyledHeading>
          <StyledSubheading ref={subheadingRef}>
            Explore the real taste of Italy!
          </StyledSubheading>
        </StyledHeaderWrapper>
      </Container>
    </StyledSection>
  )
}
