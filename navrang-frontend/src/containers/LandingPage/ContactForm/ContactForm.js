import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';

import Spinner from './../../../components/UI/Spinner/Spinner';
import axios from './../../../axios';

import classes from './ContactForm.css';

const initialContactForm = {
    senderName: {
        elementType: "input",
        elementConfig: {
            type: "text",
            placeholder: "Your Name",
        },
        value: "",
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    senderEmail: {
        elementType: "input",
        elementConfig: {
            type: "email",
            placeholder: "Mail",
        },
        value: "",
        validation: {
            required: true,
            isEmail: true 
        },
        valid: false,
        touched: false
    },
    content: {
        elementType: "textarea",
        elementConfig: {
            placeholder: "Your Message..."
        },
        value: "",
        validation: {
            required: true 
        },
        valid: false,
        touched: false 
    }
}

class ContactForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contactForm: initialContactForm,
            formIsValid: false,
            loading: false
        }
    }

    checkValidity = (value, rules) => {
        if(!rules) {
            return true;
        }

        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if(rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        // console.log(this.state.contactForm);
        this.setState({
            loading: true 
        });

        const formData = {};
        for(let formElementIdentifier in this.state.contactForm) {
            formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
        }

        axios.post("/public/issues", formData)
            .then(res => {
                
                this.setState({
                    loading: false, 
                    contactForm: initialContactForm
                });
                alert("Thank You for contacting Us, We will reach you out soon.")
            })
            .catch(err => console.log);
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedcontactForm = {
            ...this.state.contactForm
        }

        const updatedFormElement = {
            ...updatedcontactForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedcontactForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;

        // eslint-disable-next-line
        for(let inputIdentifier in updatedcontactForm) {
            formIsValid = updatedcontactForm[inputIdentifier].valid && formIsValid;
        }


        this.setState({
            contactForm: updatedcontactForm,
            formIsValid: formIsValid 
        });
    }

    render () {
        const formElementsArray = [];

        // eslint-disable-next-line
        for(let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }

        let form = (

            <form onSubmit={this.contactHandler} style={{height: "100%"}}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangeHandler(event, formElement.id)} 
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched} />
                ))}
                <Button disabled={!this.state.formIsValid} onClick={this.formSubmitHandler} >Send Us</Button>
            </form>
        );
                    
        return (
            <div className={classes.ContactData}>
                {this.state.loading ?
                    <Spinner /> :
                    <div>
                        <h4>Contact Us Directly Here</h4>
                        {form}
                    </div>
                }
            </div>
        );
    }


}

export default ContactForm;