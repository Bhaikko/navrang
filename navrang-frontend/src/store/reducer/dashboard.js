import * as actionTypes from '../action/actionTypes';

const initialState = {
    setting: null,
    data: null,
    loading: false,
    error: false,
    bAdding: false,
    currentPreview: null,
    currentForm: null 
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.CHANGE_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: false,
                currentPreview: false,
                currentForm: false,
                bAdding: false 
            }
        
        case actionTypes.CHANGE_DATA:
            return {
                ...state,
                setting: action.setting,
                data: action.data,
                loading: false,
                error: false,
                bAdding: false,
                currentPreview: null,
                currentForm: action.currentForm
            }
        
        case actionTypes.CHANGE_DATA_FAILED:
            return {
                ...state,
                error: true,
                loading: false,
                bAdding: false,
                currentPreview: null,
                currentForm: null
            }

        case actionTypes.TOGGLE_FORM:
            return {
                ...state,
                bAdding: action.isAdding
            }

        case actionTypes.CHANGE_PREVIEW:
            return {
                ...state,
                currentPreview: action.currentPreview
            }

        case actionTypes.DELETE_ENTRY_INIT:
            return {
                ...state,
                loading: true,
                error: false,
                currentPreview: null,
                currentForm: null 
            }

        case actionTypes.DELETE_ENTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false 
            }

        case actionTypes.DELETE_ENTRY_FAILED:
            return {
                ...state,
                loading: false,
                error: true
            }

        default: 
            return state;
    }
}

export default reducer;