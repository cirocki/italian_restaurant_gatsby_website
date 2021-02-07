import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo/seo"
import styled from "styled-components"

import PageHeader from "../components/pageHeader/PageHeader"
import TopPart from "../pagesParts/history/TopPart"
import MidPart from "../pagesParts/history/MidPart"
import BotPart from "../pagesParts/history/BotPart"

const StyledMainWrapper = styled.main`
  margin-top: 60px;
`

export default function HistoryPage() {
  return (
    <Layout>
      <SEO
        title="Our History"
        description="Since 1975, we build the brand of our restaurant around the idea of authentic traditional Italian food."
      />
      <StyledMainWrapper>
        <PageHeader
          heading="Our History"
          subheading="Since 1975, we build the brand of our restaurant around the idea of authentic traditional Italian food."
        />
        <TopPart />
        <MidPart />
        <BotPart />
      </StyledMainWrapper>
    </Layout>
  )
}
