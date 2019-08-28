import React from 'react';
import Serials from "./Serials";
import {getSerialsListTC, setFavoritesListAC} from "../../../redux/reducers/main";
import {connect} from "react-redux";
import Preloader from "../../preloader/Preloader";


class setSerials extends React.Component {
    state = {
        serialList: this.props.SerialList.slice(0, this.props.numberSerials),
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.SerialList !== this.props.SerialList || nextProps.numberSerials !== this.props.numberSerials) {
            this.setState({
                    serialList: nextProps.SerialList.slice(0, nextProps.numberSerials)
                }
            );
        }
    }

    setSerialList = (pageNumber) => {
        let start = (pageNumber * this.props.numberSerials - this.props.numberSerials);
        let end = pageNumber * this.props.numberSerials;

        let newSerialList = this.props.SerialList.slice(start, end);
        this.setState({
                serialList: newSerialList,
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