import React from "react"
import styled from "styled-components"

const StyledEmailInput = styled.input`
  padding: 6px 12px;
  margin-right: -2px;
  display: inline-block;
  vertical-align: middle;
  width: auto;
  -webkit-appearance: none;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.grey};
  border: 2px solid ${props => props.theme.colors.grey};
  border-right: none;
  border-radius: 0px;
  font-family: ${props => props.theme.fonts.primary};
`
const StyledSubmitInput = styled.input`
  padding: 8px 36px;
  vertical-align: middle;
  background-color: ${props => props.theme.colors.gold};
  color: ${props => props.theme.colors.dark};
  border: none;
  border-radius: 0px;
  font-family: ${props => props.theme.fonts.primary};
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.35s;
  &:hover {
    background: #b7ac83;
  }
`

export default function NewsletterForm() {
  const stopFunction = e => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={stopFunction}>
        <StyledEmailInput
          type="email"
          name="email"
          placeholder="Your email address"
        />
        <StyledSubmitInput type="submit" value="Submit" />
      </form>
    </div>
  )
}
