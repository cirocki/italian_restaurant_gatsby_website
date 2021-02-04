import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import PrivacyHeader from "../pagesParts/privacy/PrivacyHeader"
import PrivacyMain from "../pagesParts/privacy/PrivacyMain"

const StyledMainDiv = styled.main`
  padding: 4rem 0;
`

export default function PrivacyPage() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy | Mondello Restaurant</title>
      </Helmet>
      <StyledMainDiv>
        <PrivacyHeader />
        <PrivacyMain />
      </StyledMainDiv>
    </Layout>
  )
}
