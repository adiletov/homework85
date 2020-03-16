import {
    ORDER_LOGIN_ERROR,
    ORDER_LOGIN_REQUEST,
    ORDER_LOGIN_SUCCESS,
    ORDER_REGISTER_ERROR,
    ORDER_REGISTER_REQUEST,
    ORDER_REGISTER_SUCCESS
} from "../Actions/Actionstype";

const initialState = {
    user: null,
    error: null,
    loading: false,
    loginError: null
};

const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_REGISTER_SUCCESS:
            return {...state, loading: false, error: null};
        case ORDER_REGISTER_REQUEST:
            return {...state, loading: true};
        case ORDER_REGISTER_ERROR:
            return {...state, error: action.error, loading: false};
        case ORDER_LOGIN_SUCCESS:
            return {...state, user: action.user, loading: false, loginError: null};
        case ORDER_LOGIN_REQUEST:
            return {...state, loading: true, loginError: null};
        case ORDER_LOGIN_ERROR:
            return {...state, loginError: action.error};
        default:
            return state
    }
};

export default reducerUser;