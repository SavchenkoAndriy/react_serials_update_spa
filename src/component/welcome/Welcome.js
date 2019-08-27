import React from 'react';
import {NavLink} from 'react-router-dom';
import './welcome.sass';

const Welcome = () => {
    return (
        <div className={'welcome'}>
            <div className={'welcome__header'}>
                <div className={'welcome__header__title'}>Доброго дня!</div>
                <div className={'welcome__header__text'}>Данний SPA розроблений на основі безкоштовного REST API сайта tvmaze.com</div>
                <div className={'welcome__header__text'}>Ви маєте можливість по датам передивитись списки всіх серіалів, вибрати які вам подобаються в окремий список, </div>
                <div className={'welcome__header__text'}>де потім є можливість побачити всі деталі серії, а також в майбутньому буде можливість побачити повний розклад серіалу</div>
            </div>
            <div className={'welcome__a'}>
                <a target={'_blank'} href={'https://github.com/SavchenkoAndriy/react_serials_update_spa'}>Ссилка на код сайту</a>
            </div>
            <div className={'welcome__a'}>
                <a target={'_blank'} href={'http://www.tvmaze.com/api'}>Ссилка на документацію по REST API</a>
            </div>
            <div className={'welcome__nav-link'}>
                <NavLink to='/main'>Перейти до вибору серіалів</NavLink>
            </div>
        </div>
    );
};

export default Welcome;