import React from 'react';

import classes from './ContactDetail.css';

import Title from '../UI/Title/Title';
import IconLink from './../IconLink/IconLink';

const contactDetail = props => {
    return (
        <div className={classes.ContactDetailContainer}>
             <IconLink 
                contact={props.contact}
                icon={props.icon}
            />

            <div className={classes.ContactDetail}>
                <Title 
                    style={{
                        display: "inline-block", 
                        fontSize: 15, 
                        verticalAlign: "center"
                    }}
                >
                    {props.title}:
                </Title>
                <div className={props.detail} >{props.children}</div>
            </div>
        </div>
    );
}

export default contactDetail;