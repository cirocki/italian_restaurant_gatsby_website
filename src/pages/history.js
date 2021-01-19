import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Container from "../layout/container/Container"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import ModernHeading from "../components/typography/ModernHeading"
import OldSchoolHeading from "../components/typography/OldSchoolHeading"
import MainParagraph from "../components/typography/MainParagraph"

const StyledMainDiv = styled.main`
  margin-top: 60px;
`
// HEADER
const StyledHeader = styled.header`
  background: ${props => props.theme.colors.dark};
`
const StyledHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
`
const StyledHeadingsWrapper = styled.div`
  min-height: 240px;
  grid-column: 3/8;
  grid-row: 2/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

// TOP
const StyledTopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 50%;
    background: ${props => props.theme.colors.dark};
    z-index: -10;
  }
`
const StyledTopYearsDiv = styled.div`
  grid-column: 3/13;
  grid-row: 5/9;
  background: ${props => props.theme.colors.dark};
`
const StyledTopImgDiv = styled.div`
  min-height: 720px;
  grid-column: 1/5;
  grid-row: 1/7;
`
const StyledTopContentDiv = styled.div`
  grid-column: 5/13;
  grid-row: 1/5;
  display: flex;
  align-items: center;
  padding: 120px;
`

// MID
const StyledMidGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: 240px;
    left: 50%;
    width: 100vw;
    height: calc(100% - 240px);
    background: ${props => props.theme.colors.light};
    z-index: -10;
  }
`
const StyledMidContentDiv = styled.div`
  grid-column: 1/5;
  grid-row: 1/7;
  display: flex;
  align-items: center;
`
const StyledMidImgDiv = styled.div`
  min-height: 480px;
  grid-column: 9/13;
  grid-row: 3/7;
  background: pink;
`

export default function HistoryPage() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(
        relativePath: { eq: "subpages/history/mondello-history-palermo.jpg" }
      ) {
        childImageSharp {
          fluid(maxHeight: 720, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      image2: file(relativePath: { eq: "subpages/history/italian-mask.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 480, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Helmet>
        <title>Our History | Mondello Restaurant</title>
      </Helmet>
      <StyledMainDiv>
        <StyledHeader>
          <Container>
            <StyledHeaderGrid>
              <StyledHeadingsWrapper>
                <ModernHeading>Our History</ModernHeading>
                <OldSchoolHeading whiteColor>
                  Since 1975, we build the brand of our restaurant around the
                  idea of authentic traditional Italian food.
                </OldSchoolHeading>
              </StyledHeadingsWrapper>
            </StyledHeaderGrid>
          </Container>
        </StyledHeader>
        <Container>
          <StyledTopGrid>
            <StyledTopImgDiv>
              <Img
                fluid={data.image1.childImageSharp.fluid}
                alt="Palermo city landscape"
              />
            </StyledTopImgDiv>
            <StyledTopContentDiv>
              <MainParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate accusamus quasi doloribus, itaque architecto vitae ut
                blanditiis dolorem! Architecto enim sit ea expedita nihil beatae
                minus et est distinctio similique a, dolorum dicta aspernatur
                commodi iure sequi maiores inventore aut ducimus molestias! Qui
                recusandae laborum dicta officia magni, reiciendis praesentium.
              </MainParagraph>
            </StyledTopContentDiv>
            <StyledTopYearsDiv>years</StyledTopYearsDiv>
          </StyledTopGrid>
        </Container>

        <Container>
          <StyledMidGrid>
            <StyledMidContentDiv>
              <MainParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                autem pariatur dolor, inventore et ad sint dolores est similique
                eius facilis? Assumenda repudiandae tempore consequatur nemo
                praesentium, enim magni eos dolores! Possimus magnam, sed
                reprehenderit deleniti veritatis ea modi aliquam, laborum
                perspiciatis eligendi sequi, quaerat culpa. Nulla mollitia
                quidem nemo similique quae obcaecati maiores alias quia ipsum
                beatae exercitationem iste quos quod quibusdam provident, nihil
                doloribus, ex ut facere, ab dolorem! Fugit dolorum repellendus
                quidem, velit voluptatem impedit, nobis nesciunt asperiores
                expedita ipsum architecto, porro at. Id veniam totam placeat,
                consectetur assumenda, quo molestias modi, eligendi ratione
                nihil voluptatum. Facere!
              </MainParagraph>
            </StyledMidContentDiv>
            <StyledMidImgDiv>
              <Img
                fluid={data.image2.childImageSharp.fluid}
                alt="Italian Traditional mask"
              />
            </StyledMidImgDiv>
          </StyledMidGrid>
        </Container>
      </StyledMainDiv>
    </Layout>
  )
}
