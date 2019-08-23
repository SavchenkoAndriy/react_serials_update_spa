import React from 'react';
import {NavLink} from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <div>
                <a href={'https://github.com/SavchenkoAndriy/cooking_Api'}>Git rep</a>
            </div>
            <div>
                <NavLink to="/main">Приступить</NavLink>
            </div>
        </div>
    );
};

export default Welcome;