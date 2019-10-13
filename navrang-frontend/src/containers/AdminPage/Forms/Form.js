import React, { Component } from 'react';

import Input from './../../../components/UI/Input/Input';
import Button from './../../../components/UI/Button/Button';

import classes from './Form.css';

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            form: this.props.formConfig
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

        if(rules.minLength) {
            isValid = value.trim().length > rules.minLength
        }

        if(rules.isPhone) {
            const pattern = /[^0-9]/;
            isValid = value.trim().length === 10 && pattern.test(value.trim());
        }

        return isValid;
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedform = {
            ...this.state.form
        }

        const updatedFormElement = {
            ...updatedform[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedform[inputIdentifier] = updatedFormElement;

        let formIsValid = true;

        // eslint-disable-next-line
        for(let inputIdentifier in updatedform) {
            formIsValid = updatedform[inputIdentifier].valid && formIsValid;
        }


        this.setState({
            form: updatedform,
            formIsValid: formIsValid 
        });
    }

    render () {
        const formElementsArray = [];

        // eslint-disable-next-line
        for(let key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            });
        }

        let form = (

            <form onSubmit={this.contactHandler} style={{height: "100%"}}>
                {formElementsArray.map(formElement => (
                    <Input 
                        label={formElement.config.label}
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
            <div className={classes.Form}>
                <h4>{this.props.formName}</h4>
                {form}
            </div>
        );
    }
}

export default Form;