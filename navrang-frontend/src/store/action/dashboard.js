import React from 'react';
import * as actionTypes from './actionTypes';
import axios from '../../axios';

import AchievementForm from './../../containers/AdminPage/Forms/AchievementForm/AchievementForm';
import ContactForm from './../../containers/AdminPage/Forms/ContactForm/ContactForm';
import EventForm from './../../containers/AdminPage/Forms/EventForm/EventForm';
import NoticeForm from './../../containers/AdminPage/Forms/NoticeForm/NoticeForm';
import TeamForm from './../../containers/AdminPage/Forms/TeamForm/TeamForm';


export const getItem = (setting) => {
    return dispatch => {
        dispatch({
            type: actionTypes.CHANGE_DATA_BEGIN
        });

        let currentForm;
        switch (setting) {
            case "achievements":
                currentForm = <AchievementForm />
                break;
            case "events":
                currentForm = <EventForm />
                break;
            case "team":
                currentForm = <TeamForm />
                break;
            case "contacts":
                currentForm = <ContactForm />
                break;
            case "issues":
                currentForm = null;
                break;
            case "notices":
                currentForm = <NoticeForm />
                break;
            default:
                break;
            
        }

        if (setting === "issues" || setting === "contacts") {
            const token = localStorage.getItem("token");;
            axios.get(`/admin/${setting}`, {
                headers: {
                    Authorization: `JWT ${token}`
                }
            })
                .then(response => dispatch({
                    type: actionTypes.CHANGE_DATA,
                    data: response.data[setting],
                    setting: setting,
                    currentForm: currentForm
                }))
                .catch(err => dispatch({
                    type: actionTypes.CHANGE_DATA_FAILED,
                    data: null,
                    setting: setting
                }));

        } else {
            axios.get(`/public/${setting}`)
                .then(response => {
                    dispatch({
                        type: actionTypes.CHANGE_DATA,
                        data: response.data,
                        setting: setting,
                        currentForm: currentForm
                    });
                })
                .catch(err => dispatch({
                    type: actionTypes.CHANGE_DATA_FAILED,
                    data: null,
                    setting: setting
                }));
        }

    }
}

export const deleteItem = (id, setting, public_id) => {
    return dispatch => {
        dispatch({
            type: actionTypes.DELETE_ENTRY_INIT
        });

        const token = localStorage.getItem("token");

        axios.delete(`/admin/${setting}`, {
            headers: {
                Authorization: `JWT ${token}`
            },
            data: {
                id: id,
                public_id: public_id
            }
        })
            .then(response => dispatch({
                type: actionTypes.DELETE_ENTRY_SUCCESS,
                message: response, 
                id: id
            }))
            .catch(err => dispatch({
                type: actionTypes.DELETE_ENTRY_FAILED
            }));
    }
}


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