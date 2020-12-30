import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const StyledMainDiv = styled.main`
  padding: 4rem 0;
`

export default function ExamplePage() {
  return (
    <Layout>
      <Helmet>
        <title>Mondello Restaurant - example</title>
      </Helmet>
      <StyledMainDiv>
        <h1>Page example</h1>
      </StyledMainDiv>
    </Layout>
  )
}
