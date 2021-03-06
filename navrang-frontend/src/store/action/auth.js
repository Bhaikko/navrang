import * as actionTypes from './actionTypes';
import axios from './../../axios';

export const autoLogin = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    };
}

export const loginAttempt = (formData) => {
    return dispatch => {
        dispatch({
            type: actionTypes.AUTH_INIT
        });

        axios.post("/auth/login", formData)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                dispatch({
                    type: actionTypes.AUTH_SUCCESS,
                    token: response.data.token
                })
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.AUTH_FAILED,
                    err: err.response.data.message
                })
            });


    }
}

export const logout = () => {
    localStorage.clear('token');
    return {
        type: actionTypes.ADMIN_LOGOUT
    }
}
