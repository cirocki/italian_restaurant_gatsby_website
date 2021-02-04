import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Container from "../../layout/container/Container"
import MainParagraph from "../../components/typography/MainParagraph"
import OpenHours from "../../components/contactParts/OpenHours"
import Address from "../../components/contactParts/Address"
import Socials from "../../components/contactParts/Socials"
import Phone from "../../components/contactParts/Phone"
import Email from "../../components/contactParts/Email"
import ButtonGhost from "../../components/buttons/ButtonGhost"

const StyledMainWrapper = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: calc(50% - 360px);
    height: calc(100% - 360px);
    background: ${props => props.theme.colors.light};
    z-index: -1;
    @media (max-width: 1069px) {
      display: none;
    }
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 480px;
    left: 0;
    width: calc(50% + 120px);
    height: 360px;
    background: ${props => props.theme.colors.gold};
    z-index: -1;
    @media (max-width: 1069px) {
      display: none;
    }
  }
`

const StyledMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`
const StyledImgDiv = styled.div`
  grid-column: 8/12;
  grid-row: 5/11;
`
const StyledFindDiv = styled.div`
  grid-column: 1/7;
  grid-row: 9/13;
  padding: 120px;
  display: flex;
  flex-direction: column;
`
const StyledHoursDiv = styled.div`
  grid-column: 7/13;
  grid-row: 1/4;
  padding: 120px 240px 60px 120px;
`
const StyledInfoDiv = styled.div`
  grid-column: 3/7;
  grid-row: 2/7;
  background: ${props => props.theme.colors.dark};
  padding: 120px;
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
            <StyledHeading>Contact details</StyledHeading>
            <Address />
            <Socials />
            <Phone />
            <Email />
          </StyledInfoDiv>
          <StyledFindDiv>
            <StyledHeading>How to find us</StyledHeading>

            <MainParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              optio dolorum distinctio facere quas cumque rem. Officiis nemo ea
              quae voluptas quidem, repellendus itaque iste recusandae possimus
              praesentium.
            </MainParagraph>
            <ButtonGhost as="a" href="https://cirocki.pl">
              external
            </ButtonGhost>
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
