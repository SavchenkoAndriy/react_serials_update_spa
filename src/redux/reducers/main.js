import {serialsAPI} from "../../API/api";

const GET_STATE = 'GET_STATE';
const IS_FETCHING = 'IS_FETCHING';
const SET_DATA = 'SET_DATA';
const SET_FAVORITES_SERIAL = 'SET_FAVORITES_SERIAL';
const GET_FAVORITES_SERIAL = 'GET_FAVORITES_SERIAL';

let initialState = {
    data: new Date(),
    numberSerials: 5,
    isFetching: true,
    SerialList: [],
    FavoritesSerials: [],
};

const Main = (state = initialState, action) => {

    switch (action.type) {

        case GET_STATE: {
            return {
                ...state,
                SerialList: action.state,
            };
        }
        case SET_DATA: {
            return {
                ...state,
                data: action.data,
            };
        }

        case IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case SET_FAVORITES_SERIAL: {
            let newState = {...state};
            newState.FavoritesSerials = [...state.FavoritesSerials];
            newState.FavoritesSerials.push(action.serial);

            return newState;
        }

        case GET_FAVORITES_SERIAL: {
            return {
                ...state,
                FavoritesSerials: state.FavoritesSerials
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

export const isFetchingAC = (isFetching) => {
    return {
        type: IS_FETCHING,
        isFetching
    }
};


export const getSerialsListTC = (data) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true));
        serialsAPI.getSerials(data.toLocaleString("ua")).then(response => {
            dispatch(setSerialsAC(response));
            dispatch(isFetchingAC(false));
        });
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
        serialsAPI.getSerials(data.toLocaleString("ua")).then(response => {
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

// export const getFavoritesSerialsListAC = () => {
//     console.log('get erial');
//     return {
//         type: GET_FAVORITES_SERIAL,
//     }
// };



export default Main;