import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import MainParagraph from "../../components/typography/MainParagraph"
import Container from "../../layout/container/Container"

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
  @media (max-width: 1069px) {
    grid-template-rows: repeat(5, 1fr);
    &:before {
      display: none;
    }
  }
  @media (max-width: 879px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledTopContentDiv = styled.div`
  grid-column: 5/13;
  grid-row: 1/5;
  display: flex;
  align-items: center;
  padding: 120px;
  @media (max-width: 1069px) {
    grid-row: 1/4;
  }
  @media (max-width: 619px) {
    padding: 60px;
  }
  @media (max-width: 429px) {
    padding: 40px;
  }
  @media (max-width: 359px) {
    padding: 40px 20px;
  }
`
const StyledTopImgDiv = styled.div`
  min-height: 720px;
  grid-column: 1/5;
  grid-row: 1/7;
  @media (max-width: 1069px) {
    grid-row: 1/4;
    min-height: 360px;
  }
  @media (max-width: 879px) {
    display: flex;
    justify-content: center;
  }
`
const StyledTopYearsDiv = styled.div`
  grid-column: 3/13;
  grid-row: 5/9;
  background: ${props => props.theme.colors.dark};
  display: flex;
  @media (max-width: 1069px) {
    grid-column: 1/13;
    grid-row: 4/6;
  }
`
const StyledYearsWrapper = styled.div`
  padding-left: 360px;
  padding-top: 120px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  @media (max-width: 1239px) {
    padding: 60px;
  }
  @media (max-width: 739px) {
    display: flex;
    flex-direction: column;
    padding: 120px;
  }
  @media (max-width: 619px) {
    padding: 60px;
  }
  @media (max-width: 429px) {
    padding: 40px;
  }
  @media (max-width: 359px) {
    padding: 40px 20px;
  }
`
const StyledItem = styled.div``
const StyledYear = styled.h3`
  padding-bottom: 2rem;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 3rem;
  color: ${props => props.theme.colors.gold};
`

export default function TopPart() {
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
    }
  `)

  return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            molestiae modi quod tempora corporis magnam harum voluptate,
            voluptatem non earum esse, voluptas provident explicabo vel delectus
            illum commodi sit! Dolores necessitatibus fuga quos. Dignissimos
            autem expedita ipsum inventore quo omnis in ducimus magnam molestias
            culpa id quis itaque tenetur dolor sunt vel repellendus aspernatur
            esse eligendi iste tempore, hic nulla
          </MainParagraph>
        </StyledTopContentDiv>
        <StyledTopYearsDiv>
          <StyledYearsWrapper>
            <StyledItem>
              <StyledYear>1975</StyledYear>
              <MainParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio laboriosam ipsuum molestias.
              </MainParagraph>
            </StyledItem>
            <StyledItem>
              <StyledYear>1989</StyledYear>
              <MainParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                optio repudiandae porro ipsum molestias rerum.
              </MainParagraph>
            </StyledItem>
            <StyledItem>
              <StyledYear>1997</StyledYear>
              <MainParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elitaris.
                Rederit nam minus libero, consequatur.
              </MainParagraph>
            </StyledItem>
          </StyledYearsWrapper>
        </StyledTopYearsDiv>
      </StyledTopGrid>
    </Container>
  )
}
