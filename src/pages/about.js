import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo/seo"
import styled from "styled-components"
import PageHeader from "../components/pageHeader/PageHeader"
import AboutTop from "../pagesParts/about/AboutTop"
import AboutMid from "../pagesParts/about/AboutMid"
import AboutBot from "../pagesParts/about/AboutBot"

const StyledMainDiv = styled.main`
  margin-top: 60px;
`

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="We believe that food brings people together, so we care for every detail, to make your visit here unforgettable."
      />
      <StyledMainDiv>
        <PageHeader
          heading="About Us"
          subheading="We believe that food brings people together, so we care for every detail, to make your visit here unforgettable."
        />
        <AboutTop />
        <AboutMid />
        <AboutBot />
      </StyledMainDiv>
    </Layout>
  )
}
