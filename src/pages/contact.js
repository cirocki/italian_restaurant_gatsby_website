import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Container from "../layout/container/Container"
import ContactHeader from "../pagesParts/contact/ContactHeader"

const StyledMainDiv = styled.main`
  padding: 4rem 0;
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
          <h1>Contact</h1>
        </Container>
      </StyledMainDiv>
    </Layout>
  )
}
