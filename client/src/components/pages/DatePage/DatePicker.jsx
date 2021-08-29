import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function DateTimePicker() {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div>
            <h1>Service name</h1>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/mm/yyyy'
                minDate={new Date()}
                filterDate = {date => date.getDay()!=1 && date.getDay()!= 6 }
            />
            <button></button>
        </div>
    )
}



