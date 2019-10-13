import React, { Component } from 'react';

import Form from '../Form';

class TeamForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: {
                name: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Member Name",
                    },
                    value: "",
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                designation: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Member Designation",
                    },
                    value: "",
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                content: {
                    elementType: "textarea",
                    elementConfig: {
                        placeholder: "About The Member"
                    },
                    value: "",
                    validation: {
                        required: true 
                    },
                    valid: false,
                    touched: false 
                },
                contactLink: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Instagram Account Url",
                    },
                    value: "",
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                image: {
                    elementType: "file",
                    elementConfig: {
                        type: "file",
                        accept: "image/*",
                        uploadinfo: "Member Photo"
                    },
                    value: "",
                    validation: {
                        required: true 
                    },
                    valid: false,
                    touched: false 
                },

            },
            formIsValid: false
        }
    }

    render () {
        return (
            <Form formConfig={this.state.formConfig} formName="New Achievement" />
        );
    }
}

export default TeamForm;