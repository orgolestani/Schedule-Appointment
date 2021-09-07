import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateTimePicker() {
    const [selectedDate, setSelectedDate] =useState(null)
    return (
        <div>
           <DatePicker
selected={selectedDate}
onChange={date => setSelectedDate(date)}
dateFormat = 'dd/mm/yyyy'
           /> 
        </div>
    )
}

export default DateTimePicker;
