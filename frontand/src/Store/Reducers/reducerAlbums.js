import {ORDER_ALBUMS_ERROR, ORDER_ALBUMS_SUCCESS, ORDER_ARTIST, ORDER_ARTISTS_REQUEST} from "../Actions/Actionstype";

const initialState = {
    albums: [],
    artist: {},
    preloader: null,
    error: null
};

const reducerAlbums = (state=initialState, action)=>{
    switch (action.type) {
        case ORDER_ALBUMS_SUCCESS:
            return {...state, albums: action.albums, preloader: false};
        case ORDER_ARTISTS_REQUEST:
            return {...state, preloader: true};
        case ORDER_ALBUMS_ERROR:
            return {...state, error: action.error , preloader: false};
        case ORDER_ARTIST:
            return {...state, artist: action.artist};
        default:
            return state
    }
};

export default reducerAlbums;