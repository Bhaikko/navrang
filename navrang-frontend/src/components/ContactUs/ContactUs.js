import React from 'react';

import classes from './ContactUs.css';

import ContactDetail from '../ContactDetail/ContactDetail';
import Container from './../UI/SectionContainer/Container';
import Title from './../UI/Title/Title';
import ContactForm from './../../containers/LandingPage/ContactForm/ContactForm';

const contactUs = (props) => {
    return (
        <Container id={props.id} >
            <Title>Contact Us</Title>
            <div className={classes.Container}>
                <div className={classes.ContactDetailContainer} > 
                    <ContactDetail 
                        icon="email"
                        title="Email" >
                            navrang.abhivyakti@gmail.com
                        </ContactDetail>
                    
                    <ContactDetail 
                        icon="phone"
                        title="Phone">
                            80106 63897
                    </ContactDetail>
                        
                    <ContactDetail 
                        icon="location"
                        title="Location">
                            Ring Rd, Nehru Nagar, Lajpat Nagar, New Delhi, Delhi 110065
                    </ContactDetail>

                    <ContactDetail 
                        icon="facebook"
                        contact="https://www.facebook.com/NAVRANGTHEATRESOC/"
                        title="Facebook">
                            facebook.com/NAVRANGTHEATRESOC
                    </ContactDetail>
         
                        
                </div>
                <div className={classes.ContactForm} > 
                    <ContactForm />
                </div>

            </div>
        </Container>
    );
}

export default contactUs;