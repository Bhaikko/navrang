import React, { Component } from 'react';

import GroupImage from './../../components/GroupImage/GroupImage';
import Achievements from '../Achievements/Achievements';
import Alumni from './../Alumni/Alumni';
import AboutUs from './../../components/AboutUs/AboutUs';
import ContactUs from './../../components/ContactUs/ContactUs';
import ContactMe from './../../components/ContactMe/ContactMe';

import classes from './LandingPage.css';

class LandingPage extends Component {

    render () {
        return (
            <div className={classes.LandingPage}>
                <GroupImage />
                <Achievements number={3} />
                <Alumni number={3} />
                <AboutUs />
                <ContactUs />
                <ContactMe />

            </div>

        );
    }
}

export default LandingPage;