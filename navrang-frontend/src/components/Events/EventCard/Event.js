import React from 'react';

import classes from './Event.css';

const event = props => {
    
    return (
        <div className={classes.CardContainer} >
            <div className={classes.ImageContainer}>
                <img src={props.imageUrl} alt="..." />
            </div>
            <hr />
            <a className={classes.Register} href={props.link} target="_blank" rel="noopener noreferrer"><div>Register Here</div></a>
            <hr />
            <div className={classes.Info} >{props.info}</div>
            <hr />
            <div className={classes.LastDate} >Hurry Up, Last Date: <b>{props.date}</b></div>
            <hr />
            <div className={classes.ContactUs} >For any queries, use our Contact Us page</div>
        </div>
    );
}

export default event;