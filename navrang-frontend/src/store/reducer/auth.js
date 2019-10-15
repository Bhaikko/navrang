import * as actionTypes from './../action/actionTypes';

const initialState = {
    token: null,
    loading: false, 
    err: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_INIT:
            return {
                ...state,
                loading: true 
            }

        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.token 
            }

        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                loading: false,
                token: null,
                err: action.err 
            }

        case actionTypes.ADMIN_LOGOUT:
            return {
                token: null,
                loading: null,
                err: null 
            }
        
        default:
            return state;
    }
}

export default reducer;
