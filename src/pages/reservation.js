import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Container from "../layout/container/Container"

const StyledMainDiv = styled.main`
  padding: 4rem 0;
`

export default function ReservationPage() {
  return (
    <Layout>
      <Helmet>
        <title>Mondello Restaurant - example</title>
      </Helmet>
      <StyledMainDiv>
        <Container>
          <h1>Reservation</h1>
        </Container>
      </StyledMainDiv>
    </Layout>
  )
}
