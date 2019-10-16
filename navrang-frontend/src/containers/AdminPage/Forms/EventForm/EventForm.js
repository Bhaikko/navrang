import React, { Component } from 'react';

import Form from '../Form';

class EventForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: {
                name: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Event Name",
                    },
                    value: "",
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                lastDate: {
                    elementType: "date",
                    label: "Event Date",
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
                registrationLink: {
                    elementType: "input",
                    elementConfig: {
                        placeholder: "Google Form Link"
                    },
                    value: "",
                    validation: {
                        required: true 
                    },
                    valid: false,
                    touched: false 
                },
                info: {
                    elementType: "textarea",
                    elementConfig: {
                        placeholder: "About The Event... \n Event Details, Venue, Timings"
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
                        // accept: "image/*",
                        uploadinfo: "Image Related To Event"
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
            <Form formConfig={this.state.formConfig} formName="New Event" url="/admin/events" />
        );
    }
}

export default EventForm;