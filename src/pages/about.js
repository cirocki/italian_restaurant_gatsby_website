import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Container from "../layout/container/Container"

const StyledMainDiv = styled.main`
  min-height: 120vh;
  padding: 8rem 0;
`

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Mondello Restaurant</title>
      </Helmet>
      <StyledMainDiv>
        <Container>
          <h1>About page</h1>
        </Container>
      </StyledMainDiv>
    </Layout>
  )
}
