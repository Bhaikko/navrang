import React from 'react';

import classes from './Card.css';

import InstagramIcon from './../../../assets/icons/instagram.png'

const card = (props) => {

    return (
        <div className={classes.Card}>
            <div className={classes.ImageContainer}>
                <img className={classes.Image} alt="profile" src={props.imageUrl} />
            </div>
            <div className={classes.Header}>{props.name}</div>
            <div className={classes.Designation}>{props.designation}</div>
            <hr />
            <div className={classes.About}>{props.about}</div>
            <hr />
            <span>Follow Me On: </span>
            <a  target="_blank" href={props.contact}>
                <div className={classes.ContactContainer}>
                    <img className={classes.Contact} alt="contact" src={InstagramIcon} /> 
                </div>
            </a>
        </div>
    );  

}

export default card;