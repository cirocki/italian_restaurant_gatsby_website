import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background: gold;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
`

export default function Hamburger() {
  return (
    <div>
      <StyledButton>menu</StyledButton>
    </div>
  )
}
