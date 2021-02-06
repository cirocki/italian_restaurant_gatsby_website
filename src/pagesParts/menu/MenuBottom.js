import React from "react"
import styled from "styled-components"
import OldSchoolHeading from "../../components/typography/OldSchoolHeading"
import ButtonGhost from "../../components/buttons/ButtonGhost"

const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px;
  background: ${props => props.theme.colors.dark};

  @media (max-width: 669px) {
    padding: 60px;
  }
  @media (max-width: 529px) {
    padding: 40px;
  }
  @media (max-width: 359px) {
    padding: 40px 20px;
  }
`

const StyledInnerWrapper = styled.div`
  max-width: 720px;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export default function MenuBottom() {
  return (
    <StyledMainWrapper>
      <StyledInnerWrapper>
        <OldSchoolHeading whiteColor>
          We also offer kid's portion and home delivery. Book a table online and
          check secret menu items in our restaurant.
        </OldSchoolHeading>
        <ButtonGhost to="/reservation" align="center">
          Reservation
        </ButtonGhost>
      </StyledInnerWrapper>
    </StyledMainWrapper>
  )
}
