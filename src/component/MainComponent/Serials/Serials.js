import React from 'react';
import Preload from '../../../img/Spinner-1s-200px.gif';
import './serials.sass';


const Serials = (props) => {
    let sss = [];
    let numberList = Math.ceil(props.SerialList.length / props.numberSerials);


    for (let i = 1; i <= numberList; i++) {
        sss.push(i);
    }

    if (props.serialList.length === 0) {
        return <div>
            <p>Не вдалось отримати дані. Перевірте з'єднання з інтернетом</p>
        </div>
    }


    return (
        <div>
            <div className={'numberButton__wrap'}>
                {sss.map((e) => <button onClick={() => props.setSerialList(e)} className={'numberButton'}>{e}</button>)}
            </div>
            <div className={'serials__wrap'}>
                {props.serialList.map(
                    (e) => {
                        return (
                            <div className={'serial'}>
                                <div>{e.show.name}</div>
                                <div>{e.show.type}</div>
                                <div>{e.airstamp.slice(0, 10)} , {e.airtime}</div>
                                <div className={'serial__button'}>
                                    <button onClick={() => props.setFavoritesList(e)}>Додати до вибраних</button>
                                </div>
                                <div className={'serial__img'}>
                                    <img alt={'ss'} src={e.show.image !== null ? e.show.image.medium : Preload}/>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
            <div className={'numberButton__wrap'}>
                {sss.map((e) => <button onClick={() => props.setSerialList(e)} className={'numberButton'}>{e}</button>)}
            </div>
        </div>
    );
};

export default Serials;