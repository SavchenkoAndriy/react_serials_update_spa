import React from 'react';
import {connect} from "react-redux";
import {deleteSerialAC, getFavoritesListAC, setInfoSerialAC} from "../../redux/reducers/main";
import Preloader from "../preloader/Preloader";
import FavoritesComponent from "./FavoritesComponent";


class getFavoritesSerials extends React.Component {

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <FavoritesComponent {...this.props}/>}
        </>
    };
}


let MapStateToProps = (state) => {
    return {
        FavoritesSerials: state.Main.FavoritesSerials,
        InfoSerial: state.Main.InfoSerial,
    }
};

let MapDispatchToProps = (dispatch) => {
    return {
        getSerialsList: () => {
            dispatch(getFavoritesListAC())
        },
        deleteSerial: (serial) => {
            dispatch(deleteSerialAC(serial))
        },
        setInfoSerial: (serial) => {
            dispatch(setInfoSerialAC(serial))
        },
    }
};

const FavoritesComponentContainer = connect(MapStateToProps, MapDispatchToProps)(getFavoritesSerials);

export default FavoritesComponentContainer;