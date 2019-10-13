import * as actionTypes from './actionTypes';

import axios from './../../axios';

export const formSubmit = (formData, url) => {
    return dispatch => {
        dispatch({
            type: actionTypes.ADMIN_FORM_INIT
        });

        // Use form data to upload pictures
        let fd = new FormData();
        for(let key in formData) {
            fd.append(key, formData[key]);
        }

        axios.post(url, fd, {
            headers: {
                // 'content-type': 'multipart/form-data'
                // Authorization: `JWT ${token}`
            }
        })
            .then(response => dispatch({
                type: actionTypes.ADMIN_FORM_SUCCESS,
                message: response 
            }))
            .catch(err => dispatch({
                type: actionTypes.ADMIN_FORM_FAILED,
                error: err
            }));
    }
}

