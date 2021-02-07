import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
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
    top: 0;
    left: 0;
    width: calc(50% - 360px);
    height: 100%;
    background: ${props => props.theme.colors.light};
    z-index: -1;
    @media (max-width: 1119px) {
      display: none;
    }
  }
`

const StyledMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(9, 1fr);
  @media (max-width: 1439px) {
    grid-template-columns: repeat(11, 1fr);
  }
  @media (max-width: 1199px) {
    grid-template-rows: repeat(8, 1fr);
  }
  @media (max-width: 1119px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledInfoDiv = styled.address`
  grid-column: 1/5;
  grid-row: 3/8;
  padding: 120px;
  background: ${props => props.theme.colors.dark};
  font-size: 1.125rem;
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
const StyledImgDiv = styled.div`
  grid-column: 6/12;
  grid-row: 2/6;
  display: flex;
  justify-content: center;
`
const StyledFindDiv = styled.div`
  grid-column: 6/12;
  grid-row: 6/10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px;
  @media (max-width: 1199px) {
    grid-column: 5/12;
    grid-row: 5/9;
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

const StyledAddressDiv = styled.div`
  padding-bottom: 2rem;
  font-size: 1.125rem;
`

const StyledHeading = styled.h3`
  padding-bottom: 1.5rem;
  color: ${props => props.theme.colors.gold};
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export default function ContactMain() {
  const data = useStaticQuery(graphql`
    query {
      image: file(
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
          <StyledImgDiv>
            <Img
              fluid={data.image.childImageSharp.fluid}
              alt="Italian restaurant outside - Palermo"
            />
          </StyledImgDiv>
          <StyledInfoDiv>
            <StyledHeading>Contact details</StyledHeading>
            <StyledAddressDiv>
              <Address />
            </StyledAddressDiv>
            <Socials mysize="lg" />
            <Phone />
            <Email />
          </StyledInfoDiv>
          <StyledFindDiv>
            <StyledHeading>How to find us</StyledHeading>
            <MainParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, quo molestiae. Unde facere cum eius fugiat aliquid
              doloribus accusamus, error, ad reiciendis quasore officia animi
              dignissimos cupiditate itaque dicta enim.
            </MainParagraph>
          </StyledFindDiv>
        </StyledMainGrid>
      </Container>
    </StyledMainWrapper>
  )
}
