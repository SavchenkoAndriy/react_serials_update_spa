import React from 'react';
import {NavLink} from "react-router-dom";
import InfoComponent from "./InfoComponent";
import Preload from '../../img/Spinner-1s-200px.gif';
import './Favorites.sass';


const FavoritesComponent = (props) => {
    if (props.FavoritesSerials.length !== 0) {
        return (
            <div className={'favorite__wrap'}>
                <div>
                    {props.FavoritesSerials.map(
                        (e) => {
                            return (
                                <div>
                                    <div>{e.show.name}</div>
                                    <div>{e.show.type}</div>
                                    <div>{e.airstamp.slice(0, 10)} , {e.airtime}</div>
                                    <img alt={'ss'} src={e.show.image !== null ? e.show.image.medium : Preload}/>
                                    <div>
                                        <button onClick={() => props.deleteSerial(e)}>Удалить из избоанных</button>
                                    </div>
                                    <div>
                                        <button onClick={() => props.setInfoSerial(e)}>Показать детали</button>
                                    </div>
                                </div>
                            )
                        }
                    )
                    }
                </div>
                <div>
                    <InfoComponent InfoSerial={props.InfoSerial}/>
                </div>
            </div>
        )
    } else {
        return (
            <div className={'favorite__wrap'}>
                <div>
                    <div>Избранные пустые</div>
                    <div>
                        <NavLink to="/main">Перейти на выбор сериалов</NavLink>
                    </div>
                </div>
                <div>
                    <InfoComponent InfoSerial={props.InfoSerial}/>
                </div>
            </div>
        )
    }

};

export default FavoritesComponent;