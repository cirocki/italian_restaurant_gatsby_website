import React from "react"
import styled from "styled-components"

const StyledForm = styled.form`
  @media (max-width: 382px) {
    display: grid;
  }
`

const StyledEmailInput = styled.input`
  padding: 6px 12px;
  display: inline-block;
  vertical-align: middle;
  height: 40px;
  width: auto;
  -webkit-appearance: none;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.grey};
  border: 2px solid ${props => props.theme.colors.grey};
  border-right: none;
  border-radius: 0px;
  font-family: ${props => props.theme.fonts.primary};
  @media (max-width: 382px) {
    border: 2px solid ${props => props.theme.colors.grey};
  }
`
const StyledSubmitInput = styled.input`
  padding: 10px 36px;
  vertical-align: middle;
  background-color: ${props => props.theme.colors.gold};
  color: ${props => props.theme.colors.dark};
  border: none;
  border-radius: 0px;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.875rem;
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
      <StyledForm onSubmit={stopFunction}>
        <StyledEmailInput
          type="email"
          name="email"
          placeholder="Your email address"
        />
        <StyledSubmitInput type="submit" value="Submit" />
      </StyledForm>
    </div>
  )
}
