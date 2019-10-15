import React, { Component } from 'react';

import classes from './EventsPage.css';
import Container from './../../components/UI/SectionContainer/Container';
import Title from './../../components/UI/Title/Title';
import Events from '../../components/Events/Events';
import Spinner from './../../components/UI/Spinner/Spinner';

import axios from './../../axios';


class EventsPage extends Component {

constructor (props) {
        super(props);

        this.state = {
            loading: true,
            events: []
        }
        
    }

    componentDidMount () {
        axios.get("/public/events")
            .then(data => {
                this.setState({
                    loading: false,
                    events: data.data 
                });
            })
    }

    render () {
        console.log(this.state.events);
        if (this.state.loading) {
            return <Spinner />
        }

        return (
            <Container className={classes.Container}>
                {
                    this.state.events.length !== 0 ? 
                    (
                        <div>
                            <Title>Upcoming Events</Title>
                            <Events events={this.state.events} />
                        </div>
                    ) :
                    <Title>No Upcoming Events, Stay Tuned</Title>
                }

            </Container>
        ); 
    }
}

export default EventsPage;