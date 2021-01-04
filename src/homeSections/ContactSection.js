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
`
const StyledContactDetails = styled.div`
  grid-column: 2/5;
  padding: 120px 0;
`
const StyledLinks = styled.div`
  grid-column: 6/8;
  padding: 120px 0;
`
const StyledHours = styled.div`
  grid-column: 9/12;
  padding: 120px 0;
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
