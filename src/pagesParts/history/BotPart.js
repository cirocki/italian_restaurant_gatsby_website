import React from "react"
import styled from "styled-components"
import Container from "../../layout/container/Container"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import OldSchoolHeading from "../../components/typography/OldSchoolHeading"
import ButtonGhost from "../../components/buttons/ButtonGhost"

const StyledMainWrapper = styled(BackgroundImage)`
  background-position: 0 100px;
  background-repeat: no-repeat;
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
`
const StyledContentWrapper = styled.div`
  grid-column: 1/7;
  grid-row: 1/5;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.dark};
  min-height: 480px;
  padding: 120px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50vw;
    height: 100%;
    background: ${props => props.theme.colors.dark};
    z-index: -1;
  }
  @media (max-width: 1469px) {
    grid-column: 1/9;
  }
  @media (max-width: 1049px) {
    grid-column: 1/10;
  }
  @media (max-width: 829px) {
    grid-column: 1/13;
    min-height: 0;
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
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`
export default function BotPart() {
  const data = useStaticQuery(
    graphql`
      query {
        file(
          relativePath: {
            eq: "subpages/history/palermo-history-restaurant.jpg"
          }
        ) {
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
    <StyledMainWrapper Tag="div" fluid={imageData} backgroundColor={`#ffffff`}>
      <Container>
        <StyledGrid>
          <StyledContentWrapper>
            <StyledContent>
              <OldSchoolHeading whiteColor>
                The kitchen offers delicious specialties of the Sicilian
                tradition. Find out more about our team and the values ​​we
                believe in.
              </OldSchoolHeading>

              <ButtonGhost to="/about" align="right">
                About Us
              </ButtonGhost>
            </StyledContent>
          </StyledContentWrapper>
        </StyledGrid>
      </Container>
    </StyledMainWrapper>
  )
}
