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
`
const StyledTopContentDiv = styled.div`
  grid-column: 5/13;
  grid-row: 1/5;
  display: flex;
  align-items: center;
  padding: 120px;
`
const StyledTopImgDiv = styled.div`
  min-height: 720px;
  grid-column: 1/5;
  grid-row: 1/7;
`
const StyledTopYearsDiv = styled.div`
  grid-column: 3/13;
  grid-row: 5/9;
  background: ${props => props.theme.colors.dark};
  display: flex;
`
const StyledYearsWrapper = styled.div`
  padding-left: 360px;
  padding-top: 120px;

  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
`
const StyledItem = styled.div`
  /* text-align: center; */
`
const StyledYear = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.gold};
  padding-bottom: 1rem;
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
                Distinctio laboriosam ipsum molestias rerum quisquam repudiandae
                voluptatem.
              </MainParagraph>
            </StyledItem>
            <StyledItem>
              <StyledYear>1989</StyledYear>
              <MainParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                optio repudiandae porro ipsum molestias rerum tempore
                temporibus.
              </MainParagraph>
            </StyledItem>
            <StyledItem>
              <StyledYear>1997</StyledYear>
              <MainParagraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rederit
                nam minus libero, consequatur ipsam? Eaque, obcaecati.
              </MainParagraph>
            </StyledItem>
          </StyledYearsWrapper>
        </StyledTopYearsDiv>
      </StyledTopGrid>
    </Container>
  )
}
