import * as actionTypes from '../action/actionTypes';

const initialState = {
    loading: false,
    error: null,
    message: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADMIN_FORM_INIT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.ADMIN_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                message: action.message
            }
        
        case actionTypes.ADMIN_FORM_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
                message: null
            }

        case actionTypes.CLEAR_FORM:
            return {
                ...state,
                loading: false,
                error: null,
                message: null
            }
        
        
        default: 
            return state;
    }
}

export default reducer;