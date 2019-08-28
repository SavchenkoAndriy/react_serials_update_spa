import React from 'react';
import {setDataTC, setNumberSerialOnPageAC} from "../../../redux/reducers/main";
import {connect} from "react-redux";
import Calendar from "./Calendar";



// class setCalendar extends React.Component {
//
//     componentDidUpdate(prevProps) {
//         return prevProps.numberSerials !== this.props.numberSerials
//     }
//
//     // setStyle = (data) => {
//     //     if (this.props.numberSerials === data.target.value){
//     //         return Active;
//     //     } else return NoActive;
//     // }
//
//
//     render() {
//         return <Calendar {...this.props}/>
//     };
// }



let MapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setDataTC(data))
        },
        setSerialOnPage: (data) => {
            dispatch(setNumberSerialOnPageAC(data.target.value))
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