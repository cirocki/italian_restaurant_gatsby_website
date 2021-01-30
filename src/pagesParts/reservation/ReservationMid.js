import React from "react"
import styled from "styled-components"
import ReservationForm from "./ReservationForm"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Container from "../../layout/container/Container"

const StyledMainWrapper = styled(BackgroundImage)`
  background: ${props => props.theme.colors.light};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 0;
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
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
    <StyledMainWrapper Tag="main" fluid={imageData} backgroundColor={`#ffffff`}>
      <Container>
        <StyledGrid>
          <div></div>
          <ReservationForm />
        </StyledGrid>
      </Container>
    </StyledMainWrapper>
  )
}
