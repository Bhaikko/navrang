import React from 'react';

import classes from './Achievement.css';

import Title from '../../UI/Title/Title';

const Achievement = (props) => {
    console.log(props.date);
    return (
        <div className={classes.Achievement}>
            <img alt="projectImage" src={props.imageUrl}/>
            <hr />
            <Title>{props.title}</Title>
            <hr />
            <div className={classes.Subtitle}>
                {props.subtitle}
            </div>
            <hr />
            <p>{props.description}</p>
            <hr />
            {props.date}
        </div>
    );
} 

export default Achievement;