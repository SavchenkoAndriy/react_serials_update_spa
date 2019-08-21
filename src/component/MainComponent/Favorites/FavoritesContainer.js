import React from 'react';
// import {getFavoritesSerialsListAC} from "../../../redux/reducers/main";
import {connect} from "react-redux";
import Favorites from "./Favorites";


let MapStateToProps = (state) => {
    return {
        FavoritesSerials: state.Main.FavoritesSerials,
    }
};

// let MapDispatchToProps = (dispatch) => {
//     return {
//         getSerialsList: (data) => {
//             dispatch(getFavoritesSerialsListAC(data))
//         },
//     }
// };

const FavoritesContainer = connect(MapStateToProps)(Favorites);

export default FavoritesContainer;