import React from "react"
import styled from "styled-components"
import Container from "../../layout/container/Container"

// BOT
const StyledBotWrapper = styled.div`
  background: ${props => props.theme.colors.gold};
`
const StyledBotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
`
const StyledBotContentDiv = styled.div`
  grid-column: 1/7;
  grid-row: 1/5;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.dark};
  min-height: 480px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100%;
    background: ${props => props.theme.colors.dark};
    z-index: 1;
  }
`

export default function BotPart() {
  return (
    <StyledBotWrapper>
      <Container>
        <StyledBotGrid>
          <StyledBotContentDiv>lorem</StyledBotContentDiv>
        </StyledBotGrid>
      </Container>
    </StyledBotWrapper>
  )
}
