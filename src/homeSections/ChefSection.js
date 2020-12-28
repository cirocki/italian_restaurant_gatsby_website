import React from "react"
import styled from "styled-components"
import MainParagraph from "../components/MainParagraph"
import PrimaryHeading from "../components/PrimaryHeading"
import SecondaryHeading from "../components/SecondaryHeading"
import Container from "../layout/container/Container"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
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
  min-height: 960px;
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
`
const StyledImageWrapper = styled.div`
  background: blue;
  grid-column: 1/5;
  grid-row: 3/9;
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
`

// CONTENT
const StyledContent = styled.div`
  padding: 120px;
  display: flex;
  flex-direction: column;
  flex: 1;
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
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Chef in our restaurant"
            />
          </StyledImageWrapper>
        </StyledGrid>
      </Container>
    </StyledSection>
  )
}
