import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "../../layout/container/Container"
import OldSchoolHeading from "../../components/typography/OldSchoolHeading"
import MainParagraph from "../../components/typography/MainParagraph"

const StyledMainWrapper = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: 120px;
    left: 0;
    width: 50vw;
    height: calc(50% + 120px);
    background: ${props => props.theme.colors.light};
    z-index: -1;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: calc(50vw + 360px);
    height: 50%;
    background: ${props => props.theme.colors.dark};
    z-index: -1;
  }
`

const StyledTopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
`
const StyledImgDiv = styled.div`
  grid-column: 2/6;
  grid-row: 2/8;
`
const StyledHeadingDiv = styled.div`
  grid-column: 8/12;
  grid-row: 1/5;
  display: flex;
  align-items: center;
`
const StyledContentDiv = styled.div`
  grid-column: 7/12;
  grid-row: 5/9;
  background: ${props => props.theme.colors.dark};
  display: flex;
  align-items: center;
`

const StyledHeadingWrapper = styled.div`
  padding: 120px 0;
  text-align: right;
`

export default function AboutTop() {
  const data = useStaticQuery(graphql`
    query {
      image2: file(
        relativePath: { eq: "subpages/about/about-us-mondello-team.jpg" }
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
    <StyledMainWrapper>
      <Container>
        <StyledTopGrid>
          <StyledImgDiv>
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="Our restaurant chef in work"
            />
          </StyledImgDiv>
          <StyledHeadingDiv>
            <StyledHeadingWrapper>
              <OldSchoolHeading>
                We believe that food brings people together, so we care for
                every detail, to make your Make a reservation now.
              </OldSchoolHeading>
            </StyledHeadingWrapper>
          </StyledHeadingDiv>
          <StyledContentDiv>
            <MainParagraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              accusamus, rerum minus tempora aut assumenda praesentium quo
              consequuntur accusantium maxime commodi labore iure, laboriosam
              omnis eius eaque, inventore cumque ipsa eos? Itaque nesciunt
              aperiam quae molestias nemo cupiditate ipsam nam excepturi
              corrupti quos aliquam, laudantium amet voluptatem id illo.
            </MainParagraph>
          </StyledContentDiv>
        </StyledTopGrid>
      </Container>
    </StyledMainWrapper>
  )
}
