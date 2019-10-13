import React from 'react';
import * as actionTypes from './actionTypes';
import axios from '../../axios';

import AchievementForm from './../../containers/AdminPage/Forms/AchievementForm/AchievementForm';
import ContactForm from './../../containers/AdminPage/Forms/ContactForm/ContactForm';
import EventForm from './../../containers/AdminPage/Forms/EventForm/EventForm';
import NoticeForm from './../../containers/AdminPage/Forms/NoticeForm/NoticeForm';
import TeamForm from './../../containers/AdminPage/Forms/TeamForm/TeamForm';


export const toggleForm = (currentFormState) => {

    return {
        type: actionTypes.TOGGLE_FORM,
        isAdding: !currentFormState
    }
}

export const changePreview = (currentPreview) => {
    return {
        type: actionTypes.CHANGE_PREVIEW,
        currentPreview: currentPreview
    }
}

export const getAchievements = (data) => {

    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN,
            loading: true,
        });
        axios.get("/public/achievements")
            .then(response => dispatch({
                type: actionTypes.CHANGE_DATA,
                data: response.data,
                setting: "achievements",
                currentForm: (<AchievementForm />)
            }))
            .catch(err => dispatch({
                type: actionTypes.CHANGE_DATA_FAILED,
                data: null,
                setting: "achievements"
            }));
    }
}

export const getContacts = (data) => {

    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN,
            loading: true,
        })
        axios.get("/public/contacts")
            .then(response => dispatch({
                type: actionTypes.CHANGE_DATA,
                data: response.data,
                setting: "contacts",
                currentForm: <ContactForm />  
            }))
            .catch(err => dispatch({
                type: actionTypes.CHANGE_DATA_FAILED,
                data: null,
                setting: "contacts"
            }));
    }
}

export const getEvents = (data) => {

    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN,
            loading: true,
        })
        axios.get("/public/events")
            .then(response => dispatch({
                type: actionTypes.CHANGE_DATA,
                data: response.data,
                setting: "events",
                currentForm: <EventForm />  
            }))
            .catch(err => dispatch({
                type: actionTypes.CHANGE_DATA_FAILED,
                data: null,
                setting: "events"
            }));
    }
}

export const getIssues = (data) => {

    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN,
            loading: true,
        })
        axios.get("/public/issues")
            .then(response => dispatch({
                type: actionTypes.CHANGE_DATA,
                data: response.data,
                setting: "issues",
                currentForm: null  
            }))
            .catch(err => dispatch({
                type: actionTypes.CHANGE_DATA_FAILED,
                data: null,
                setting: "issues"
            }));
    }
}

export const getNotices = (data) => {

    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN,
            loading: true,
        })
        axios.get("/public/notices")
            .then(response => dispatch({
                type: actionTypes.CHANGE_DATA,
                data: response.data,
                setting: "notices",
                currentForm: <NoticeForm />  
            }))
            .catch(err => dispatch({
                type: actionTypes.CHANGE_DATA_FAILED,
                data: null,
                setting: "notices"
            }));
    }
}

export const getTeam = (data) => {

    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN,
            loading: true,
        })
        axios.get("/public/team")
            .then(response => dispatch({
                type: actionTypes.CHANGE_DATA,
                data: response.data,
                setting: "team",
                currentForm: <TeamForm />  
            }))
            .catch(err => dispatch({
                type: actionTypes.CHANGE_DATA_FAILED,
                data: null,
                setting: "team"
            }));
    }
}