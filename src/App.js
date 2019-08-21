import React from 'react';
import {Route, NavLink, Redirect} from "react-router-dom";

import s from './App.module.sass';
import Welcome from './component/welcome/Welcome';
import MainComponent from "./component/MainComponent/MainComponent";


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
        </div>
    );
}

function Links() {
    return (
        <div className={s.head}>
            <div>
                <NavLink to="/welcome">StartPage</NavLink>
            </div>
            <div>
                <NavLink to="/main">Main</NavLink>
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
