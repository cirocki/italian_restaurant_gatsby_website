import React from "react"
import styled from "styled-components"
import ReservationForm from "./ReservationForm"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Container from "../../layout/container/Container"

const StyledMainWrapper = styled(BackgroundImage)`
  background: ${props => props.theme.colors.light};
  background-position: center;
  background-size: cover;
  padding: 80px 0;
  @media (max-width: 359px) {
    padding: 0;
  }
`
const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default function ReservationMid() {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "subpages/reservation/reservation-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.file.childImageSharp.fluid
  return (
    <StyledMainWrapper Tag="main" fluid={imageData} backgroundColor={`#f2f2f2`}>
      <Container>
        <StyledFormWrapper>
          <ReservationForm />
        </StyledFormWrapper>
      </Container>
    </StyledMainWrapper>
  )
}
