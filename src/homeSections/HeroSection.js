import React from "react"
import styled from "styled-components"

import Container from "../layout/container/Container"

import heroBg from "../img/index/mondello-hero-image.jpg"

const StyledSection = styled.section`
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  max-height: 1040px;
  background: ${props => props.theme.colors.dark};
  background: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: -120px;
    left: 50%;
    width: 2px;
    height: 240px;
    background: ${props => props.theme.colors.gold};
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
