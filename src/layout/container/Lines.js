import React from "react"
import styled from "styled-components"

const StyledGrid = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  max-width: 1440px;
`
const StyledSpanOne = styled.span`
  display: block;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 1px;
  height: 100%;
  background: #e5e5e5;
  left: ;
`
const StyledSpanTwo = styled.span`
  display: block;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 1px;
  height: 100%;
  background: #e5e5e5;
  left: 33.33%;
`
const StyledSpanThree = styled.span`
  display: block;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 1px;
  height: 100%;
  background: #e5e5e5;
  left: 66.67%;
`
const StyledSpanFour = styled.span`
  display: block;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 1px;
  height: 100%;
  background: #e5e5e5;
  left: 100%;
`

export default function Lines() {
  return (
    <StyledGrid>
      <StyledSpanOne />
      <StyledSpanTwo />
      <StyledSpanThree />
      <StyledSpanFour />
    </StyledGrid>
  )
}
