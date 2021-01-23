import React, { useState } from "react"
import styled from "styled-components"
import Container from "../../layout/container/Container"
import MenuTabs from "./MenuTabs"
import MenuItems from "./MenuItems"

const StyledMainWrapper = styled.div`
  /* position: relative; */
  background: ${props => props.theme.colors.light};
`

const StyledMainGrid = styled.div`
  padding: 120px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`
const StyledSelectPart = styled.div`
  background: ${props => props.theme.colors.dark};
  grid-column: 1/4;
`
const StyledCardPart = styled.div`
  background: ${props => props.theme.colors.white};
  grid-column: 4/12;
  padding: 120px;
`

export default function MenuBody() {
  // TABS FUNCTIONALITY
  const [activeTab, setActiveTab] = useState(0)

  const changeTab = id => {
    setActiveTab(id)
  }

  return (
    <StyledMainWrapper>
      <Container>
        <StyledMainGrid>
          <StyledSelectPart>
            <MenuTabs changeTab={changeTab} activeTab={activeTab} />
          </StyledSelectPart>
          <StyledCardPart>
            <ul>
              <MenuItems activeTab={activeTab} />
            </ul>
          </StyledCardPart>
        </StyledMainGrid>
      </Container>
    </StyledMainWrapper>
  )
}
