import React from 'react';
import './MainComponent.sass';
import SerialsContainer from "./Serials/SerialsContainer";
import CalendarContainer from "./Calendar/CalendarContainer";
import FavoritesContainer from "./Favorites/FavoritesContainer";


const MainComponent = () => {

    return (
        <div className={'main__wrap'}>
            <CalendarContainer/>
            <SerialsContainer/>
            <FavoritesContainer/>
        </div>
    );
};

export default MainComponent;