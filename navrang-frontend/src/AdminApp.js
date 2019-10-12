import React, { Component } from 'react';

import AdminPage from './containers/AdminPage/AdminPage';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render () {
    return (
      <div>
        <Layout admin >
          <AdminPage />
        </Layout>
      </div>
    ); 
  }
}

export default App;
