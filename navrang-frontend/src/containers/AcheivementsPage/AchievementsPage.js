import React, { Component } from 'react';

import classes from './AchievementsPage.css';
import Achievements from './../../components/Achievements/Achievements';
import Container from './../../components/UI/LandingPageContainer/LandingPageContainer';
import Title from './../../components/UI/Title/Title';

import { ACHIEVEMENTS } from './../../data/data';

class AchievementsPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            ACHIEVEMENTS
        }
    }

    render () {
        return (
            <Container className={classes.Container} >
                <Title>Here's What We Built So Far</Title>
                <Achievements achievements={this.state.ACHIEVEMENTS} />
            </Container>
        ); 
    }
}

export default AchievementsPage;