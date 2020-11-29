import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
`

export default function Container({ children }) {
  return <StyledDiv>{children}</StyledDiv>
}
