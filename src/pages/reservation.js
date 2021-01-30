import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import ReservationHeader from "../pagesParts/reservation/ReservationHeader"
import ReservationMid from "../pagesParts/reservation/ReservationMid"
import ReservationBottom from "../pagesParts/reservation/ReservationBottom"

const StyledMainDiv = styled.main`
  margin-top: 60px;
  background: ${props => props.theme.colors.light};
`

export default function OurMenuPage() {
  return (
    <Layout>
      <Helmet>
        <title>Reservation | Mondello Restaurant</title>
      </Helmet>
      <StyledMainDiv>
        <ReservationHeader />
        <ReservationMid />
        <ReservationBottom />
      </StyledMainDiv>
    </Layout>
  )
}
