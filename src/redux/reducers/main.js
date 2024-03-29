import {serialsAPI} from "../../API/api";

const GET_STATE = 'GET_STATE';
const IS_FETCHING = 'IS_FETCHING';
const SET_DATA = 'SET_DATA';
const SET_FAVORITES_SERIAL = 'SET_FAVORITES_SERIAL';
const DELETE_SERIAL = 'DELETE_SERIAL';
const SET_INFO = 'SET_INFO';
const SET_NUMBER_SERIAL_ON_PAGE = 'SET_NUMBER_SERIAL_ON_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    data: new Date(),
    numberSerials: 8,
    isFetching: true,
    SerialList: [],
    FavoritesSerials: [],
    InfoSerial: undefined,
    CurrentPage: 1,
};

const Main = (state = initialState, action) => {

    switch (action.type) {

        case GET_STATE: {
            return {
                ...state,
                SerialList: action.state,
            };
        }

        case DELETE_SERIAL: {
            let newState = {...state};
            newState.FavoritesSerials = [...state.FavoritesSerials];

            let i = newState.FavoritesSerials.length;

            if (i === 1){
                newState.InfoSerial = undefined;
            }

            while (i--) {
                if (newState.FavoritesSerials[i].id === action.serial.id) {
                    newState.FavoritesSerials.splice(i, 1);
                }
            }

            return newState;
        }

        case SET_DATA: {
            return {
                ...state,
                data: action.data,
                CurrentPage: 1,
            };
        }

        case IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case SET_FAVORITES_SERIAL: {
            let newState = {...state};
            newState.FavoritesSerials = [...state.FavoritesSerials];

            if (state.FavoritesSerials.includes(action.serial)) {
                return state;
            }

            newState.FavoritesSerials.push(action.serial);

            return newState;
        }

        case SET_INFO: {
            return {
                ...state,
                InfoSerial: action.serial
            }
        }

        case SET_NUMBER_SERIAL_ON_PAGE: {
            return {
                ...state,
                numberSerials: Number(action.number),
                CurrentPage: 1
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                CurrentPage: Number(action.number)
            }
        }

        default:
            return state;
    }
};


export const setSerialsAC = (state) => {
    return {
        type: GET_STATE,
        state
    }
};

export const getSerialsListTC = (data) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true));
        serialsAPI.getSerials(data.toLocaleString('ua')).then(response => {
            dispatch(setSerialsAC(response));
            dispatch(isFetchingAC(false));
        });
    }
};

export const deleteSerialAC = (serial) => {
    return {
        type: DELETE_SERIAL,
        serial
    }
};

export const isFetchingAC = (isFetching) => {
    return {
        type: IS_FETCHING,
        isFetching
    }
};

export const setDataAC = (data) => {
    return {
        type: SET_DATA,
        data
    }
};

export const setDataTC = (data) => {
    return (dispatch) => {
        dispatch(setDataAC(data));
        dispatch(isFetchingAC(true));
        serialsAPI.getSerials(data.toLocaleString('ua')).then(response => {
            dispatch(setSerialsAC(response));
            dispatch(isFetchingAC(false));
        });
    }
};

export const setFavoritesListAC = (serial) => {
    return {
        type: SET_FAVORITES_SERIAL,
        serial
    }
};

export const setInfoSerialAC = (serial) => {
    return {
        type: SET_INFO,
        serial
    }
};


export const setNumberSerialOnPageAC = (number) => {
    return {
        type: SET_NUMBER_SERIAL_ON_PAGE,
        number
    }
};


export const setCurrentPageAC = (number) => {
    return {
        type: SET_CURRENT_PAGE,
        number
    }
};


export default Main;