import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const StyledMainDiv = styled.main`
  padding: 8rem 0;
`

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>Mondello Restaurant - Napoli2</title>
      </Helmet>
      <StyledMainDiv>
        <h1>About page</h1>
      </StyledMainDiv>
    </Layout>
  )
}
