import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DatePicker({ setDate, getDates, setAvHour, doctorId }) {
  // The first commit of Material-UI

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  // const [open, setOpen] = React.useState(false);
  const today = new Date();
  const convert = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const PostDate = (date) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(date)
    };

    fetch('https://acrux-hospital.herokuapp.com/day/date', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  const handleDateChange = (date) => {
    // console.log({ date: convert(date), doctorId })
    setSelectedDate(date)
    setDate(convert(date))
    PostDate({ date: convert(date), doctorId })
    setTimeout(() => getDates(), 200)
    setAvHour(null)
  };



  return (
    <div>


      <MuiPickersUtilsProvider utils={DateFnsUtils} style={{ width: '30%' }}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Book an appoinment"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            minDate={today}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
}