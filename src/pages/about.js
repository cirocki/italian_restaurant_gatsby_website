import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Container from "../layout/container/Container"
import AboutHeader from "../pagesParts/about/AboutHeader"
import AboutTop from "../pagesParts/about/AboutTop"
import AboutMid from "../pagesParts/about/AboutMid"
import AboutBot from "../pagesParts/about/AboutBot"

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
        <AboutTop />
        <AboutMid />
        <AboutBot />
      </StyledMainDiv>
    </Layout>
  )
}
