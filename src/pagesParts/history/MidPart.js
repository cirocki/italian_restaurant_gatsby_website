import React from "react"
import styled from "styled-components"
import MainParagraph from "../../components/typography/MainParagraph"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "../../layout/container/Container"

// MID
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
  }
`
const StyledMidGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
`
const StyledMidContentDiv = styled.div`
  grid-column: 1/5;
  grid-row: 1/7;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledMidImgDiv = styled.div`
  min-height: 480px;
  grid-column: 9/13;
  grid-row: 3/7;
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
              autem pariatur dolor, inventore et ad sint dolores est similique
              eius facilis? Assumenda repudiandae tempore consequatur nemo
              praesentium, enim magni eos dolores! Possimus magnam, sed
              reprehenderit deleniti veritatis ea modi aliquam, laborum
              perspiciatis eligendi sequi, quaerat culpa.
            </MainParagraph>
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
