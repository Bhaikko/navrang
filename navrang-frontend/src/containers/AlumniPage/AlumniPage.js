import React, { Component } from 'react';

import classes from './AlumniPage.css';

import Container from './../../components/UI/SectionContainer/Container';
import Title from './../../components/UI/Title/Title';
import Alumni from '../../components/Alumni/Alumni';

import { ALUMNI } from './../../data/data';

class AlumniPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            ALUMNI
        };
    }

    render () {
        return (
            <Container className={classes.Container}>
                <Title>Hi There</Title>
                <Alumni team={this.state.ALUMNI} />

            </Container>
        ); 
    }
}

export default AlumniPage;