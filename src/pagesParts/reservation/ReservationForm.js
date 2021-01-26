import React from "react"
import { useForm } from "react-hook-form"
import Input from "@material-ui/core/Input"
import styled from "styled-components"
import TextField from "@material-ui/core/TextField"

const StyledFormWrapper = styled.div`
  padding: 4rem;
`

export default function ReservationForm() {
  const { register, errors, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="first name"
          variant="outlined"
          name="firstName"
          ref={register({ required: true })}
        />
        {errors.firstName && "First name is required"}
        {/* <Input name="lastName" ref={register({ required: true })} />
        {errors.lastName && "Last name is required"} */}
        <input type="submit" />
      </form>
    </StyledFormWrapper>
  )
}
