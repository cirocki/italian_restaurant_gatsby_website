import React from "react"
import styled from "styled-components"
import Container from "../layout/container/Container"
import wineBg from "../img/index/wine-bg.jpg"
import MainParagraph from "../components/MainParagraph"

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
`
const StyledTitleWrapper = styled.div`
  grid-column: 1/6;
  grid-row: 1/4;
  padding: 120px;
  text-align: center;
  /* background: red; */
`
const StyledContentWrapper = styled.div`
  grid-column: 6/13;
  grid-row: 1/4;
  padding: 120px;
`
const StyledTitleText = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 100px;
  position: relative;
  &:before {
    content: "Our";
    position: absolute;
    top: -3rem;
    left: -2rem;
    z-index: -1;
    font-size: 60px;
    color: ${props => props.theme.colors.gold};
  }
`

const StyledImgDiv = styled.div`
  background: red;
  background: url(${wineBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  /* background-attachment: fixed; */
  min-height: 480px;
`

export default function WineSection() {
  return (
    <section>
      <Container>
        <StyledGrid>
          <StyledTitleWrapper>
            <StyledTitleText>Wines</StyledTitleText>
          </StyledTitleWrapper>
          <StyledContentWrapper>
            <MainParagraph>
              We are Sicilians that love the own land so we decided to create
              our special wine describing local dishes prepared by Sicilian
              chefs. Taste our self-grown wines, a highlight for wine lovers. We
              provide fresh, quality grapes for delicious wine to help you enjoy
              the flavours of this wonderful island.
            </MainParagraph>
          </StyledContentWrapper>
        </StyledGrid>
      </Container>
      <StyledImgDiv></StyledImgDiv>
    </section>
  )
}
