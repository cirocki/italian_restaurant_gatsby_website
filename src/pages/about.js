import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Container from "../layout/container/Container"
import AboutHeader from "../pagesParts/about/AboutHeader"

const StyledMainDiv = styled.main`
  margin-top: 60px;
`

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Mondello Restaurant</title>
      </Helmet>
      <StyledMainDiv>
        <AboutHeader />
      </StyledMainDiv>
    </Layout>
  )
}
