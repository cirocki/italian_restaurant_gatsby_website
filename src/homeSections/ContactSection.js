import React from "react"
import styled from "styled-components"
import Address from "../components/Address"
import FastLinks from "../components/FastLinks"
import OpenHours from "../components/OpenHours"
import Phone from "../components/Phone"
import Email from "../components/Email"
import Container from "../layout/container/Container"
import Socials from "../components/Socials"
import NewsletterForm from "../components/NewsletterForm"

const StyledSection = styled.section`
  background: ${props => props.theme.colors.dark};
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 120px 0 105px 0;
  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    padding: 80px;
  }
  @media (max-width: 768px) {
    padding: 80px 40px;
  }
  @media (max-width: 569px) {
    padding: 80px 20px;
  }
`
const StyledContactDetails = styled.div`
  grid-column: 2/5;
  @media (max-width: 920px) {
    padding-bottom: 40px;
  }
`
const StyledLinks = styled.div`
  grid-column: 6/8;
  @media (max-width: 1090px) {
    grid-column: 5/7;
  }
  @media (max-width: 920px) {
    padding-bottom: 40px;
  }
`
const StyledHours = styled.div`
  grid-column: 9/12;
  @media (max-width: 1420px) {
    grid-column: 8/12;
  }
  @media (max-width: 1090px) {
    grid-column: 7/12;
  }
`

// TYPOGRAPHY
const StyledTitle = styled.h2`
  padding-bottom: 40px;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.white};
`

export default function ContactSection() {
  return (
    <StyledSection>
      <Container>
        <StyledGrid>
          <StyledContactDetails>
            <StyledTitle>Contact</StyledTitle>
            <address>
              <Address />
              <Socials />
              <Phone />
              <Email />
            </address>
          </StyledContactDetails>
          <StyledLinks>
            <StyledTitle>Links</StyledTitle>
            <FastLinks />
          </StyledLinks>
          <StyledHours>
            <StyledTitle>Open hours</StyledTitle>
            <OpenHours />
            <StyledTitle style={{ marginTop: "70px" }}>Newsletter</StyledTitle>
            <NewsletterForm />
          </StyledHours>
        </StyledGrid>
      </Container>
    </StyledSection>
  )
}
