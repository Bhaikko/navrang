import React, { Component } from 'react';

import GroupImage from './../../components/GroupImage/GroupImage';
import Achievements from '../Achievements/Achievements';
import Alumni from './../Alumni/Alumni';
// import Aux from './../../hoc/Aux/Aux';

import classes from './LandingPage.css';

class LandingPage extends Component {

    render () {
        return (
            <div className={classes.LandingPage}>
                <GroupImage />
                <Achievements number={3} />
                <Alumni number={3} />
            </div>

        );
    }
}

export default LandingPage;