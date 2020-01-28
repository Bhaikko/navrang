import React from 'react';

import classes from './Issue.css';
import Title from './../UI/Title/Title';

const issueCard = props => {
    return (
        <div className={classes.Issue}>
            <Title>Issue</Title>
            <div className={classes.Content}>{props.content}</div>
            <div className={classes.Name}>{props.name},</div>
            <div className={classes.Email}>{props.email}</div>
            <div className={classes.Date}>{props.date}</div>
        </div>
    );
}

export default issueCard;