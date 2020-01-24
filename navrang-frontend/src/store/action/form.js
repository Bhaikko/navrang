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
        const token = localStorage.getItem("token");

        // console.log(formData);
        if (url === '/admin/contacts') {
            fd = formData;
        }

        axios.post(url, fd, {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
            .then(response => {
                dispatch({
                    type: actionTypes.ADMIN_FORM_SUCCESS,
                    message: "New Entry Added" 
                }) 
            })
            .catch(err => dispatch({
                type: actionTypes.ADMIN_FORM_FAILED,
                error: "Something Went Wrong, Sorry"
            }));
            
    }
}

export const clearForm = () => {
    return {
        type: actionTypes.CLEAR_FORM
    }
}


