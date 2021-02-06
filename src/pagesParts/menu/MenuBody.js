import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import gsap from "gsap"
import Container from "../../layout/container/Container"
import MenuTabs from "./MenuTabs"
import MenuItems from "./MenuItems"
import MenuBottom from "./MenuBottom"

const StyledMainWrapper = styled(BackgroundImage)`
  background: ${props => props.theme.colors.light};
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;
`

const StyledMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 120px 0;
  @media (max-width: 869px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 619px) {
    padding: 60px 10px;
  }
`
const StyledTabsPart = styled.div`
  grid-column: 1/3;
  padding-top: 60px;
  @media (max-width: 869px) {
    padding: 10px 0;
  }
`
const StyledCardPart = styled.div`
  grid-column: 3/12;
  padding: 120px;
  background: ${props => props.theme.colors.white};
  @media (max-width: 1199px) {
    grid-column: 3/13;
  }
  @media (max-width: 869px) {
    padding: 20px;
  }
`

export default function MenuBody() {
  // TABS FUNCTIONALITY
  const [activeTab, setActiveTab] = useState(1)

  const changeTab = id => {
    setActiveTab(id)
  }

  // GSAP
  let contentRef = useRef(null)
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      {
        autoAlpha: 0,
      },
      { autoAlpha: 1, ease: "power4.inOut" }
    )
  }, [activeTab])

  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "subpages/menu/mondello-menu-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.file.childImageSharp.fluid

  return (
    <StyledMainWrapper Tag="main" fluid={imageData} backgroundColor={`#ffffff`}>
      <Container>
        <StyledMainGrid>
          <StyledTabsPart>
            <MenuTabs changeTab={changeTab} activeTab={activeTab} />
          </StyledTabsPart>
          <StyledCardPart>
            <div ref={contentRef}>
              <MenuItems activeTab={activeTab} />
            </div>
          </StyledCardPart>
        </StyledMainGrid>
      </Container>
      <MenuBottom />
    </StyledMainWrapper>
  )
}
