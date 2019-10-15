import React, { Component } from 'react';

import classes from './AchievementsPage.css';
import Achievements from './../../components/Achievements/Achievements';
import Container from './../../components/UI/SectionContainer/Container';
import Title from './../../components/UI/Title/Title';
import Spinner from './../../components/UI/Spinner/Spinner';

import axios from './../../axios';

class AchievementsPage extends Component {

    constructor (props) {
        super(props);

        this.state = {
            loading: true,
            achievements: []
        }
        
    }

    componentDidMount () {
        axios.get("/public/achievements")
            .then(data => {
                this.setState({
                    loading: false,
                    achievements: data.data 
                });
            })
    }

    render () {
        if (this.state.loading) {
            return <Spinner />
        }
        return (
            <Container className={classes.Container} >
                <Title>Here's What We Built So Far</Title>
                <Achievements achievements={this.state.achievements} className={classes.Invisible} />
            </Container>
        ); 
    }
}

export default AchievementsPage;