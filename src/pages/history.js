import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Container from "../layout/container/Container"

import ModernHeading from "../components/typography/ModernHeading"
import OldSchoolHeading from "../components/typography/OldSchoolHeading"

const StyledMainDiv = styled.main`
  margin-top: 60px;
`
// HEADER
const StyledHeader = styled.header`
  background: ${props => props.theme.colors.dark};
`
const StyledHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
`
const StyledHeadingsWrapper = styled.div`
  min-height: 240px;
  grid-column: 3/8;
  grid-row: 2/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

// TOP
const StyledTopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
`
const StyledTopYearsDiv = styled.div`
  grid-column: 5/13;
  grid-row: 5/9;
  background: black;
`
const StyledTopImgDiv = styled.div`
  min-height: 720px;
  grid-column: 1/5;
  grid-row: 1/7;
  background: pink;
`
const StyledTopContentDiv = styled.div`
  grid-column: 5/13;
  grid-row: 1/5;
  background: cyan;
`

export default function HistoryPage() {
  return (
    <Layout>
      <Helmet>
        <title>Our History | Mondello Restaurant</title>
      </Helmet>
      <StyledMainDiv>
        <StyledHeader>
          <Container>
            <StyledHeaderGrid>
              <StyledHeadingsWrapper>
                <ModernHeading>Our History</ModernHeading>
                <OldSchoolHeading whiteColor>
                  Since 1975, we build the brand of our restaurant around the
                  idea of authentic traditional Italian food.
                </OldSchoolHeading>
              </StyledHeadingsWrapper>
            </StyledHeaderGrid>
          </Container>
        </StyledHeader>
        <Container>
          <StyledTopGrid>
            <StyledTopImgDiv>iamge</StyledTopImgDiv>
            <StyledTopContentDiv>content</StyledTopContentDiv>
            <StyledTopYearsDiv>years</StyledTopYearsDiv>
          </StyledTopGrid>
        </Container>
      </StyledMainDiv>
    </Layout>
  )
}
