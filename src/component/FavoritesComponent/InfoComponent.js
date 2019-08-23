import React from 'react';
import Preload from '../../img/Spinner-1s-200px.gif';


const InfoComponent = (props) => {
    console.log(props);

    if (props.InfoSerial) {
        return (
            <div>
                <div>Название Сериала/Шоу: {props.InfoSerial.show.name}</div>
                <div>Название эпизода: {props.InfoSerial.name}</div>
                <div>Тип: {props.InfoSerial.show.type}</div>
                <div>Сезон: {props.InfoSerial.season}</div>
                <div>Серия № {props.InfoSerial.number}</div>
                <div>Дата: {props.InfoSerial.airstamp.slice(0, 10)}</div>
                <div>Время показа: {props.InfoSerial.airtime}</div>
                <div>Время эфира: {props.InfoSerial.runtime} мин.</div>
                <div>Язык: {props.InfoSerial.show.language}</div>
                <div>
                    <a href={props.InfoSerial.show.officialSite}>Офицыальный сайт</a>
                </div>
                <div>
                    <p>Жанры: {props.InfoSerial.show.genres.map(e =><span>{e} </span>)}</p>
                </div>
                <img alt={'ss'} src={props.InfoSerial.show.image !== null ? props.InfoSerial.show.image.original : Preload}/>
            </div>
        )
    }else return <div>Сериал не выбран</div>
};

export default InfoComponent;