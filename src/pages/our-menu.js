import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo/seo"
import styled from "styled-components"
import MenuBody from "../pagesParts/menu/MenuBody"
import PageHeader from "../components/pageHeader/PageHeader"

const StyledMainWrapper = styled.main`
  margin-top: 60px;
`

export default function OurMenuPage() {
  return (
    <Layout>
      <SEO
        title="Our Menu"
        description="The kitchen offers delicious specialties of the Sicilian tradition. Check menu in Mondello restaurant."
      />
      <StyledMainWrapper>
        <PageHeader
          heading="Our Menu"
          subheading="The kitchen offers delicious specialties of the Sicilian
          tradition, such as Arancini, Caponata and many more."
        />
        <MenuBody />
      </StyledMainWrapper>
    </Layout>
  )
}
