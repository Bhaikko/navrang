import React from 'react';

import classes from './Achievement.css';

const Achievement = (props) => {
    return (
        <div className={classes.Achievement}>
            <img alt="projectImage" src={props.imageUrl}/>
            <hr />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
} 

export default Achievement;