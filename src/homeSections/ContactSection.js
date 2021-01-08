import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { fadeFooter } from "../components/animations/Animation"
import Container from "../layout/container/Container"
import Address from "../components/contactParts/Address"
import Socials from "../components/contactParts/Socials"
import Phone from "../components/contactParts/Phone"
import Email from "../components/contactParts/Email"
import FastLinks from "../components/contactParts/FastLinks"
import OpenHours from "../components/contactParts/OpenHours"
import NewsletterForm from "../components/contactParts/NewsletterForm"

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
  color: ${props => props.theme.colors.white};
  font-size: 1.125rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`

export default function ContactSection() {
  // GSAP
  let startRef = useRef(null)
  const contactRefs = useRef([])
  contactRefs.current = []

  const addToRefs = el => {
    if (el && !contactRefs.current.includes(el)) {
      contactRefs.current.push(el)
    }
  }

  useEffect(() => {
    fadeFooter(contactRefs.current, startRef.current)
  }, [])

  return (
    <StyledSection ref={startRef}>
      <Container>
        <StyledGrid>
          <StyledContactDetails ref={addToRefs}>
            <StyledTitle>Contact</StyledTitle>
            <address>
              <Address />
              <Socials />
              <Phone />
              <Email />
            </address>
          </StyledContactDetails>
          <StyledLinks ref={addToRefs}>
            <StyledTitle>Links</StyledTitle>
            <FastLinks />
          </StyledLinks>
          <StyledHours ref={addToRefs}>
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
