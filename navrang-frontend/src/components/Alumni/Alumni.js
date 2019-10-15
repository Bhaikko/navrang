import React from 'react';

import Card from './Card/Card';
import classes from './Alumni.css';

const Alumni = props => {
    console.log(props);
    
    return (
        <div className={classes.Alumni}>
            {props.team.map(member => <Card 
                key={member.id}
                imageUrl={member.imageLink} 
                name={member.name}
                designation={member.designation}
                contact={member.contactLink}
                about={member.about} />) }
        </div>
    );  

}

export default Alumni;