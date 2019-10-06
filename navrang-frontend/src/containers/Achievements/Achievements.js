import React, { Component } from 'react';

import classes from './Achievements.css';
import Achievement from './Achievement/Achievement';
import Title from './../../components/Title/Title';


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
            <div className={classes.Achievements}>
                <Title >Achievements</Title>
                <div className={classes.AchievementsBox}>
                    {this.state.achievements.map(achievement => (<Achievement key={achievement.id} imageUrl={achievement.imageUrl} title={achievement.title} description={achievement.description} />))}
                </div>

                <button className={classes.Button} >View All Achievements</button>

            </div>
        );

    }
}

export default Achievements;