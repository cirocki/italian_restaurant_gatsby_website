import React from "react"
import styled from "styled-components"
import ModernHeading from "../../components/typography/ModernHeading"
import OldSchoolHeading from "../../components/typography/OldSchoolHeading"
import Container from "../../layout/container/Container"

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.dark};
`
const StyledHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
`
const StyledHeadingsWrapper = styled.div`
  min-height: 240px;
  grid-column: 3/8;
  grid-row: 2/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function HistoryHeader() {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderGrid>
          <StyledHeadingsWrapper>
            <ModernHeading>Our History</ModernHeading>
            <OldSchoolHeading whiteColor>
              Since 1975, we build the brand of our restaurant around the idea
              of authentic traditional Italian food.
            </OldSchoolHeading>
          </StyledHeadingsWrapper>
        </StyledHeaderGrid>
      </Container>
    </StyledHeader>
  )
}
