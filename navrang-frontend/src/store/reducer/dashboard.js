import * as actionTypes from '../action/actionTypes';
import * as data from './../../data/data';

const initialState = {
    setting: "events",
    data: data["EVENTS"],
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.CHANGE_SETTING:
            return {
                setting: action.setting,
                data: data[action.setting.toUpperCase()]
            }

        default: 
            return state;
    }
}

export default reducer;