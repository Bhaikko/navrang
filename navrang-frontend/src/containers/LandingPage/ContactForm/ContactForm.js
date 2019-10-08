import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';

import classes from './ContactForm.css';

class ContactForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contactForm: {
                name: {
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
                email: {
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
                message: {
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
            },
            formIsValid: false
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

    contactHandler = (event) => {
        event.preventDefault();
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
                <Button disabled={!this.state.formIsValid} >Send Us</Button>
            </form>
        );
                    
        return (
            <div className={classes.ContactData}>
                <h4>Contact Us Directly Here</h4>
                {form}
            </div>
        );
    }


}

export default ContactForm;