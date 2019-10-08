import React, { Component } from 'react';

import Card from './Card/Card';
import classes from './Alumni.css';

const Alumni = props => {


    return (
        <div className={classes.Alumni}>
            {props.team.map(member => <Card 
                key={member.id}
                imageUrl={member.image} 
                name={member.name}
                designation={member.designation}
                contact={member.contact}
                about={member.about} />) }
        </div>
    );  

}

export default Alumni;