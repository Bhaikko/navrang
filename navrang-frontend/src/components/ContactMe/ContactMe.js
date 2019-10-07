import React from 'react';

import classes from './ContactMe.css';

import Container from './../UI/LandingPageContainer/LandingPageContainer';
import IconLink from './../IconLink/IconLink';

const contactMe = (props) => {
    return (
        <Container>
            <div className={classes.Name}>
                Made with &#10084; Siddharth Pawar 
                <IconLink
                    icon="github"
                    contact="https://github.com/Bhaikko"
                    style={{width: "2%", marginLeft: "10px"}} />
                <IconLink
                    icon="linkedIn"
                    contact="https://www.linkedin.com/in/siddharth-pawar-81172b186/"
                    style={{width: "2%", marginLeft: "10px"}} />
            </div>
        </Container>
    );
}

export default contactMe;