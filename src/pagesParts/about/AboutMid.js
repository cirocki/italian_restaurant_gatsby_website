import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "../../layout/container/Container"

const StyledMainWrapper = styled.div`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 120px;
    right: 0;
    width: calc(50% - 240px);
    height: calc(50% + 120px);
    background: ${props => props.theme.colors.light};
    z-index: -1;
  }
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  @media (max-width: 879px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledBigImgDiv = styled.div`
  grid-column: 1/7;
  grid-row: 3/7;
  @media (max-width: 879px) {
    display: flex;
    justify-content: center;
  }
`
const StyledSmallImgDiv = styled.div`
  grid-column: 8/12;
  grid-row: 2/6;
  @media (max-width: 879px) {
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }
`

export default function AboutMid() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(
        relativePath: { eq: "subpages/about/our-restaurant-team-at-work.jpg" }
      ) {
        childImageSharp {
          fluid(maxHeight: 480, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      image2: file(
        relativePath: { eq: "subpages/about/our-cafe-master-mondello.jpg" }
      ) {
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
    <StyledMainWrapper>
      <Container>
        <StyledGrid>
          <StyledBigImgDiv>
            <Img
              fluid={data.image1.childImageSharp.fluid}
              alt="Mondello team at work"
            />
          </StyledBigImgDiv>
          <StyledSmallImgDiv>
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="Our best barista"
            />
          </StyledSmallImgDiv>
        </StyledGrid>
      </Container>
    </StyledMainWrapper>
  )
}
