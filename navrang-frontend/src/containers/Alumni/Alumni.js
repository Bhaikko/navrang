import React, { Component } from 'react';

import Card from './Card/Card';
import classes from './Alumni.css';
import Title from './../../components/UI/Title/Title';
import Button from './../../components/UI/Button/Button';
import Container from './../../components/UI/LandingPageContainer/LandingPageContainer';


import { ALUMNI } from './../../data/data';

class Alumni extends Component {

    constructor (props) {
        super(props);
        this.state = {
            team: [ALUMNI[0], ALUMNI[1], ALUMNI[2]]
        }
    }

    render () {
        return (
            <Container>
                <Title>Alumni</Title>
                <div className={classes.Alumni}>
                    {this.state.team.map(member => <Card 
                        key={member.id}
                        imageUrl={member.image} 
                        name={member.name}
                        designation={member.designation}
                        contact={member.contact}
                        about={member.about} />) }
                </div>
                <Button>Meet The Team</Button>

            </Container>
        );  
    }
}

export default Alumni;