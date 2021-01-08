import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { fadeBottom, jumpBox } from "../components/animations/Animation"
import Container from "../layout/container/Container"
import MainParagraph from "../components/typography/MainParagraph"
import ModernHeading from "../components/typography/ModernHeading"
import OldSchoolHeading from "../components/typography/OldSchoolHeading"
import ButtonGhost from "../components/buttons/ButtonGhost"

const StyledGridWrapper = styled.div`
  @media (max-width: 1069px) {
    display: flex;
    justify-content: center;
  }
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
  @media (max-width: 1069px) {
    display: flex;
    flex-direction: column;
    max-width: 480px;
  }
`
const StyledHeaderWrapper = styled.div`
  grid-column: 5/9;
  grid-row: 1/4;
  padding: 120px;
  text-align: center;
  background: ${props => props.theme.colors.dark};
  margin-top: -120px;
  @media (max-width: 1439px) {
    grid-column: 2/7;
  }
  @media (max-width: 1279px) {
    padding: 80px;
  }
  @media (max-width: 1069px) {
    padding: 120px;
  }
  @media (max-width: 480px) {
    padding: 80px;
  }
  @media (max-width: 360px) {
    padding: 60px;
  }
`
const StyledGreyDiv = styled.div`
  grid-column: 3/7;
  grid-row: 1/5;
  background: ${props => props.theme.colors.light};
  z-index: -1;
  @media (max-width: 1439px) {
    grid-column: 3/8;
  }
`
const StyledMoreWrapper = styled.div`
  grid-column: 10/13;
  grid-row: 2/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1439px) {
    grid-column: 9/13;
  }
  @media (max-width: 1069px) {
    padding: 80px;
  }
  @media (max-width: 480px) {
    padding: 40px;
  }
`
const StyledPhone = styled.a`
  padding-top: 1rem;
  color: ${props => props.theme.colors.gold};
  font-size: 1.5rem;
`
const StyledButtonDiv = styled.div`
  padding-top: 50px;
`

export default function ReservationSection() {
  // GSAP
  let headerRef = useRef(null)
  let contentRef = useRef(null)

  useEffect(() => {
    jumpBox(headerRef.current, headerRef.current)
    fadeBottom(contentRef.current, headerRef.current)
  }, [])

  return (
    <section>
      <Container>
        <StyledGridWrapper>
          <StyledGrid>
            <StyledHeaderWrapper ref={headerRef}>
              <ModernHeading>Reservation</ModernHeading>
              <OldSchoolHeading whiteColor>
                Try our new flavours. Book a table online.
              </OldSchoolHeading>
              <StyledButtonDiv>
                <ButtonGhost to="/reservation">Make reservation</ButtonGhost>
              </StyledButtonDiv>
            </StyledHeaderWrapper>
            <StyledGreyDiv></StyledGreyDiv>
            <StyledMoreWrapper ref={contentRef}>
              <MainParagraph>
                You can also call to make a reservation.
              </MainParagraph>
              <StyledPhone href="tel:7376787164">+1 737 6787 164</StyledPhone>
            </StyledMoreWrapper>
          </StyledGrid>
        </StyledGridWrapper>
      </Container>
    </section>
  )
}
