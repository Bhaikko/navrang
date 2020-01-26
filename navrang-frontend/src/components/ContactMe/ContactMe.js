import React from 'react';

import classes from './ContactMe.css';

import Container from '../UI/SectionContainer/Container';
import IconLink from './../IconLink/IconLink';

const contactMe = (props) => {
    return (
        <Container>
            <div className={classes.Name}>
                Made with &#10084; By Siddharth Pawar
                <IconLink
                    icon="github"
                    contact="https://github.com/Bhaikko"
                    classes={classes.IconLink}
                    />
                <IconLink
                    icon="linkedIn"
                    contact="https://www.linkedin.com/in/siddharth-pawar-81172b186/"
                    classes={classes.IconLink}
                />
            </div>
        </Container>
    );
}

export default contactMe;