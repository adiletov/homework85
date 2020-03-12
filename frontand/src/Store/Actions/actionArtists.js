import axiosApi from "../../axiosApi";
import {ORDER_ARTISTS_ERROR, ORDER_ARTISTS_REQUEST, ORDER_ARTISTS_SUCCESS} from "./Actionstype";


export const orderArtistsSuccess =(artists)=> ({type: ORDER_ARTISTS_SUCCESS, artists});
export const orderArtistsError = (error) => ({type: ORDER_ARTISTS_ERROR, error});
export const orderArtistsRequest = ()=> ({type: ORDER_ARTISTS_REQUEST});

export const orderArtist = () => {
    return async (dispatch)=>{
        try {
            dispatch(orderArtistsRequest());
            const res = await axiosApi.get('/artists');
            dispatch(orderArtistsSuccess(res.data));
        }catch (e) {
            dispatch(orderArtistsError(e))
        }
    }
};




