import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GroupImage from './../../components/GroupImage/GroupImage';
import Achievements from './../../components/Achievements/Achievements';
import Alumni from './../../components/Alumni/Alumni';
import AboutUs from './../../components/AboutUs/AboutUs';
import ContactUs from './../../components/ContactUs/ContactUs';
import ContactMe from './../../components/ContactMe/ContactMe';

import Container from './../../components/UI/SectionContainer/Container';
import Title from './../../components/UI/Title/Title';
import Button from './../../components/UI/Button/Button';


import classes from './LandingPage.css';

import axios from './../../axios';

import Spinner from './../../components/UI/Spinner/Spinner';

class LandingPage extends Component {

    constructor (props) {
        super(props);

        this.state = {
            loading: true,
            alumni: null,
            achievements: null 
        }
    }

    componentDidMount () {
        axios.get("/public/front")
            .then(data => {
                this.setState({
                    alumni: [data.data[0], data.data[1], data.data[2]],
                    achievements: data.data[3],
                    loading: false
                })
            });
    }

    render () {

        if (this.state.loading) {
            return (
                <Spinner />
            );
        }

        return (
            <div className={classes.LandingPage}>
                <GroupImage />
                <Container>
                    <Title >Achievements</Title>
                    <Achievements achievements={this.state.achievements} animate />
                    <Link to="/achievements" style={{textDecoration: "none"}}>
                        <Button>View All Achievements</Button>

                    </Link>
                </Container>

                <Container>
                    <Title >Alumni</Title>
                    <Alumni team={this.state.alumni} animate />
                    <Link to="/alumni" style={{textDecoration: "none"}}>
                        <Button>Meet The Team</Button>
                    </Link>
                </Container>

                <AboutUs id="aboutUs" />
                <ContactUs id="contactUs" />
                <ContactMe />
            </div>
        );
    }
}

export default LandingPage;