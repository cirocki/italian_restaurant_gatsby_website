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
const StyledTopYearsDiv = styled.div`
  grid-column: 3/13;
  grid-row: 5/9;
  background: ${props => props.theme.colors.dark};
  display: flex;
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

const StyledYearsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(4, 1fr);
`
const StyledYearsWrapper = styled.div`
  grid-column: 4/10;
  grid-row: 2/4;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const StyledYearsItem = styled.div`
  display: flex;
`
const StyledYear = styled.h3`
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.gold};
  font-size: 3rem;
  padding-right: 2rem;
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            accusamus quasi doloribus, itaque architecto vitae ut blanditiis
            dolorem! Architecto enim sit ea expedita nihil beatae minus et est
            distinctio similique a, dolorum dicta aspernatur commodi iure sequi
            maiores inventore aut ducimus molestias! Qui recusandae laborum
            dicta officia magni, reiciendis praesentium.
          </MainParagraph>
        </StyledTopContentDiv>
        <StyledTopYearsDiv>
          <StyledYearsGrid>
            <StyledYearsWrapper>
              <div>
                <StyledYearsItem>
                  <StyledYear>1912</StyledYear>
                  <MainParagraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, aperiam cumque ut, ea
                  </MainParagraph>
                </StyledYearsItem>
                <StyledYearsItem>
                  <StyledYear>1912</StyledYear>
                  <MainParagraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, aperiam cumque ut, ea mollitia doloremque itaque
                    suscipit
                  </MainParagraph>
                </StyledYearsItem>
                <StyledYearsItem>
                  <StyledYear>1912</StyledYear>
                  <MainParagraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditateea mollitia doloremque.
                  </MainParagraph>
                </StyledYearsItem>
              </div>
            </StyledYearsWrapper>
          </StyledYearsGrid>
        </StyledTopYearsDiv>
      </StyledTopGrid>
    </Container>
  )
}
