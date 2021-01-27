import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import OutlinedInput from "@material-ui/core/OutlinedInput"

const StyledFormWrapper = styled.div`
  padding: 4rem;
`

export default function ReservationForm() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.name?.type === "required" && "Your name is required"}
          {errors.name?.type === "minLength" && "At least 3 characters."}
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            id="surname"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.surname?.type === "required" && "Your surname is required"}
          {errors.surname?.type === "minLength" && "At least 3 characters."}
        </div>
        <div>
          <label htmlFor="phone">Your phone number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            ref={register({ required: true, minLength: 8 })}
          />
          {errors.phone?.type === "required" && "Your phone is required"}
          {errors.phone?.type === "minLength" && "At least 8 characters."}
        </div>
        <div>
          <label htmlFor="more">Other info.</label>
          <textarea name="more" id="more" cols="30" rows="10" ref={register} />
        </div>
        <h1>guests</h1>
        <h1>date time</h1>
        <div>
          <button type="submit">Reserve Table</button>
        </div>
      </form>
    </StyledFormWrapper>
  )
}
