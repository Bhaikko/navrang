import React, { Component } from 'react';

import Form from '../Form';

class AchievementForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: {
                title: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Achievement Title",
                    },
                    value: "",
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                subtitle: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Achievement Sub-Title",
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
                        placeholder: "About The Achievement..."
                    },
                    value: "",
                    validation: {
                        required: true 
                    },
                    valid: false,
                    touched: false 
                },
                date: {
                    elementType: "date",
                    label: "Achievement Date",
                    elementConfig: {
                        placeholder: "Date",
                        type: "date"
                    },
                    value: "",
                    validation: {
                        required: true 
                    },
                    valid: false,
                    touched: false 
                },
                file: {
                    elementType: "file",
                    elementConfig: {
                        type: "file",
                        accept: "image/*",
                        uploadinfo: "Image Related To Achievement"
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
            <Form formConfig={this.state.formConfig} formName="New Achievement" url="/admin/achievements" />
        );
    }
}

export default AchievementForm;