import React, { Component } from 'react';

import GroupImage from './../../components/GroupImage/GroupImage';
// import Aux from './../../hoc/Aux/Aux';

import classes from './LandingPage.css';

class LandingPage extends Component {

    render () {
        return (
            <div className={classes.LandingPage}>
                <GroupImage />
                <div style={{height: "100vh"}} ></div>
            </div>

        );
    }
}

export default LandingPage;