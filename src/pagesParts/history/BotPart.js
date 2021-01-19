import React from "react"
import styled from "styled-components"
import Container from "../../layout/container/Container"

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import OldSchoolHeading from "../../components/typography/OldSchoolHeading"
import ButtonGhost from "../../components/buttons/ButtonGhost"

// BOT
const StyledBotWrapper = styled(BackgroundImage)`
  background-position: 0 100px;
  background-repeat: no-repeat;
`

const StyledBotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
`
const StyledBotContentWrapper = styled.div`
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
        file(relativePath: { eq: "subpages/history/palermo-history.jpg" }) {
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
    <StyledBotWrapper
      Tag="section"
      fluid={imageData}
      backgroundColor={`#ffffff`}
    >
      <Container>
        <StyledBotGrid>
          <StyledBotContentWrapper>
            <StyledContent>
              <OldSchoolHeading whiteColor>
                The kitchen offers delicious specialties of the Sicilian
                tradition, such as Arancini, Caponata, Cannoli and many more.
              </OldSchoolHeading>

              <ButtonGhost to="/about" right>
                About Us
              </ButtonGhost>
            </StyledContent>
          </StyledBotContentWrapper>
        </StyledBotGrid>
      </Container>
    </StyledBotWrapper>
  )
}
