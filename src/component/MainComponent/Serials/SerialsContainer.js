import React from 'react';
import Serials from "./Serials";
import {getSerialsListTC, setFavoritesListAC} from "../../../redux/reducers/main";
import {connect} from "react-redux";
import Preloader from "../../preloader/Preloader";


class setSerials extends React.Component {
    state = {
        serialList: this.props.SerialList.slice(0, 5),
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.SerialList !== this.props.SerialList) {
            this.setState({
                    serialList: nextProps.SerialList.slice(0, 5)
                }
            );
        }
    }

    setSerialList = (e) => {
        let a = (e * this.props.numberSerials - this.props.numberSerials);
        let b = e * this.props.numberSerials;

        let qqq = this.props.SerialList.slice(a, b);
        this.setState({
                serialList: qqq,
            }
        )
    };

    componentDidMount() {
        this.props.getSerialsList(this.props.data);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Serials setSerialList={this.setSerialList} serialList={this.state.serialList}  {...this.props}/>}
        </>
    };
}


let MapStateToProps = (state) => {
    return {
        data: state.Main.data,
        SerialList: state.Main.SerialList,
        numberSerials: state.Main.numberSerials,
    }
};

let MapDispatchToProps = (dispatch) => {
    return {
        getSerialsList: (data) => {
            dispatch(getSerialsListTC(data))
        },
        setFavoritesList: (serial) => {
            dispatch(setFavoritesListAC(serial))
        },
    }
};

const SerialsContainer = connect(MapStateToProps, MapDispatchToProps)(setSerials);

export default SerialsContainer;