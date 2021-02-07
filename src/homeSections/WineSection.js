import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { fadeLeft, fadeBottom } from "../components/animations/Animation"
import Container from "../layout/container/Container"
import MainParagraph from "../components/typography/MainParagraph"

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  @media (max-width: 1059px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledTitleWrapper = styled.div`
  grid-column: 1/6;
  grid-row: 1/4;
  padding: 120px;
  @media (max-width: 1279px) {
    padding: 80px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`
const StyledContentWrapper = styled.div`
  grid-column: 6/13;
  grid-row: 1/4;
  padding: 120px;
  @media (max-width: 1279px) {
    padding: 80px;
  }
  @media (max-width: 1059px) {
    padding: 0 80px 80px 80px;
  }
  @media (max-width: 768px) {
    padding: 0 40px 80px 40px;
  }
  @media (max-width: 569px) {
    padding: 0 20px 80px 20px;
  }
`
const StyledTitleText = styled.h2`
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 100px;
  position: relative;
  &:before {
    content: "Our";
    position: absolute;
    top: -3rem;
    left: -2rem;
    color: ${props => props.theme.colors.gold};
    font-size: 60px;
    z-index: -1;
    @media (max-width: 489px) {
      top: -2rem;
      font-size: 36px;
    }
  }
  @media (max-width: 1059px) {
    margin-left: 2rem;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
  @media (max-width: 489px) {
    font-size: 60px;
  }
`

const StyledImgDiv = styled(BackgroundImage)`
  min-height: 480px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
  background-attachment: fixed;
`

export default function WineSection() {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "index/wine-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.file.childImageSharp.fluid

  // GSAP
  let headerRef = useRef(null)
  let contentRef = useRef(null)

  useEffect(() => {
    fadeLeft(headerRef.current, headerRef.current)
    fadeBottom(contentRef.current, contentRef.current)
  }, [])

  return (
    <section>
      <Container>
        <StyledGrid>
          <StyledTitleWrapper ref={headerRef}>
            <StyledTitleText>Wines</StyledTitleText>
          </StyledTitleWrapper>
          <StyledContentWrapper ref={contentRef}>
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
      <StyledImgDiv Tag="section" fluid={imageData}></StyledImgDiv>
    </section>
  )
}
