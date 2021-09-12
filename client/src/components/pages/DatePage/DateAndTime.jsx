import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import DateTimeP from '../../dateTimePicker/DateTimePickerComponent';

export default function DateAndTime() {
    return (
        <div>
            <h1>Service name vsdvdsvdsv</h1>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimeP/>
            </MuiPickersUtilsProvider>
            <button></button>
        </div>
    )
}



