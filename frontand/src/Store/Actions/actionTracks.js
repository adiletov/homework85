import {ORDER_ALBUM, ORDER_TRACKS_ERROR, ORDER_TRACKS_REQUEST, ORDER_TRACKS_SUCCESS} from "./Actionstype";
import axiosApi from "../../axiosApi";

export const orderTracksSuccess = tracks => ({type: ORDER_TRACKS_SUCCESS, tracks});
export const orderTracksRequest = () => ({type: ORDER_TRACKS_REQUEST});
export const orderTracksError = error => ({type: ORDER_TRACKS_ERROR, error});

export const orderAlbum = album => ({type: ORDER_ALBUM, album});


export const orderTracks = id => {
    return async (dispatch)=>{
        try{
            const res = await axiosApi.get('/tracks?album='+ id);
            dispatch(orderTracksRequest());
            dispatch(orderTracksSuccess(res.data));
        }catch (e) {
            dispatch(orderTracksRequest());
            dispatch(orderTracksError(e.response));
        }
    }
};

export const orderAlbumName = id => {
    return async (dispatch) => {
        try{
            dispatch(orderTracksRequest());
            const res = await axiosApi.get('/albums/' + id);
            dispatch(orderAlbum(res.data))
        }catch (e) {
            dispatch(orderTracksRequest());
            dispatch(orderTracksError(e.response))
        }
    }
};