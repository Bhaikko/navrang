import * as actionTypes from '../action/actionTypes';

const initialState = {
    setting: null,
    data: null,
    loading: false,
    error: false,
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.CHANGE_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            }
        
        case actionTypes.CHANGE_DATA:
            return {
                ...state,
                setting: action.setting,
                data: action.data,
                loading: false,
                error: false
            }
        
        case actionTypes.CHANGE_DATA_FAILED:
            return {
                ...state,
                error: true
            }

        default: 
            return state;
    }
}

export default reducer;