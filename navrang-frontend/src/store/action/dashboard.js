import * as actionTypes from './actionTypes';
// import axios from '../../axios';

export const changeSettings = setting => {
    return {
        type: actionTypes.CHANGE_SETTING,
        setting: setting
    }
}