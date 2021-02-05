import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import ContactHeader from "../pagesParts/contact/ContactHeader"
import ContactMain from "../pagesParts/contact/ContactMain"

const StyledMainDiv = styled.main`
  margin-top: 60px;
`

export default function ContactPage() {
  return (
    <Layout>
      <Helmet>
        <title>Contact | Mondello Restaurant</title>
      </Helmet>
      <StyledMainDiv>
        <ContactHeader />
        <ContactMain />
      </StyledMainDiv>
    </Layout>
  )
}
