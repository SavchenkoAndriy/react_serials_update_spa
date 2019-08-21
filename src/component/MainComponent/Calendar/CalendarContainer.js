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

let MapStateToProps = (state) => {
    return {
        data: state.Main.data,
    }
};

const CalendarContainer = connect(MapStateToProps, MapDispatchToProps)(Calendar);

export default CalendarContainer;