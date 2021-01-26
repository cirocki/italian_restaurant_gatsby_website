import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Container from "../layout/container/Container"
import ReservationHeader from "../pagesParts/reservation/ReservationHeader"
import ReservationForm from "../pagesParts/reservation/ReservationForm"

const StyledMainDiv = styled.main`
  margin-top: 60px;
`

export default function OurMenuPage() {
  return (
    <Layout>
      <Helmet>
        <title>Reservation | Mondello Restaurant</title>
      </Helmet>
      <StyledMainDiv>
        <ReservationHeader />
        <Container>
          <ReservationForm />
        </Container>
      </StyledMainDiv>
    </Layout>
  )
}
