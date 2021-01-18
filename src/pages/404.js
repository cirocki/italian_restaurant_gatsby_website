import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const StyledSection = styled.main`
  margin-top: 60px;
  min-height: calc(100vh - 120px);
  display: grid;
`
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledHeading = styled.h1`
  padding-bottom: 2rem;
  font-size: 260px;
  letter-spacing: 10px;
  @media (max-width: 767px) {
    font-size: 120px;
    letter-spacing: 4px;
  }
`
const StyledSubheading = styled.h2`
  color: ${props => props.theme.colors.gold};
  font-size: 40px;
  @media (max-width: 767px) {
    font-size: 30px;
  }
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
          <StyledSubheading>Page Not Found</StyledSubheading>
        </StyledWrapper>
      </StyledSection>
    </Layout>
  )
}
