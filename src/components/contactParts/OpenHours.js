import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  color: ${props => props.theme.colors.grey};
  line-height: 1.8;
`
const StyledList = styled.dl`
  display: flex;
  justify-content: space-between;
`
export default function OpenHours() {
  return (
    <StyledDiv>
      <StyledList>
        <dt>Monday - Friday</dt>
        <dd>8:00 am to 10:00 pm</dd>
      </StyledList>
      <StyledList>
        <dt>Saturday</dt>
        <dd>8:00 am to 11:30 pm</dd>
      </StyledList>
      <StyledList>
        <dt>Sunday</dt>
        <dd>11:00 am to 10:00 pm</dd>
      </StyledList>
    </StyledDiv>
  )
}
