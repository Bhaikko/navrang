import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <LandingPage />
        </Layout>
      </div>
    ); 
  }
}

export default App;
