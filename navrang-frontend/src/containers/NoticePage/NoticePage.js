import React, { Component } from 'react';

import classes from './NoticePage.css';

import Container from './../../components/UI/LandingPageContainer/LandingPageContainer';
import Title from './../../components/UI/Title/Title';
import Notices from './../../components/Notices/Notices';

import { NOTICES } from './../../data/data';

class NoticePage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            NOTICES
        }
    }

    render () {
        console.log(this.state.NOTICES)
        return (
            <Container className={classes.Container}>
                <Title>Notices And News</Title>
                <Notices notices={this.state.NOTICES} />

            </Container>
        ); 
    }
}

export default NoticePage;