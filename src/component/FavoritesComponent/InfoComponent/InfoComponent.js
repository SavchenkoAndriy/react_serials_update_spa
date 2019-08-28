import React from 'react';
import Preload from '../../../img/Spinner-1s-200px.gif';
import './infoSerial.sass';


const InfoComponent = (props) => {


    if (props.InfoSerial) {
        return (
            <div className={'info'}>
                <div className={'info__wrap'}>
                    <div className={'info__name'}>Назва Серіала/Шоу: {props.InfoSerial.show.name}</div>
                    <div>Назва епізоду: {props.InfoSerial.name}</div>
                    <div>Тип: {props.InfoSerial.show.type}</div>
                    <div>Сезон: {props.InfoSerial.season}</div>
                    <div>Серія № {props.InfoSerial.number}</div>
                    <div>Дата ефіра: {props.InfoSerial.airstamp.slice(0, 10)}</div>
                    <div>Час ефіра: {props.InfoSerial.airtime}</div>
                    <div>Довжина ефіра: {props.InfoSerial.runtime} мин.</div>
                    <div>Мова: {props.InfoSerial.show.language}</div>
                    <div>
                        <a href={props.InfoSerial.show.officialSite}>Офіційний сайт</a>
                    </div>
                    <div>
                        <p>Жанри: {
                            props.InfoSerial.show.genres.length ? props.InfoSerial.show.genres.map(e =><span>{e} </span>) : 'Жанри не вказано'
                        }</p>
                    </div>
                </div>
                <div className={'info__img'}>
                    <img alt={Preload} src={props.InfoSerial.show.image !== null ? props.InfoSerial.show.image.original : Preload}/>
                </div>
            </div>
        )
    }else return <div className={'info__empty'}>Для отримання деталей виберіть із списка Вибранне серіал</div>
};

export default InfoComponent;