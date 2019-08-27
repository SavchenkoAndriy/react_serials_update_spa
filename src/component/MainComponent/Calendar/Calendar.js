import React from 'react';
import ReactCalendar from 'react-calendar';
import './calendar.sass';


const Calendar = (props) => {

    return (
        <div>
            <ReactCalendar value={props.data} onChange={props.setData}/>
        </div>
    );
};

export default Calendar;