import React, { Component, Fragment } from 'react';

import Modal from './../../components/UI/Modal/Modal';

const withErrorhandler = (WrappedComponent, axios) => {
    return class extends Component {

        constructor (props) {
            super(props);

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null 
                });
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(response => response, error => this.setState({ error: error }));
        }

        state = {
            error: null 
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }


        errorConfirmed = () => {
            this.setState({
                error: null 
            });
        }

        render () {
            return (
                <Fragment>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmed}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }
}

export default withErrorhandler;