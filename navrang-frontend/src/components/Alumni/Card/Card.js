import React from 'react';

import classes from './Card.css';
import IconLink from './../../../components/IconLink/IconLink';

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
            <IconLink 
                icon="instagram"
                contact={props.contact}
                style={{width: "10%"}} />
        </div>
    );  

}

export default card;