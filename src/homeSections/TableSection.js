import React from "react"
import styled from "styled-components"
import PrimaryHeading from "../components/PrimaryHeading"
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
    left: 50%;
    bottom: 240px;
    width: 50%;
    background: ${props => props.theme.colors.light};
  }
`
// MAIN GRID
const StyledMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, minmax(120px, auto));
  padding: 120px 0;
`
const StyledGreyDiv = styled.div`
  grid-column: 5/13;
  grid-row: 1/5;
  z-index: 2;
  background: ${props => props.theme.colors.light};
`
const StyledContentDiv = styled.div`
  grid-column: 1/7;
  grid-row: 1/6;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledImageDiv = styled.div`
  grid-column: 7/13;
  grid-row: 2/6;
  z-index: 4;
`

const StyledContentWrapper = styled.div`
  padding: 100px 120px;
`

export default function TableSection() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "index/book-a-table-in-mondello.jpg" }) {
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
              <PrimaryHeading>
                The kitchen offers delicious specialties of the Sicilian
                tradition, such as Arancini, Caponata, Cannoli and many more.
              </PrimaryHeading>
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
