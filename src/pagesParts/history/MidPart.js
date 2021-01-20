import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "../../layout/container/Container"
import MainParagraph from "../../components/typography/MainParagraph"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCocktail,
  faLandmark,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons"

const StyledMidWrapper = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 50vw;
    height: calc(100% - 240px);
    background: ${props => props.theme.colors.light};
    z-index: -10;
    @media (max-width: 879px) {
      display: none;
    }
  }
`
const StyledMidGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  @media (max-width: 879px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledMidContentDiv = styled.div`
  grid-column: 2/6;
  grid-row: 1/7;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    padding: 20px;
  }
`
const StyledMidImgDiv = styled.div`
  grid-column: 9/13;
  grid-row: 3/7;
  min-height: 480px;
  @media (max-width: 879px) {
    min-height: 0;
    display: flex;
    justify-content: center;
  }
`

const StyledList = styled.ul`
  padding-top: 2rem;
`
const StyledItem = styled.li`
  display: flex;
  padding: 1rem 0;
  font-size: 1.125rem;
`
const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin: 0 1.5rem;
  @media (max-width: 359px) {
    margin-left: 0;
  }
`

export default function MidPart() {
  const data = useStaticQuery(graphql`
    query {
      image2: file(relativePath: { eq: "subpages/history/italian-mask.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 480, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <StyledMidWrapper>
      <Container>
        <StyledMidGrid>
          <StyledMidContentDiv>
            <MainParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              autem pariatur dolor, met consectetur adip aliquid dolor inventore
              et ad sint dolores est similique eius facilis:
            </MainParagraph>
            <StyledList>
              <StyledItem>
                <StyledIcon icon={faCocktail} />
                <MainParagraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  mollitia aliquid dolor.
                </MainParagraph>
              </StyledItem>
              <StyledItem>
                <StyledIcon icon={faLandmark} />
                <MainParagraph>
                  Lorem ipsum dolor sit amet consectetur elit. Doloribus
                  voluptatum delectus aliquid dolor sed.
                </MainParagraph>
              </StyledItem>
              <StyledItem>
                <StyledIcon icon={faPizzaSlice} />
                <MainParagraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo aliquid dolore eum.
                </MainParagraph>
              </StyledItem>
            </StyledList>
          </StyledMidContentDiv>
          <StyledMidImgDiv>
            <Img
              fluid={data.image2.childImageSharp.fluid}
              alt="Italian Traditional mask"
            />
          </StyledMidImgDiv>
        </StyledMidGrid>
      </Container>
    </StyledMidWrapper>
  )
}
