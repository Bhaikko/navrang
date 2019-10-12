import React, { Component } from 'react';


import classes from './AdminPage.css';

class AdminPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            currentSettings: "achievements",
        }
    }

    render () {
        return (
            <div>Hello World</div>
        );
    }
}

export default AdminPage;
