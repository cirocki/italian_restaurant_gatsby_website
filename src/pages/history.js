import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import HistoryHeader from "../pagesParts/history/HistoryHeader"
import TopPart from "../pagesParts/history/TopPart"
import MidPart from "../pagesParts/history/MidPart"
import BotPart from "../pagesParts/history/BotPart"

const StyledMainDiv = styled.main`
  margin-top: 60px;
`

export default function HistoryPage() {
  return (
    <Layout>
      <Helmet>
        <title>Our History | Mondello Restaurant</title>
      </Helmet>
      <StyledMainDiv>
        <HistoryHeader />
        {/* <TopPart />
        <MidPart />
        <BotPart /> */}
      </StyledMainDiv>
    </Layout>
  )
}
