import React from 'react';


const Serials = (props) => {
    let aaa = 'data:image/jpeg;base64,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';

    let sss = [];
    let numberList = Math.ceil(props.SerialList.length/props.numberSerials);

    // let qqq = props.SerialList.splice(0,5);

    for (let i=1; i<=numberList; i++){
        sss.push(i);
    }
    //
    // let jjj = (e) => {
    //     return (
    //         qqq.map(
    //             (e) => {
    //                 return (
    //                     <div>
    //                         <button onClick={()=>props.setFavoritesList(e)}>Добавить</button>
    //                         <div>{e.show.name}</div>
    //                         <div>{e.show.type}</div>
    //                         <div>{e.airstamp.slice(0, 10)} , {e.airtime}</div>
    //                         <img alt={'ss'} src={e.show.image !== null ? e.show.image.medium : aaa}/>
    //                     </div>
    //                 )
    //             }
    //         )
    //     )
    // };
    //
    // let lll = jjj(qqq);
    //
    // let ttt = (e) => {
    //     let a = (e*props.numberSerials - props.numberSerials);
    //     let b = e*props.numberSerials;
    //     qqq = props.SerialList.slice(a,b);
    //     // lll = jjj(qqq);
    // };

    return (
        <div>
            Serials component work
            <div>
                {sss.map((e) => <button onClick={()=>props.setSerialList(e)} className={'numberButton'}>{e}</button>)}
            </div>
            {props.serialList.map(
                (e) => {
                    return (
                        <div>
                            <button onClick={()=>props.setFavoritesList(e)}>Добавить</button>
                            <div>{e.show.name}</div>
                            <div>{e.show.type}</div>
                            <div>{e.airstamp.slice(0, 10)} , {e.airtime}</div>
                            <img alt={'ss'} src={e.show.image !== null ? e.show.image.medium : aaa}/>
                        </div>
                    )
                }
            )}
        </div>
    );
};

export default Serials;