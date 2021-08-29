import React from 'react'
import './DatePicker.css';
import Button from '../../button/Button';

import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
export default function DatePicker() {
    const dateValue = new Date("02/05/2021 10:30 AM");
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " "  
    + currentdate.getHours() + ":"  
    +"0" + currentdate.getMinutes() 
    console.log(datetime);
    const maxDate = new Date("02/06/2021 06:00 PM");
    const minDate = datetime;
    return (



        <div className='main'>
            <h1>Choose time and date!</h1>
            <div className='date-picker'>
                <DateTimePickerComponent placeholder="Choose a date and time"
                    filterDate={date => date.getday() != 5 && date.getday() != 0}

                    value={dateValue}
                    min={minDate}
                    max={maxDate}
                    format="dd-MMM-yy HH:mm"
                    step={60}></DateTimePickerComponent>
            </div>
            <Button clickHandler={() => { alert('submited') }} buttonText='Submit' />
        </div>

    );




}
