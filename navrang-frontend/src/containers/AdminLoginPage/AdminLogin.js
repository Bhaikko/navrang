import React, { Component } from 'react';

import classes from './AdminLogin.css';

import LoginForm from './../AdminPage/Forms/LoginForm/LoginForm';

class AdminLogin extends Component {
    render () {
        return (
            <div className={classes.Container} >
                <LoginForm error={this.props.error} />
            </div>
        );
    }
}

export default AdminLogin;