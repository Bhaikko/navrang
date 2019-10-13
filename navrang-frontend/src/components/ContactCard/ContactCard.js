import React from 'react';

import classes from './ContactCard.css';
import Title from './../UI/Title/Title';

const contactCard = props => {
    return (
        <div className={classes.ContactCard}>
            <Title style={{alignText: "center"}}>{props.name}</Title>
            <div className={classes.ContactContainer}>
                <span className={classes.Header} >Email: </span>
                <span className={classes.Data} >{props.email}</span>
            </div>
            <div className={classes.PhoneContainer}>
                <span className={classes.Header} >Phone: </span>
                <span className={classes.Data} >{props.phone}</span>
            </div>
        </div>
    );
}

export default contactCard;