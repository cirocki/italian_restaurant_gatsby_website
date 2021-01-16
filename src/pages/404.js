import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Container from "../layout/container/Container"

const StyledSection = styled.main`
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  display: grid;
`
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledHeading = styled.h1`
  font-size: 120px;
`

export default function PageNotFound() {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found | Mondello Restaurant</title>
      </Helmet>
      <StyledSection>
        <StyledWrapper>
          <StyledHeading>404</StyledHeading>
          <h2>Page Not Found</h2>
        </StyledWrapper>
      </StyledSection>
    </Layout>
  )
}
