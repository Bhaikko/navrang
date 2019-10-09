import React, { Component } from 'react';

import GroupImage from './../../components/GroupImage/GroupImage';
import Achievements from './../../components/Achievements/Achievements';
import Alumni from './../../components/Alumni/Alumni';
import AboutUs from './../../components/AboutUs/AboutUs';
import ContactUs from './../../components/ContactUs/ContactUs';
import ContactMe from './../../components/ContactMe/ContactMe';

import Container from './../../components/UI/SectionContainer/Container';
import Title from './../../components/UI/Title/Title';
import Button from './../../components/UI/Button/Button';


import classes from './LandingPage.css';

import * as data from './../../data/data';

class LandingPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            ACHIEVEMENTS: [data.ACHIEVEMENTS[0], data.ACHIEVEMENTS[1], data.ACHIEVEMENTS[2]],
            ALUMNI: [data.ALUMNI[0], data.ALUMNI[1], data.ALUMNI[2]],
        }
    }

    render () {
        return (
            <div className={classes.LandingPage}>
                <GroupImage />
                <Container>
                    <Title >Achievements</Title>
                    <Achievements achievements={this.state.ACHIEVEMENTS} />
                    <Button>View All Achievements</Button>
                </Container>

                <Container>
                    <Title >Alumni</Title>
                    <Alumni team={this.state.ALUMNI} />
                    <Button>Meet The Team</Button>
                </Container>

                <AboutUs id="aboutUs" />
                <ContactUs id="contactUs" />
                <ContactMe />
            </div>
        );
    }
}

export default LandingPage;