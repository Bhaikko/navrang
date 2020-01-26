import React from 'react';

import classes from './Events.css';
import Event from './EventCard/Event';

const events = props => {
    return (
        <div className={classes.Events}>
            {props.events.map(event => <Event 
                key={event.id}
                imageUrl={event.imageUrl}
                link={event.registrationLink}
                date={new Date(event.lastDate).toLocaleDateString()}
                info={event.info}
                name={event.name} />)}

        </div>
    );
}

export default events;