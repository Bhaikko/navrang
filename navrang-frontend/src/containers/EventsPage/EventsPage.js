import React, { Component } from 'react';

import classes from './EventsPage.css';
import Container from './../../components/UI/LandingPageContainer/LandingPageContainer';
import Title from './../../components/UI/Title/Title';
import Events from './Events/Events';

import { EVENTS } from './../../data/data';

class EventsPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            EVENTS
        };
    }

    render () {
        return (
            <Container className={classes.Container}>
                <Title>Upcoming Events</Title>
                <Events events={this.state.EVENTS} />

            </Container>
        ); 
    }
}

export default EventsPage;