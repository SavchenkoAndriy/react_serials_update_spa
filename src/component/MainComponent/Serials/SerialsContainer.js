import React from 'react';
import Serials from "./Serials";
import {getSerialsListTC, setCurrentPageAC, setFavoritesListAC} from "../../../redux/reducers/main";
import {connect} from "react-redux";
import Preloader from "../../preloader/Preloader";


class setSerials extends React.Component {

    start = (this.props.CurrentPage * this.props.numberSerials - this.props.numberSerials);
    end = this.props.CurrentPage * this.props.numberSerials;



    state = {
        serialList: this.props.SerialList.slice(this.start, this.end),
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.CurrentPage !== this.props.CurrentPage ||
            nextProps.numberSerials !== this.props.numberSerials ||
            nextProps.SerialList !== this.props.SerialList
        ) {

            let start = (nextProps.CurrentPage * nextProps.numberSerials - nextProps.numberSerials);
            let end = nextProps.CurrentPage * nextProps.numberSerials;


            this.setState({
                    serialList: nextProps.SerialList.slice(start, end)
                }
            );
        }
    }



    componentDidMount() {
        this.props.getSerialsList(this.props.data);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Serials CurrentPage={this.CurrentPage} setCurrentPage={this.props.setCurrentPage} serialList={this.state.serialList} {...this.props}/>}
        </>
    };
}


let MapStateToProps = (state) => {
    return {
        data: state.Main.data,
        SerialList: state.Main.SerialList,
        numberSerials: state.Main.numberSerials,
        CurrentPage: state.Main.CurrentPage,
    }
};

let MapDispatchToProps = (dispatch) => {
    return {
        getSerialsList: (data) => {
            dispatch(getSerialsListTC(data))
        },
        setFavoritesList: (serial) => {
            dispatch(setFavoritesListAC(serial))
        },
        setCurrentPage: (number)=>{
            dispatch(setCurrentPageAC(number));
        }
    }
};

const SerialsContainer = connect(MapStateToProps, MapDispatchToProps)(setSerials);

export default SerialsContainer;