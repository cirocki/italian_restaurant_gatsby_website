import React from "react"
import styled from "styled-components"
import MainParagraph from "../components/MainParagraph"
import SecondaryHeading from "../components/SecondaryHeading"
import Container from "../layout/container/Container"
import { graphql, useStaticQuery } from "gatsby"
import heroBg from "../img/index/mondello-hero-image.jpg"
import Img from "gatsby-image"

const StyledSection = styled.section`
  min-height: 90vh;
  background: ${props => props.theme.colors.dark};
  background: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledHeaderWrapper = styled.div`
  padding: 4rem 0;
  text-align: center;
`
const StyledHeading = styled.h1`
  padding-bottom: 40px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 100px;
  text-transform: uppercase;
`
const StyledSubheading = styled.h1`
  color: ${props => props.theme.colors.gold};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 2rem;
  font-style: italic;
`

// const StyledImageDiv = styled.div`
//   grid-column: 8/12;
//   grid-row: 1/6;
//   z-index: 4;
// `

export default function HeroSection() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "index/mondello-restaurant-history.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 660, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <StyledSection>
      <Container>
        {/* <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Our restaurant history"
        /> */}
        <StyledHeaderWrapper>
          <StyledHeading>Mondello</StyledHeading>
          <StyledSubheading>Explore the real taste of Italy!</StyledSubheading>
        </StyledHeaderWrapper>
      </Container>
    </StyledSection>
  )
}
