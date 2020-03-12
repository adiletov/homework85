import {
    ORDER_ARTISTS_ERROR,
    ORDER_ARTISTS_REQUEST,
    ORDER_ARTISTS_SUCCESS,
} from "../Actions/Actionstype";

const initialState = {
    artists: null,
    preloader: '',
    error: null,
};

const reducerArtist = (state = initialState, action)=>{
    switch (action.type) {
        case ORDER_ARTISTS_SUCCESS:
            return {...state, artists: action.artists, preloader: false };
        case ORDER_ARTISTS_REQUEST:
            return {...state, preloader: true};
        case ORDER_ARTISTS_ERROR:
            return {...state, error: action.error, preloader: false};
        default:
            return state
    }
};

export default reducerArtist;