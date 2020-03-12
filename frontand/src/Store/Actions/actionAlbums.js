import {ORDER_ALBUMS_SUCCESS, ORDER_ARTIST, ORDER_ARTISTS_ERROR, ORDER_ARTISTS_REQUEST} from "./Actionstype";
import axiosApi from "../../axiosApi";

export const orderAlbumSuccess = (albums) => ({type : ORDER_ALBUMS_SUCCESS, albums});
export const orderAlbumError = error => ({type : ORDER_ARTISTS_ERROR, error});
export const orderAlbumRequest = () => ({type: ORDER_ARTISTS_REQUEST});

export const orderArtist = (artist) => ({type : ORDER_ARTIST, artist});

export const orderAlbumId = (id) => {
    return async (dispatch)=>{
        try{
            const res = await axiosApi.get('/albums?artist=' + id);
            dispatch(orderAlbumSuccess(res.data));
            dispatch(orderAlbumRequest());
        }catch (e) {
            dispatch(orderAlbumError(e.response));
            dispatch(orderAlbumRequest());
        }
    }
};
export const orderArtistName = (id) => {
    return async (dispatch) => {
        try{
            const res = await axiosApi.get('/artists/' + id);
            dispatch(orderArtist(res.data))
        }catch (e) {
            dispatch(orderAlbumRequest());
            dispatch(orderAlbumError(e.response));
        }
    }
};
