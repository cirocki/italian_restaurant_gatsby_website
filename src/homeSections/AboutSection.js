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
    left: 50%;
    width: 50%;
    background: ${props => props.theme.colors.dark};
  }
  /* &:after {
    content: "";
    position: absolute;
    top: 240px;
    left: 50%;
    bottom: 0;
    width: 50%;
    background: ${props => props.theme.colors.light};
  } */
`
// MAIN GRID
const StyledMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, minmax(120px, auto));
`
const StyledGreyDiv = styled.div`
  grid-column: 1/7;
  grid-row: 3/6;
  z-index: 2;
  background: ${props => props.theme.colors.light};
`
const StyledContentDiv = styled.div`
  grid-column: 6/13;
  grid-row: 2/5;
  z-index: 3;
  background: ${props => props.theme.colors.dark};
`
const StyledImageDiv = styled.div`
  grid-column: 2/5;
  grid-row: 3/6;
  z-index: 4;
`

const StyledContentWrapper = styled.div`
  padding: 100px 120px;
`
export default function AboutSection() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "index/about-restaurant.jpg" }) {
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
              <SecondaryHeading>About Us</SecondaryHeading>
              <MainParagraph>
                We are famous in Sicilia, cause we cook our dishes from the
                freshest ingredients in traditional way. Local vegetables, fresh
                fish and own winery. We specialize in homemade classic Italian
                pizza, pasta, salads, soups and much more. Don't forget to try
                our Lasagna. We provide excellent taste, great service and warm
                atmosphere.
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
