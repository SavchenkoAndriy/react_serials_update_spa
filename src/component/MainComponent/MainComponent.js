import React from 'react';
import './MainComponent.sass';
// import Favorites from "./Favorites/Favorites";
import SerialsContainer from "./Serials/SerialsContainer";
import CalendarContainer from "./Calendar/CalendarContainer";
import FavoritesContainer from "./Favorites/FavoritesContainer";


const MainComponent = () => {

    return (
        <div>
            <h1>Main component text</h1>
            <div className={'main__wrap'}>
                <CalendarContainer/>
                <SerialsContainer/>
                <FavoritesContainer/>
            </div>
        </div>
    );
};

export default MainComponent;