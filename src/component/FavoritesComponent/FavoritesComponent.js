import React from 'react';
import {NavLink} from "react-router-dom";
import InfoComponent from "./InfoComponent/InfoComponent";
import Preload from '../../img/Spinner-1s-200px.gif';
import './FavoritesComponent.sass';


const FavoritesComponent = (props) => {
    if (props.FavoritesSerials.length !== 0) {
        return (
            <div className={'favoriteComponent'}>
                <div className={'favoriteComponent__wrap'}>
                    <div className={'favoriteComponent__link'}>
                        <NavLink to="/main">Назад до вибору серіалів</NavLink>
                    </div>
                    <div>
                        {props.FavoritesSerials.map(
                            (e) => {
                                return (
                                    <div className={'favoriteComponent__serial'}>
                                        <div>{e.show.name}</div>
                                        <div>{e.show.type}</div>
                                        <div>{e.airstamp.slice(0, 10)} , {e.airtime}</div>
                                        <div className={'favoriteComponent__serial__button'}>
                                            <button onClick={() => props.deleteSerial(e)}>Видалили з Вибраних</button>
                                        </div>
                                        <div className={'favoriteComponent__serial__button__info'}>
                                            <button onClick={() => props.setInfoSerial(e)}>Показати детальну
                                                інформацію
                                            </button>
                                        </div>
                                        <div className={'favoriteComponent__serial__img'}>
                                            <img alt={'ss'}
                                                 src={e.show.image !== null ? e.show.image.medium : Preload}/>
                                        </div>
                                    </div>
                                )
                            }
                        )
                        }
                    </div>
                </div>
                <div>
                    <InfoComponent InfoSerial={props.InfoSerial}/>
                </div>
            </div>
        )
    } else {
        return (
            <div className={'favoriteComponent'}>
                <div className={'favoriteComponent__empty__wrap'}>
                    <div>Вибрані пусті</div>
                    <div>
                        <NavLink to="/main">Перейти до вибору серіалів</NavLink>
                    </div>
                </div>
            </div>
        )
    }

};

export default FavoritesComponent;