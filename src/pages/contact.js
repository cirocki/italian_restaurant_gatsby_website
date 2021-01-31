import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Container from "../layout/container/Container"
import ContactHeader from "../pagesParts/contact/ContactHeader"
import MyMap from "../pagesParts/contact/MyMap"

const StyledMainDiv = styled.main`
  padding: 4rem 0;
`
const StyledMapWrapper = styled.main`
  height: 480px;
  width: auto;
`

export default function ContactPage() {
  return (
    <Layout>
      <Helmet>
        <title>Contact | Mondello Restaurant</title>
      </Helmet>
      <StyledMainDiv>
        <ContactHeader />
        <Container>
          <StyledMapWrapper>
            <MyMap />
          </StyledMapWrapper>
        </Container>
      </StyledMainDiv>
    </Layout>
  )
}
