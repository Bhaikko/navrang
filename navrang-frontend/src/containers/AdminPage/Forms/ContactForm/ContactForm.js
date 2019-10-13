import React, { Component } from 'react';

import Form from '../Form';

class ContactForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: {
                name: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Contact Name",
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
                        isEmail: true 
                    },
                    valid: false,
                    touched: false
                },
                phone: {
                    elementType: "input",
                    elementConfig: {
                        placeholder: "Phone"
                    },
                    validation: {
                        isPhone: true
                    },
                    value: "",
                    valid: false,
                    touched: false 
                },
            },
            formIsValid: false
        }
    }

    render () {
        return (
            <Form formConfig={this.state.formConfig} formName="New Contact" />
        );
    }
}

export default ContactForm;