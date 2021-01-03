import React from "react"
import styled from "styled-components"
import Container from "../layout/container/Container"
import PrimaryHeading from "../components/PrimaryHeading"
import SecondaryHeading from "../components/SecondaryHeading"
import ButtonGhost from "../components/ButtonGhost"
import MainParagraph from "../components/MainParagraph"

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
  z-index: -1;
  background: ${props => props.theme.colors.light};
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
  font-size: 1.5rem;
  color: ${props => props.theme.colors.gold};
`

export default function ReservationSection() {
  return (
    <section>
      <Container>
        <StyledGridWrapper>
          <StyledGrid>
            <StyledHeaderWrapper>
              <SecondaryHeading>Reservation</SecondaryHeading>
              <PrimaryHeading whiteColor margin={80}>
                Try our perfect food. Book a table online.
              </PrimaryHeading>
              <ButtonGhost>Reserve a table</ButtonGhost>
            </StyledHeaderWrapper>
            <StyledGreyDiv></StyledGreyDiv>
            <StyledMoreWrapper>
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
