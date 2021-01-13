import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { fadeBottom } from "../components/animations/Animation"
import Container from "../layout/container/Container"
import MainParagraph from "../components/typography/MainParagraph"
import ModernHeading from "../components/typography/ModernHeading"
import OldSchoolHeading from "../components/typography/OldSchoolHeading"
import ButtonGhost from "../components/buttons/ButtonGhost"

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
    @media (max-width: 1069px) {
      display: none;
    }
  }
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  @media (max-width: 1069px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledHeaderWrapper = styled.div`
  grid-column: 1/8;
  grid-row: 1/5;
  display: flex;
  justify-content: center;
`
const StyledContentWrapper = styled.div`
  grid-column: 1/8;
  grid-row: 5/9;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.dark};
`
const StyledImageWrapper = styled.div`
  grid-column: 9/13;
  grid-row: 2/8;
  @media (max-width: 1219px) {
    grid-column: 8/13;
  }
  @media (min-width: 481px) and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    padding-top: 80px;
  }
  @media (max-width: 480px) {
    padding-top: 0;
  }
`

const StyledHeader = styled.div`
  padding: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1279px) {
    padding: 80px;
  }
  @media (max-width: 768px) {
    padding: 80px 40px;
  }
  @media (max-width: 569px) {
    padding: 80px 20px;
  }
`

const StyledContent = styled.div`
  padding: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1279px) {
    padding: 80px;
  }
  @media (max-width: 768px) {
    padding: 80px 40px;
  }
  @media (max-width: 569px) {
    padding: 80px 20px;
  }
`

export default function HistorySection() {
  const data = useStaticQuery(graphql`
    query {
      file(
        relativePath: { eq: "index/mondello-restaurant-outside-tables.jpg" }
      ) {
        childImageSharp {
          fluid(maxHeight: 720, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  // GSAP
  let headerRef = useRef(null)
  let contentRef = useRef(null)

  useEffect(() => {
    fadeBottom(headerRef.current, headerRef.current)
    fadeBottom(contentRef.current, contentRef.current)
  }, [])

  return (
    <StyledSection>
      <Container>
        <StyledGrid>
          <StyledHeaderWrapper>
            <StyledHeader ref={headerRef}>
              <ModernHeading>History</ModernHeading>
              <OldSchoolHeading>
                Since 1975, we build the brand of our restaurant around the idea
                of authentic traditional Italian food from the best quality
                products.
              </OldSchoolHeading>
            </StyledHeader>
          </StyledHeaderWrapper>
          <StyledContentWrapper>
            <StyledContent ref={contentRef}>
              <MainParagraph>
                Our restaurant was established in 1975. Its founder and first
                chef was Pietro Savastano. Eccentric men with passion for the
                italian food and italian way of life. His goal was to create a
                family place with original, traditional food and an informal
                atmosphere. Years have passed, but we still value the same
                things and we are proud of it.
              </MainParagraph>
              <ButtonGhost to="/history">Learn more</ButtonGhost>
            </StyledContent>
          </StyledContentWrapper>
          <StyledImageWrapper>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Mondello restaurant outside - Via delle Viole"
            />
          </StyledImageWrapper>
        </StyledGrid>
      </Container>
    </StyledSection>
  )
}
