import React, { Component } from 'react';
import { connect } from 'react-redux';

import AdminPage from './containers/AdminPage/AdminPage';
import AdminLogin from './containers/AdminLoginPage/AdminLogin';
import Layout from './hoc/Layout/Layout';

import Spinner from './components/UI/Spinner/Spinner';
import * as actions from './store/action/index';

class App extends Component {

  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    if (token) {
      this.props.onAutoLogin(token);
    }
  }

  render () {
    let currentPage = this.props.token ? 
    (
      <Layout admin >
        <AdminPage />
      </Layout>
    ) :
    (
      <div>
        <AdminLogin error={this.props.err} />; 
      </div>
    )

    return (
      <div>
        {this.props.loading ? <Spinner /> : currentPage}

      </div>
    ); 
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    loading: state.auth.loading,
    err: state.auth.err 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoLogin: token => dispatch(actions.autoLogin(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
