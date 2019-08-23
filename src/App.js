import React from 'react';
import {Route, NavLink, Redirect} from "react-router-dom";

import s from './App.module.sass';
import Welcome from './component/welcome/Welcome';
import MainComponent from "./component/MainComponent/MainComponent";
import FavoritesComponentContainer from "./component/FavoritesComponent/FavoritesComponentContainer";


function Routs() {
    return (
        <div className={s.main}>
            <Route
                exact
                path={'/'}
                render={() => <Redirect to="/welcome"/>}
            />
            <Route
                exact
                path={'/welcome'}
                render={() => <Welcome/>}
            />
            <Route
                path={'/main'}
                render={() => <MainComponent/>}
            />
            <Route
                path={'/favorites'}
                render={() => <FavoritesComponentContainer/>}
            />
            <Route
                path={'/*'}
                render={() => <Redirect to="/welcome"/>}
            />
        </div>
    );
}

function Links() {
    return (
        <div className={s.head}>
            <div>
                <NavLink to="/welcome">Начальная страница</NavLink>
            </div>
            <div>
                <NavLink to="/main">Сериалы</NavLink>
            </div>
            <div>
                <NavLink to="/favorites">Избранное</NavLink>
            </div>
        </div>
    );
}


function App() {
    return (
        <div className={s.wrap}>
            <Links/>
            <Routs/>
        </div>
    );
}

export default App;
