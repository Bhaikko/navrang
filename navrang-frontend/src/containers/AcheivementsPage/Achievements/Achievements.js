import React, { Component } from 'react';

import classes from './Achievements.css';
import Achievement from './Achievement/Achievement';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import Container from '../UI/LandingPageContainer/LandingPageContainer';


import { ACHIEVEMENTS } from '../../data/data';

class Achievements extends Component {

    constructor (props) {
        super(props);
        this.state = {
            achievements: [ACHIEVEMENTS[0], ACHIEVEMENTS[1], ACHIEVEMENTS[2]]
        }
    }

    render () {
        return (
            <Container>
                <Title >Achievements</Title>
                <div className={classes.Achievements}>
                    {this.state.achievements.map(achievement => (<Achievement key={achievement.id} imageUrl={achievement.imageUrl} title={achievement.title} description={achievement.description} subtitle={achievement.subtitle} />))}
                </div>

                <Button>View All Achievements</Button>
            </Container>
        );

    }
}

export default Achievements;