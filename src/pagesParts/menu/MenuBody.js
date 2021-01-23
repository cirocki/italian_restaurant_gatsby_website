import React from "react"
import styled from "styled-components"
import Container from "../../layout/container/Container"

const StyledMainWrapper = styled.div`
  /* position: relative; */
`

const StyledMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`
const StyledSelectPart = styled.div`
  background: pink;
  grid-column: 1/3;
`
const StyledCardPart = styled.div`
  background: palegreen;
  grid-column: 3/12;
`

export default function MenuBody() {
  return (
    <StyledMainWrapper>
      <Container>
        <StyledMainGrid>
          <StyledSelectPart>
            <h1>chose</h1>
          </StyledSelectPart>
          <StyledCardPart>
            <h1>menu</h1>
          </StyledCardPart>
        </StyledMainGrid>
      </Container>
    </StyledMainWrapper>
  )
}
