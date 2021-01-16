import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Container from "../layout/container/Container"

const StyledMainDiv = styled.main`
  padding: 4rem 0;
`

export default function PageNotFound() {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found | Mondello Restaurant</title>
      </Helmet>
      <StyledMainDiv>
        <Container>
          <h1>404</h1>
          <h2>Page Not Found</h2>
        </Container>
      </StyledMainDiv>
    </Layout>
  )
}
