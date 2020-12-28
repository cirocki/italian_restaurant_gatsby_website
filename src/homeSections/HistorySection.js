import React from "react"
import styled from "styled-components"
import MainParagraph from "../components/MainParagraph"
import PrimaryHeading from "../components/PrimaryHeading"
import SecondaryHeading from "../components/SecondaryHeading"
import Container from "../layout/container/Container"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import ButtonGhost from "../components/ButtonGhost"

const StyledSection = styled.section`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    background: ${props => props.theme.colors.dark};
    z-index: -1;
  }
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  min-height: 960px;
`

const StyledHeaderWrapper = styled.div`
  grid-column: 1/8;
  grid-row: 1/5;
  display: flex;
  justify-content: center;
`
const StyledContentWrapper = styled.div`
  background: ${props => props.theme.colors.dark};
  grid-column: 1/8;
  grid-row: 5/9;
  display: flex;
  justify-content: center;
`
const StyledImageWrapper = styled.div`
  background: blue;
  grid-column: 9/13;
  grid-row: 2/8;
  &:before {
    content: "SINCE";
    position: absolute;
    top: 6rem;
    right: -10rem;
    z-index: 1;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${props => props.theme.colors.dark};
    letter-spacing: 4px;
  }
  &:after {
    content: "1993";
    position: absolute;
    top: 5rem;
    right: -10rem;
    z-index: 1;
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 12rem;
    color: ${props => props.theme.colors.dark};
  }
`

// HEADER
const StyledHeader = styled.div`
  padding: 120px;
  display: flex;
  align-items: stretch;
`
const StyledHeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

// CONTENT
const StyledContent = styled.div`
  padding: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function HistorySection() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "index/mondello-history.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 720, quality: 100) {
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
        <StyledGrid>
          <StyledHeaderWrapper>
            <StyledHeader>
              <StyledHeaderInner>
                <SecondaryHeading>History</SecondaryHeading>
                <PrimaryHeading>
                  We try to make everything perfect. The color of the
                  tablecloths and the selection of spices. Every detail is
                  important, to make your visit here unforgettable.
                </PrimaryHeading>
              </StyledHeaderInner>
            </StyledHeader>
          </StyledHeaderWrapper>
          <StyledContentWrapper>
            <StyledContent>
              <MainParagraph>
                Our restaurant was established in 1975. Its founder and first
                chef was Pietro Savastano. Eccentric men with passion for the
                italian food and italian way of life. His goal was to create a
                family place with original, traditional food and an informal
                atmosphere. Years have passed, but we still value the same
                things and we are proud of it.
              </MainParagraph>
              <ButtonGhost>Learn more</ButtonGhost>
            </StyledContent>
          </StyledContentWrapper>
          <StyledImageWrapper>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="About our restaurant"
            />
          </StyledImageWrapper>
        </StyledGrid>
      </Container>
    </StyledSection>
  )
}
