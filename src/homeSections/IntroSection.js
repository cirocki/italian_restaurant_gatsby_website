import React from "react"
import styled from "styled-components"
import PrimaryHeading from "../components/PrimaryHeading"
import Container from "../layout/container/Container"
import Lines from "../layout/container/Lines"

const StyledIntroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`
const StyledIntro = styled.div`
  grid-column: 3/7;
  padding-top: 120px;
`

export default function IntroSection() {
  return (
    <div>
      <Container>
        <Lines></Lines>
        <StyledIntroGrid>
          <StyledIntro>
            <PrimaryHeading>
              The kitchen offers delicious specialties of the Sicilian
              tradition, such as Arancini, Caponata, Cannoli and many more.
            </PrimaryHeading>
          </StyledIntro>
        </StyledIntroGrid>
      </Container>
    </div>
  )
}
