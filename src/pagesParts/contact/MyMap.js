import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Container from "../../layout/container/Container"
import MainParagraph from "../../components/typography/MainParagraph"
import OpenHours from "../../components/contactParts/OpenHours"

const StyledMainWrapper = styled.div`
  padding: 120px 0;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: calc(50% - 360px);
    height: 100%;
    background: ${props => props.theme.colors.light};
    z-index: -1;
    @media (max-width: 1069px) {
      display: none;
    }
  }
`

const StyledMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
`
const StyledImgDiv = styled.div`
  grid-column: 9/13;
  grid-row: 1/7;
`
const StyledFindDiv = styled.div`
  grid-column: 1/4;
  grid-row: 1/2;
`
const StyledHoursDiv = styled.div`
  grid-column: 5/8;
  grid-row: 1/2;
`
const StyledInfoDiv = styled.div`
  grid-column: 1/9;
  grid-row: 3/6;
  background: ${props => props.theme.colors.dark};
`
const StyledGoldDiv = styled.div`
  grid-column: 2/9;
  grid-row: 6/7;
  background: ${props => props.theme.colors.gold};
`
// TYPOGRAPHY

const StyledHeading = styled.h3`
  padding-bottom: 1.5rem;
  font-size: 16px;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.gold};
  text-transform: uppercase;
`

export default function MyMap() {
  const data = useStaticQuery(graphql`
    query {
      image2: file(
        relativePath: { eq: "subpages/contact/mondello-contact-image.jpg" }
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
        <StyledMainGrid>
          <StyledInfoDiv>
            <h1>mondello</h1>
          </StyledInfoDiv>
          <StyledGoldDiv></StyledGoldDiv>
          <StyledFindDiv>
            <StyledHeading>How to find us</StyledHeading>

            <MainParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit omnia.
              Quia blanditiis, tenetur animi deleniti dolorem quas omnis.
            </MainParagraph>
          </StyledFindDiv>
          <StyledHoursDiv>
            <StyledHeading>Opening hours</StyledHeading>
            <OpenHours />
          </StyledHoursDiv>
          <StyledImgDiv>
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="Italian Traditional mask"
            />
          </StyledImgDiv>
        </StyledMainGrid>
      </Container>
    </StyledMainWrapper>
  )
}
