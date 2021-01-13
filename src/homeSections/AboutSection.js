import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { fadeBottom } from "../components/animations/Animation"
import Img from "gatsby-image"
import styled from "styled-components"
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
    height: calc(50% - 120px);
    background: ${props => props.theme.colors.gold};
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    top: -120px;
    left: 50%;
    width: 2px;
    height: 240px;
    background: ${props => props.theme.colors.gold};
    @media (max-width: 768px) {
      top: -60px;
      height: 120px;
    }
  }
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledHeaderWrapper = styled.div`
  grid-column: 1/7;
  grid-row: 1/5;
  display: flex;
  justify-content: center;
`
const StyledContentWrapper = styled.div`
  background: ${props => props.theme.colors.dark};
  grid-column: 7/13;
  grid-row: 3/7;
  display: flex;
  justify-content: center;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    height: 100%;
    background: ${props => props.theme.colors.dark};
    z-index: -1;
  }
`
const StyledImageWrapper = styled.div`
  grid-column: 2/6;
  grid-row: 5/9;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px;
  @media (max-width: 1279px) {
    padding: 80px;
  }
  @media (max-width: 1200px) {
    padding: 120px;
  }
  @media (max-width: 768px) {
    padding: 80px 40px;
  }
  @media (max-width: 569px) {
    padding: 80px 20px;
  }
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 0 120px 120px;
  @media (max-width: 1439px) {
    padding: 120px;
  }
  @media (max-width: 1279px) {
    padding: 80px;
  }
  @media (max-width: 1200px) {
    padding: 120px;
  }
  @media (max-width: 768px) {
    padding: 80px 40px;
  }
  @media (max-width: 569px) {
    padding: 80px 20px;
  }
`

export default function AboutSection() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "index/mondello-cooks-at-work.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 660, quality: 100) {
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
              <ModernHeading>About Us</ModernHeading>
              <OldSchoolHeading>
                We believe that food brings people together, so we care for
                every detail, to make your visit here unforgettable.
              </OldSchoolHeading>
            </StyledHeader>
          </StyledHeaderWrapper>
          <StyledContentWrapper>
            <StyledContent ref={contentRef}>
              <MainParagraph>
                We are famous in Sicilia, cause we cook our dishes from the
                freshest ingredients in traditional way. Local vegetables, fresh
                fish and own winery. We specialize in homemade classic Italian
                pizza, pasta, salads, soups and much more. Don't forget to try
                our Lasagna. We provide excellent taste, great service and warm
                atmosphere.
              </MainParagraph>
              <ButtonGhost to="/about">Learn more</ButtonGhost>
            </StyledContent>
          </StyledContentWrapper>
          <StyledImageWrapper>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Chefs prepare seafood in italian restaurant Mondello"
            />
          </StyledImageWrapper>
        </StyledGrid>
      </Container>
    </StyledSection>
  )
}
