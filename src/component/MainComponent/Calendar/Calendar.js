import React from 'react';
import ReactCalendar from 'react-calendar';


const Calendar = (props) => {

    return (
        <div>
            <p>Calendar work</p>
            <ReactCalendar value={props.data} onChange={props.setData}/>
        </div>
    );
};

export default Calendar;