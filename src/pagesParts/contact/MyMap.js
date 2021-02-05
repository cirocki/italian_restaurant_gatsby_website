import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Container from "../../layout/container/Container"
import MainParagraph from "../../components/typography/MainParagraph"
import Address from "../../components/contactParts/Address"
import Socials from "../../components/contactParts/Socials"
import Phone from "../../components/contactParts/Phone"
import Email from "../../components/contactParts/Email"

const StyledMainWrapper = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
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
  grid-template-rows: repeat(9, 1fr);
`
const StyledImgDiv = styled.div`
  grid-column: 6/12;
  grid-row: 2/6;
`
const StyledFindDiv = styled.div`
  grid-column: 6/12;
  grid-row: 6/10;
  padding: 120px;
  display: flex;
  flex-direction: column;
`

const StyledInfoDiv = styled.div`
  grid-column: 1/5;
  grid-row: 3/8;
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
        relativePath: {
          eq: "subpages/contact/mondello-restaurant-outside-tables.jpg"
        }
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, quo molestiae. Unde facere cum eius fugiat aliquid
              doloribus accusamus, error, ad reiciendis quas officia animi
              dignissimos cupiditate itaque dicta enim.
            </MainParagraph>
          </StyledFindDiv>
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
