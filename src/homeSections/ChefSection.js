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
  &:after {
    content: "";
    position: absolute;
    top: 120px;
    height: 50%;
    width: 100%;
    background: ${props => props.theme.colors.light};
  }
`
// MAIN GRID
const StyledMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, minmax(120px, auto));
`
const StyledGreyDiv = styled.div`
  grid-column: 1/13;
  grid-row: 2/6;
  z-index: 2;
  background: ${props => props.theme.colors.light};
`
const StyledContentDiv = styled.div`
  grid-column: 2/13;
  grid-row: 3/8;
  z-index: 3;
  background: ${props => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledImageDiv = styled.div`
  grid-column: 1/5;
  grid-row: 1/7;
  z-index: 4;
`

const StyledContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
`
const StyledContentWrapper = styled.div`
  grid-column: 5/11;
`

export default function ChefSection() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "index/our-chef.jpg" }) {
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
            <StyledContentGrid>
              <StyledContentWrapper>
                <SecondaryHeading>Our Chef</SecondaryHeading>
                <MainParagraph>
                  Gennaro - chef of our restaurant loves pizza and spaghetti,
                  but he can also prepare many more exquisite dishes like his
                  specialty - bloody steaks. He can create a masterpiece from a
                  simple products, that will delight even the most demanding
                  taste buds. He grew up in Palermo, so he understands the local
                  traditions and the atmosphere of a real Italian restaurant.
                </MainParagraph>
              </StyledContentWrapper>
            </StyledContentGrid>
          </StyledContentDiv>
          <StyledGreyDiv></StyledGreyDiv>
          <StyledImageDiv>
            <Img fluid={data.file.childImageSharp.fluid} alt="Our chef" />
          </StyledImageDiv>
        </StyledMainGrid>
      </Container>
    </StyledSection>
  )
}
