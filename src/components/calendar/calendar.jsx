import React,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'


export const CalendarComponent = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <div>
                <Calendar onChange={onChange} value={value} className='react-calendar' />
            </div>

        </>
    )
}