import React from "react"
import styled from "styled-components"
import OldSchoolHeading from "../../components/typography/OldSchoolHeading"
import ButtonGhost from "../../components/buttons/ButtonGhost"

const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.dark};
  padding: 120px;
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
  max-width: 420px;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export default function ReservationBottom() {
  return (
    <StyledMainWrapper>
      <StyledInnerWrapper>
        <OldSchoolHeading whiteColor>
          You don't like filling out forms? Contact us in a more traditional
          way.
        </OldSchoolHeading>
        <ButtonGhost to="/contact" align="center">
          Contact Us
        </ButtonGhost>
      </StyledInnerWrapper>
    </StyledMainWrapper>
  )
}
