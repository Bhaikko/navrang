import * as actionTypes from '../action/actionTypes';

const initialState = {
    setting: "events"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SETTING:
            return {
                setting: action.setting
            }

        default: 
            return state;
    }
}

export default reducer;