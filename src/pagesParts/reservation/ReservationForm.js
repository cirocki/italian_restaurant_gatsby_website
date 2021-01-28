import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"

import TextField from "@material-ui/core/TextField"
import "date-fns"

import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers"

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
      case "min":
        return "You can reserve a minimum of 2 places."
      case "max":
        return "You can reserve a maximum of 20 places"
      default:
        break
    }
  }

  const [selectedDate, setSelectedDate] = React.useState(new Date())

  const handleDateChange = date => {
    setSelectedDate(date)
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
          inputRef={register({ required: true, min: 2, max: 20 })}
          helperText={switchErrorMsg(errors.guests?.type)}
          name="guests"
          id="guests"
          label="Guests"
          type="number"
          variant="outlined"
        />
        <TextField
          inputRef={register}
          name="more"
          id="more"
          label="Additional Info"
          multiline
          rows={8}
          variant="outlined"
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>

        <div>
          <button type="submit">Make reservation</button>
        </div>
      </form>
    </StyledFormWrapper>
  )
}
