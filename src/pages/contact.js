import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo/seo"
import styled from "styled-components"
import ContactMain from "../pagesParts/contact/ContactMain"
import PageHeader from "../components/pageHeader/PageHeader"

const StyledMainWrapper = styled.main`
  margin-top: 60px;
`

export default function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="There are many great restaurants in Palermo, 
        but only one is famous in the entire Apennine peninsula."
      />
      <StyledMainWrapper>
        <PageHeader
          heading="Contact"
          subheading="There are many great restaurants in Palermo, 
          but only one is famous in the entire Apennine peninsula."
        />
        <ContactMain />
      </StyledMainWrapper>
    </Layout>
  )
}
