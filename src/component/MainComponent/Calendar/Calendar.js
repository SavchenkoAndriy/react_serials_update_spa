import React from 'react';
import ReactCalendar from 'react-calendar';
import './calendar.sass';


const Calendar = (props) => {


    return (
        <div>
            <ReactCalendar value={props.data} onChange={props.setData}/>
            <div>
                <div>Кількість серіалів на сторінці:</div>
                <div className={'buttonValue'}>
                    <button onClick={props.setSerialOnPage} value={6}>6</button>
                    <button onClick={props.setSerialOnPage} value={8}>8</button>
                    <button onClick={props.setSerialOnPage} value={10}>10</button>
                </div>
            </div>
        </div>
    );
};

export default Calendar;