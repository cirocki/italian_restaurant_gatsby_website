import React from "react"
import styled from "styled-components"
import MainParagraph from "../components/MainParagraph"
import SecondaryHeading from "../components/SecondaryHeading"
import Container from "../layout/container/Container"
import Lines from "../layout/container/Lines"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// FULL WIDTH SECTION
const StyledSection = styled.section`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 120px;
    bottom: 120px;
    width: 50%;
    background: ${props => props.theme.colors.dark};
  }
  &:after {
    content: "";
    position: absolute;
    top: 240px;
    left: 50%;
    bottom: 0;
    width: 50%;
    background: ${props => props.theme.colors.light};
  }
`
// MAIN GRID
const StyledMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, minmax(120px, auto));
`
const StyledGreyDiv = styled.div`
  grid-column: 1/13;
  grid-row: 3/6;
  z-index: 2;
  background: ${props => props.theme.colors.light};
`
const StyledContentDiv = styled.div`
  grid-column: 1/8;
  grid-row: 2/5;
  z-index: 3;
  background: ${props => props.theme.colors.dark};
`
const StyledImageDiv = styled.div`
  grid-column: 8/12;
  grid-row: 1/6;
  z-index: 4;
`

const StyledContentWrapper = styled.div`
  padding: 100px 120px;
`

export default function HeroSection() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "index/mondello-restaurant-history.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 660, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <StyledSection>
      <Container>
        <Lines></Lines>
        <StyledMainGrid>
          <StyledContentDiv>
            <StyledContentWrapper>
              <SecondaryHeading>History</SecondaryHeading>
              <MainParagraph>
                Our restaurant was established in 1975. Its founder and first
                chef was Pietro Savastano. Eccentric men with passion for the
                italian food and italian way of life. His goal was to create a
                family place with original, traditional food and an informal
                atmosphere. Years have passed, but we still value the same
                things and we are proud of it.
              </MainParagraph>
            </StyledContentWrapper>
          </StyledContentDiv>
          <StyledGreyDiv></StyledGreyDiv>
          <StyledImageDiv>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Our restaurant history"
            />
          </StyledImageDiv>
        </StyledMainGrid>
      </Container>
    </StyledSection>
  )
}
