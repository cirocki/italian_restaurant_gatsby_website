import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo/seo"
import styled from "styled-components"
import PageHeader from "../components/pageHeader/PageHeader"
import ReservationMid from "../pagesParts/reservation/ReservationMid"
import ReservationBottom from "../pagesParts/reservation/ReservationBottom"

const StyledMainWrapper = styled.main`
  margin-top: 60px;
  background: ${props => props.theme.colors.light};
`

export default function OurMenuPage() {
  return (
    <Layout>
      <SEO
        title="Reservation"
        description="There are always new and exciting food adventures waiting for You.
        Book your favourite table in Mondello."
      />
      <StyledMainWrapper>
        <PageHeader
          heading="Reservation"
          subheading="There are always new and exciting food adventures waiting for You.
          Book your favourite table in Mondello."
        />
        <ReservationMid />
        <ReservationBottom />
      </StyledMainWrapper>
    </Layout>
  )
}
