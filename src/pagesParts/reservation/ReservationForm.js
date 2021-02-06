import React from "react"
import styled from "styled-components"
import { useForm, Controller } from "react-hook-form"
import DateFnsUtils from "@date-io/date-fns"
import TextField from "@material-ui/core/TextField"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import SubmitButton from "../../components/buttons/SubmitButton"

const StyledForm = styled.form`
  padding: 40px;
  max-width: 800px;
  background: ${props => props.theme.colors.white};
  @media (max-width: 359px) {
    padding: 20px;
  }
`
const StyledInputWrapper = styled.div`
  padding: 20px 0;
  @media (max-width: 769px) {
    padding: 10px 0;
  }
`
const StyledInputsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 769px) {
    grid-gap: 0px;
    grid-template-columns: 1fr;
  }
`

export default function ReservationForm() {
  const { register, handleSubmit, errors, control } = useForm()
  const onSubmit = data => {
    const { name, surname, guests, phone, day, time, more } = data
    let myDate =
      day.getUTCDate() + "/" + (day.getMonth() + 1) + "/" + day.getUTCFullYear()

    alert(
      `Thank You ${name}!
      \nYou booked a table for ${guests} persons.
      \nReservation details:
      \nName: ${name},
      \nSurname: ${surname}
      \nPhone: ${phone}
      \nGuests: ${guests}
      \nDate: ${myDate}
      \nTime: ${time}
      \nAdditional Info: ${more}
      `
    )
  }

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

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputsGrid>
        <StyledInputWrapper>
          <TextField
            inputRef={register({ required: true, minLength: 3 })}
            type="text"
            name="name"
            id="name"
            label="Name"
            variant="outlined"
            color="primary"
            fullWidth={true}
            helperText={switchErrorMsg(errors.name?.type)}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <TextField
            inputRef={register({ required: true, minLength: 3 })}
            type="text"
            name="surname"
            id="surname"
            label="Surname"
            variant="outlined"
            color="primary"
            fullWidth={true}
            helperText={switchErrorMsg(errors.surname?.type)}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <TextField
            inputRef={register({ required: true, minLength: 3 })}
            type="text"
            name="phone"
            id="phone"
            label="Phone"
            variant="outlined"
            color="primary"
            fullWidth={true}
            helperText={switchErrorMsg(errors.phone?.type)}
          />
        </StyledInputWrapper>
      </StyledInputsGrid>
      <StyledInputsGrid>
        <StyledInputWrapper>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              name="day"
              control={control}
              defaultValue={new Date()}
              render={({ onChange, value }) => (
                <KeyboardDatePicker
                  disableToolbar
                  format="dd/MM/yyyy"
                  inputVariant="outlined"
                  fullWidth={true}
                  name="day"
                  id="day"
                  label="Date"
                  value={value}
                  onChange={onChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              )}
            />
          </MuiPickersUtilsProvider>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <TextField
            inputRef={register}
            name="time"
            id="time"
            label="Time"
            type="time"
            variant="outlined"
            fullWidth={true}
            defaultValue="18:00"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 600, // 10 min
            }}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <TextField
            defaultValue={2}
            inputRef={register({ required: true, min: 2, max: 20 })}
            helperText={switchErrorMsg(errors.guests?.type)}
            InputProps={{
              inputProps: {
                max: 20,
                min: 2,
              },
            }}
            name="guests"
            id="guests"
            label="Guests"
            type="number"
            variant="outlined"
            fullWidth={true}
          />
        </StyledInputWrapper>
      </StyledInputsGrid>

      <StyledInputWrapper>
        <TextField
          inputRef={register}
          name="more"
          id="more"
          label="Additional Info"
          multiline
          rows={7}
          variant="outlined"
          fullWidth={true}
        />
      </StyledInputWrapper>
      <SubmitButton>Make reservation</SubmitButton>
    </StyledForm>
  )
}
