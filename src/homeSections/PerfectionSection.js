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
  grid-column: 7/12;
  padding-top: 120px;
`

export default function PerfectionSection() {
  return (
    <div>
      <Container>
        <Lines></Lines>
        <StyledIntroGrid>
          <StyledIntro>
            <PrimaryHeading>
              We try to make everything perfect. The color of the tablecloths
              and the selection of spices. Every detail is important, to make
              your visit here unforgettable.
            </PrimaryHeading>
          </StyledIntro>
        </StyledIntroGrid>
      </Container>
    </div>
  )
}
