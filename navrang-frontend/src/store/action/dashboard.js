import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const getAchievements = (reset) => {

    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN,
            loading: true,
        });
        axios.get("/public/achievements")
            .then(response => dispatch({
                type: actionTypes.CHANGE_DATA,
                data: response.data,
                setting: "achievements"  
            }))
            .catch(err => dispatch({
                type: actionTypes.CHANGE_DATA_FAILED,
                data: null,
                setting: "achievements"
            }));
    }
}

export const getContacts = () => {

    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN,
            loading: true,
        })
        axios.get("/public/contacts")
            .then(response => dispatch({
                type: actionTypes.CHANGE_DATA,
                data: response.data,
                setting: "contacts"  
            }))
            .catch(err => dispatch({
                type: actionTypes.CHANGE_DATA_FAILED,
                data: null,
                setting: "contacts"
            }));
    }
}

export const getEvents = () => {

    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN,
            loading: true,
        })
        axios.get("/public/events")
            .then(response => dispatch({
                type: actionTypes.CHANGE_DATA,
                data: response.data,
                setting: "events"  
            }))
            .catch(err => dispatch({
                type: actionTypes.CHANGE_DATA_FAILED,
                data: null,
                setting: "events"
            }));
    }
}

export const getIssues = () => {

    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN,
            loading: true,
        })
        axios.get("/public/issues")
            .then(response => dispatch({
                type: actionTypes.CHANGE_DATA,
                data: response.data,
                setting: "issues"  
            }))
            .catch(err => dispatch({
                type: actionTypes.CHANGE_DATA_FAILED,
                data: null,
                setting: "issues"
            }));
    }
}

export const getNotices = () => {

    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN,
            loading: true,
        })
        axios.get("/public/notices")
            .then(response => dispatch({
                type: actionTypes.CHANGE_DATA,
                data: response.data,
                setting: "notices"  
            }))
            .catch(err => dispatch({
                type: actionTypes.CHANGE_DATA_FAILED,
                data: null,
                setting: "notices"
            }));
    }
}

export const getTeam = () => {

    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN,
            loading: true,
        })
        axios.get("/public/team")
            .then(response => dispatch({
                type: actionTypes.CHANGE_DATA,
                data: response.data,
                setting: "team"  
            }))
            .catch(err => dispatch({
                type: actionTypes.CHANGE_DATA_FAILED,
                data: null,
                setting: "team"
            }));
    }
}