import React from 'react';

import classes from './AboutUs.css';

import Title from '../UI/Title/Title';
import Container from '../UI/SectionContainer/Container';

const aboutUs = (props) => {
    return (
        <Container id={props.id}>
            <Title>About Us</Title>
            <p className={classes.AboutUs}>
                NAVRANG referring to nine colours resembles 'nine emotions' is the essence crafted with the work. Navrang, well to be in official terms, is a society but unofficially it is a Family. It is a place where you gain confidence because of your friends who eventually becomes your family when you steps in.<br /> <br />
                Navrang is Navrangians come along and live life of a numerous characters, feel and experience the numerous new colours (Navrang) and explore the unexplored to roar for themselves. <br /> <br />
                The society is flourishing/booming since 2013 when it had performed it's most celebrated/ dignified and highly appreciated play of all time, Jaan-E-Man which was an impeccable piece of Art which was directed by the founder member of the society and, Mrigtrishna directed by Manoj Vairagi which always instigated our audience to give us their much love and appreciation whenever Navrang had performed. We continuously takes part in competitions and aims to learn something new as we all believe the famous quote that states “either we win or we learn ! We never lose”. From many years, we are trying our best to maintain the legacy and dignity that was passed on to us by our seniors and we will be trying this further too as long as we serve this society. <br/>
            </p>

        </Container>
    );
}

export default aboutUs;