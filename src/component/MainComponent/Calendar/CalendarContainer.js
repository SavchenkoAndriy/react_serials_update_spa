import React from 'react';
import {setDataTC, setNumberSerialOnPageAC} from "../../../redux/reducers/main";
import {connect} from "react-redux";
import ReactCalendar from "react-calendar";
import './calendar.sass';



class setCalendar extends React.Component {



    render() {
        const filmOnPage = [6,8,10];

        let Buttons = filmOnPage.map(number => {
            if(number === this.props.numberSerials){
                return <button className={'active'} onClick={this.props.setSerialOnPage} value={number}>{number}</button>
            } else return <button onClick={this.props.setSerialOnPage} value={number}>{number}</button>
        });

        return (
            <div>
            <ReactCalendar value={this.props.data} onChange={this.props.setData}/>
            <div>
                <div>Кількість серіалів на сторінці:</div>
                <div className={'buttonValue'}>
                    {Buttons}
                </div>
            </div>
        </div>
        )
    };
}



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
        numberSerials: state.Main.numberSerials
    }
};

const CalendarContainer = connect(MapStateToProps, MapDispatchToProps)(setCalendar);

export default CalendarContainer;