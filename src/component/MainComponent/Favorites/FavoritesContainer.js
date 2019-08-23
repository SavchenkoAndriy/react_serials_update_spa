import React from 'react';
import {connect} from "react-redux";
import Favorites from "./Favorites";


let MapStateToProps = (state) => {
    return {
        FavoritesSerials: state.Main.FavoritesSerials,
    }
};

const FavoritesContainer = connect(MapStateToProps)(Favorites);

export default FavoritesContainer;