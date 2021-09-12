import React, { useState } from 'react';
import useStyles from './styles';
// import { Paper, Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns'; 
import { DateTimePicker } from '@material-ui/pickers';

function DateTimePickerComponent() {
    const classes = useStyles();
    // const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
    <div >
          <DateTimePicker
        value={selectedDate}
        disablePast
        onChange={handleDateChange}
        label="With Today Button"
        showTodayButton
      />       
        </div>
    )
}

export default DateTimePickerComponent;
