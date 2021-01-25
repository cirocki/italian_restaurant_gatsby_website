import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Container from "../../layout/container/Container"
import MenuTabs from "./MenuTabs"
import MenuItems from "./MenuItems"
import MenuBottom from "./MenuBottom"
import { fadeBottom } from "../../components/animations/Animation"
import gsap from "gsap"

const StyledMainWrapper = styled(BackgroundImage)`
  background: ${props => props.theme.colors.light};
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;
`

const StyledMainGrid = styled.div`
  padding: 120px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: start;
`
const StyledSelectPart = styled.div`
  padding-top: 60px;
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
        file(relativePath: { eq: "subpages/menu/menu-bg-mondello3.jpg" }) {
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
    <StyledMainWrapper Tag="div" fluid={imageData} backgroundColor={`#ffffff`}>
      <Container>
        <StyledMainGrid>
          <StyledSelectPart>
            <MenuTabs changeTab={changeTab} activeTab={activeTab} />
          </StyledSelectPart>
          <StyledCardPart>
            <div ref={contentRef}>
              <MenuItems activeTab={activeTab} />
            </div>
          </StyledCardPart>
        </StyledMainGrid>
      </Container>
      <MenuBottom></MenuBottom>
    </StyledMainWrapper>
  )
}
