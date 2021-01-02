import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "../layout/container/Container"
import MainParagraph from "../components/MainParagraph"
import PrimaryHeading from "../components/PrimaryHeading"
import SecondaryHeading from "../components/SecondaryHeading"
import ButtonGhost from "../components/ButtonGhost"
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
    @media (max-width: 1069px) {
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
  @media (max-width: 1069px) {
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
  background: ${props => props.theme.colors.dark};
  grid-column: 7/13;
  grid-row: 7/12;
  display: flex;
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
  @media (max-width: 1200px) and (min-width: 521px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
  }
`
const StyledImage = styled(Img)`
  @media (max-width: 1200px) and (min-width: 521px) {
    width: 660px;
  }
`

// HEADER
const StyledHeader = styled.div`
  padding: 120px;
  display: flex;
  align-items: stretch;
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
const StyledHeaderInner = styled.div`
  display: flex;
  flex-direction: column;
`

// CONTENT
const StyledContent = styled.div`
  padding: 120px;
  display: flex;
  flex-direction: column;
  flex: 1;
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
      file(relativePath: { eq: "index/mondello-chef.jpg" }) {
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
                <SecondaryHeading>Our Chef</SecondaryHeading>
                <PrimaryHeading margin={60}>
                  The kitchen offers delicious specialties of the Sicilian
                  tradition, such as Arancini, Caponata and many more.
                </PrimaryHeading>
                <MainParagraph>
                  Gennaro - chef of our restaurant, loves pizza and spaghetti,
                  but he can also prepare many more exquisite dishes like his
                  specialty - bloody steaks. He can create a masterpiece from a
                  simple products, that will delight even the most demanding
                  taste buds. He grew up in Palermo, so he understands the local
                  traditions and the atmosphere of a real Italian restaurant.
                </MainParagraph>
              </StyledHeaderInner>
            </StyledHeader>
          </StyledHeaderWrapper>
          <StyledContentWrapper>
            <StyledContent>
              <ShortMenu />
              <ButtonGhost>Check full menu</ButtonGhost>
            </StyledContent>
          </StyledContentWrapper>
          <StyledImageWrapper>
            <StyledImage
              fluid={data.file.childImageSharp.fluid}
              alt="Chef in our restaurant"
            />
          </StyledImageWrapper>
        </StyledGrid>
      </Container>
    </StyledSection>
  )
}
