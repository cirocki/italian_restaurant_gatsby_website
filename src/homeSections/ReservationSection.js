import React from "react"
import styled from "styled-components"
import Container from "../layout/container/Container"
import PrimaryHeading from "../components/PrimaryHeading"
import SecondaryHeading from "../components/SecondaryHeading"
import ButtonGhost from "../components/ButtonGhost"
import MainParagraph from "../components/MainParagraph"

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
  min-height: 480px;
`
const StyledHeaderWrapper = styled.div`
  grid-column: 5/9;
  grid-row: 1/4;
  padding: 120px;
  text-align: center;
  background: ${props => props.theme.colors.dark};
  margin-top: -120px;
  max-height: 480px;
`
const StyledGreyDiv = styled.div`
  grid-column: 3/7;
  grid-row: 1/5;
  z-index: -1;
  background: ${props => props.theme.colors.light};
`
const StyledMoreWrapper = styled.div`
  grid-column: 10/13;
  grid-row: 2/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function ReservationSection() {
  return (
    <section>
      <Container>
        <StyledGrid>
          <StyledHeaderWrapper>
            <SecondaryHeading>Reservation</SecondaryHeading>
            <PrimaryHeading>
              Try our perfect food. Book a table online.
            </PrimaryHeading>
            <ButtonGhost>Reserve a table</ButtonGhost>
          </StyledHeaderWrapper>
          <StyledGreyDiv></StyledGreyDiv>
          <StyledMoreWrapper>
            <MainParagraph>
              You can also call to make a reservation.
            </MainParagraph>
            <h1>+1 737 6787 164</h1>
          </StyledMoreWrapper>
        </StyledGrid>
      </Container>
    </section>
  )
}
