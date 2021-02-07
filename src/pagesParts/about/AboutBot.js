import React from "react"
import styled from "styled-components"
import Container from "../../layout/container/Container"
import logoImage from "../../img/branding/Mondello Restaurant logo.svg"
import OldSchoolHeading from "../../components/typography/OldSchoolHeading"
import MainParagraph from "../../components/typography/MainParagraph"
import ButtonGhost from "../../components/buttons/ButtonGhost"

const StyledMainWrapper = styled.div`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 50%;
    background: ${props => props.theme.colors.dark};
    z-index: -1;
    @media (max-width: 879px) {
      display: none;
    }
  }
`
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  @media (max-width: 879px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledHeadingDiv = styled.div`
  grid-column: 1/13;
  grid-row: 1/5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.dark};
  @media (max-width: 879px) {
    padding: 120px;
  }
  @media (max-width: 619px) {
    padding: 60px;
  }
  @media (max-width: 429px) {
    padding: 40px;
  }
  @media (max-width: 359px) {
    padding: 40px 20px;
  }
`
const StyledBrandingDiv = styled.div`
  grid-column: 1/7;
  grid-row: 5/9;
  min-height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 879px) {
    min-height: 0;
    padding: 80px 40px 0 40px;
  }
  @media (max-width: 429px) {
    padding: 60px 40px 0 40px;
  }
`
const StyledContentDiv = styled.div`
  grid-column: 7/12;
  grid-row: 5/9;
  display: flex;
  align-items: center;
  @media (max-width: 879px) {
    padding: 120px;
  }
  @media (max-width: 619px) {
    padding: 60px;
  }
  @media (max-width: 429px) {
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
const StyledLogo = styled.img`
  max-width: 360px;
`

export default function AboutBot() {
  return (
    <StyledMainWrapper>
      <Container>
        <StyledGrid>
          <StyledHeadingDiv>
            <StyledHeadingWrapper>
              <OldSchoolHeading whiteColor>
                You already know a lot about our team and our priorities. It's
                time to check our menu and taste real Italian food.
              </OldSchoolHeading>
              <ButtonGhost to="/our-menu" align="center">
                Check Our Menu
              </ButtonGhost>
            </StyledHeadingWrapper>
          </StyledHeadingDiv>
          <StyledBrandingDiv>
            <StyledLogo
              src={logoImage}
              alt="Mondello Restaurant logo"
            ></StyledLogo>
          </StyledBrandingDiv>
          <StyledContentDiv>
            <MainParagraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </MainParagraph>
          </StyledContentDiv>
        </StyledGrid>
      </Container>
    </StyledMainWrapper>
  )
}
