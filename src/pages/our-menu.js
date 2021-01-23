import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Container from "../layout/container/Container"
import MenuHeader from "../pagesParts/menu/MenuHeader"
import MenuBody from "../pagesParts/menu/MenuBody"

const StyledMainDiv = styled.main`
  margin-top: 60px;
`

export default function OurMenuPage() {
  return (
    <Layout>
      <Helmet>
        <title>Our Menu | Mondello Restaurant</title>
      </Helmet>
      <StyledMainDiv>
        <MenuHeader />
        <MenuBody />
      </StyledMainDiv>
    </Layout>
  )
}
