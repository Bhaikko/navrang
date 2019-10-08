import React from 'react';

import classes from './Achievements.css';
import Achievement from './Achievement/Achievement';

const Achievements = props => {
    
    return (
        <div className={classes.Achievements}>
            {props.achievements.map(achievement => (<Achievement key={achievement.id} imageUrl={achievement.imageUrl} title={achievement.title} description={achievement.description} subtitle={achievement.subtitle} />))}
        </div>
    );    
}

export default Achievements;