import React from "react"
import styled from "styled-components"
import Container from "../../layout/container/Container"
import OldSchoolHeading from "../../components/typography/OldSchoolHeading"
import MainParagraph from "../../components/typography/MainParagraph"
import ButtonGhost from "../../components/buttons/ButtonGhost"

const StyledMainWrapper = styled.div``

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
  max-width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export default function MenuBottom() {
  return (
    <StyledMainWrapper>
      <StyledHeadingDiv>
        <StyledHeadingWrapper>
          <OldSchoolHeading whiteColor>
            We also offer kid's portion and home delivery. Book a table online
            and check secret menu items in our restaurant.
          </OldSchoolHeading>
          <ButtonGhost to="/reservation" align="center">
            Reservation
          </ButtonGhost>
        </StyledHeadingWrapper>
      </StyledHeadingDiv>
    </StyledMainWrapper>
  )
}
