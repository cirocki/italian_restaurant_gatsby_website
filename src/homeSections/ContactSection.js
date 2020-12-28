import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  background: ${props => props.theme.colors.dark};
  min-height: 480px;
`

export default function ContactSection() {
  return <StyledSection></StyledSection>
}
