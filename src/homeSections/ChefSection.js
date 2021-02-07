import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import {
  fadeBottomFaster,
  fadeBottom,
} from "../components/animations/Animation"
import Img from "gatsby-image"
import Container from "../layout/container/Container"
import MainParagraph from "../components/typography/MainParagraph"
import ModernHeading from "../components/typography/ModernHeading"
import OldSchoolHeading from "../components/typography/OldSchoolHeading"
import ButtonGhost from "../components/buttons/ButtonGhost"
import ShortMenu from "../components/menuCard/ShortMenu"

const StyledSection = styled.section`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(50% - 120px);
    height: 480px;
    background: ${props => props.theme.colors.light};
    z-index: -1;
    @media (max-width: 1189px) {
      display: none;
    }
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 120px;
    left: 0;
    width: 50%;
    height: 360px;
    background: ${props => props.theme.colors.gold};
    z-index: -1;
  }
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(11, 1fr);
  @media (max-width: 1189px) {
    display: flex;
    flex-direction: column;
  }
`

const StyledHeaderWrapper = styled.div`
  grid-column: 6/13;
  grid-row: 2/7;
  display: flex;
  justify-content: center;
`
const StyledContentWrapper = styled.div`
  grid-column: 7/13;
  grid-row: 7/12;
  background: ${props => props.theme.colors.dark};
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
  @media (max-width: 1279px) {
    grid-column: 6/13;
    grid-row: 7/12;
  }
`
const StyledImageWrapper = styled.div`
  grid-column: 1/5;
  grid-row: 3/9;
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
const StyledTextDiv = styled.div`
  padding-top: 60px;
`

const StyledContent = styled.div`
  padding: 120px;
  display: flex;
  flex-direction: column;
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

export default function ChefSection() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "index/palermo-restaurant-chef-gennaro.jpg" }) {
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
    fadeBottomFaster(headerRef.current, headerRef.current)
    fadeBottom(contentRef.current, contentRef.current)
  }, [])

  return (
    <StyledSection>
      <Container>
        <StyledGrid>
          <StyledHeaderWrapper>
            <StyledHeader ref={headerRef}>
              <ModernHeading>Our Chef</ModernHeading>
              <OldSchoolHeading>
                The kitchen offers delicious specialties of the Sicilian
                tradition, such as Arancini, Caponata and many more.
              </OldSchoolHeading>
              <StyledTextDiv>
                <MainParagraph>
                  Gennaro - chef of our restaurant, loves pizza and spaghetti,
                  but he can also prepare many more exquisite dishes like his
                  specialty - bloody steaks. He can create a masterpiece from a
                  simple products, that will delight even the most demanding
                  taste buds. He grew up in Palermo, so he understands the local
                  traditions and the atmosphere of a real Italian restaurant.
                </MainParagraph>
              </StyledTextDiv>
            </StyledHeader>
          </StyledHeaderWrapper>
          <StyledContentWrapper>
            <StyledContent ref={contentRef}>
              <ShortMenu />
              <ButtonGhost to="/our-menu">Check full menu</ButtonGhost>
            </StyledContent>
          </StyledContentWrapper>
          <StyledImageWrapper>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Chef in our sicilian restaurant"
            />
          </StyledImageWrapper>
        </StyledGrid>
      </Container>
    </StyledSection>
  )
}
