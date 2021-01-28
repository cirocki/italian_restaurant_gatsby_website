import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"

import TextField from "@material-ui/core/TextField"

const StyledFormWrapper = styled.div`
  padding: 4rem;
`

export default function ReservationForm() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  let switchErrorMsg = errors => {
    switch (errors) {
      case "required":
        return "This field is required."
      case "minLength":
        return "At least 3 characters."
      default:
        break
    }
  }
  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            inputRef={register({ required: true, minLength: 3 })}
            type="text"
            name="name"
            id="name"
            label="Name"
            variant="outlined"
            color="primary"
            helperText={switchErrorMsg(errors.name?.type)}
          />
        </div>
        <div>
          <TextField
            inputRef={register({ required: true, minLength: 3 })}
            type="text"
            name="surname"
            id="surname"
            label="Surname"
            variant="outlined"
            color="primary"
            helperText={switchErrorMsg(errors.surname?.type)}
          />
        </div>
        <div>
          <TextField
            inputRef={register({ required: true, minLength: 3 })}
            type="text"
            name="phone"
            id="phone"
            label="Phone number"
            variant="outlined"
            color="primary"
            helperText={switchErrorMsg(errors.phone?.type)}
          />
        </div>

        <TextField
          inputRef={register}
          name="more"
          id="more"
          label="Additional Info"
          multiline
          rows={8}
          variant="outlined"
        />

        <h1>guests</h1>
        <h1>date time</h1>
        <div>
          <button type="submit">Reserve Table</button>
        </div>
      </form>
    </StyledFormWrapper>
  )
}
