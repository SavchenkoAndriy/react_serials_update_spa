import React from 'react';
import Serials from "./Serials";
import {getSerialsListTC , setFavoritesListAC} from "../../../redux/reducers/main";
import {connect} from "react-redux";
import Preloader from "../../preloader/Preloader";


class setDish extends React.Component {

    componentDidMount() {
        this.props.getSerialsList(this.props.data);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Serials {...this.props}/>}
        </>
    };
}


let MapStateToProps = (state) => {
    return {
        data: state.Main.data,
        SerialList: state.Main.SerialList.slice(0, 5),
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
    }
};

const SerialsContainer = connect(MapStateToProps, MapDispatchToProps)(setDish);

export default SerialsContainer;