import React from "react"
import styled from "styled-components"
import OldSchoolHeading from "../../components/typography/OldSchoolHeading"
import ButtonGhost from "../../components/buttons/ButtonGhost"

const StyledHeadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.dark};
  padding: 120px;
  @media (max-width: 879px) {
    padding: 120px;
  }
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

const StyledHeadingWrapper = styled.div`
  max-width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export default function ReservationBottom() {
  return (
    <div>
      <StyledHeadingDiv>
        <StyledHeadingWrapper>
          <OldSchoolHeading whiteColor>
            You don't like filling out forms? Contact us in a more traditional
            way.
          </OldSchoolHeading>
          <ButtonGhost to="/contact" align="center">
            Contact
          </ButtonGhost>
        </StyledHeadingWrapper>
      </StyledHeadingDiv>
    </div>
  )
}
