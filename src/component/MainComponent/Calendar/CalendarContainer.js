import React from 'react';
import {setDataTC} from "../../../redux/reducers/main";
import {connect} from "react-redux";
import Calendar from "./Calendar";


let MapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setDataTC(data))
        },
    }
};

const CalendarContainer = connect(null, MapDispatchToProps)(Calendar);

export default CalendarContainer;