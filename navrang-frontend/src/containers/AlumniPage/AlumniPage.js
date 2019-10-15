import React, { Component } from 'react';

import classes from './AlumniPage.css';

import Container from './../../components/UI/SectionContainer/Container';
import Title from './../../components/UI/Title/Title';
import Alumni from '../../components/Alumni/Alumni';
import Spinner from './../../components/UI/Spinner/Spinner';

import axios from './../../axios';


class AlumniPage extends Component {
    constructor (props) {
        super(props);

        this.state = {
            loading: true,
            team : []
        }
        
    }

    componentDidMount () {
        axios.get("/public/team")
            .then(data => {
                this.setState({
                    loading: false,
                    team: data.data 
                });
            })
    }



    render () {
        if(this.state.loading) {
            return <Spinner />
        }
        return (
            <Container className={classes.Container}>
                <Title>Hi There</Title>
                <Alumni team={this.state.team} />

            </Container>
        ); 
    }
}

export default AlumniPage;