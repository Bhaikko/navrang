import React, { Component } from 'react';

import Form from '../Form';

class NoticeForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formConfig: {
                title: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Notice Title",
                    },
                    value: "",
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                name: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Notice Author Name",
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
                        placeholder: "Notice Author Designation",
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
                    label: "Notice Issue Date",
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
                        accept: "image/*, .pdf, .doc",
                        uploadinfo: "File Related To Notice"
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
            <Form formConfig={this.state.formConfig} formName="New Notice" url="/admin/notices"  />
        );
    }
}

export default NoticeForm;