import React from "react"
import styled from "styled-components"

import Container from "../layout/container/Container"

import heroBg from "../img/index/mondello-hero-image.jpg"

const StyledSection = styled.section`
  min-height: 90vh;
  background: ${props => props.theme.colors.dark};
  background: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledHeaderWrapper = styled.div`
  padding: 4rem 0;
  text-align: center;
`
const StyledHeading = styled.h1`
  padding-bottom: 40px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 100px;
  text-transform: uppercase;
`
const StyledSubheading = styled.h1`
  color: ${props => props.theme.colors.gold};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 2rem;
  font-style: italic;
`

export default function HeroSection() {
  return (
    <StyledSection>
      <Container>
        <StyledHeaderWrapper>
          <StyledHeading>Mondello</StyledHeading>
          <StyledSubheading>Explore the real taste of Italy!</StyledSubheading>
        </StyledHeaderWrapper>
      </Container>
    </StyledSection>
  )
}
