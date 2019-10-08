import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import AchievementsPage from './containers/AcheivementsPage/AchievementsPage';
import AlumniPage from './containers/AlumniPage/AlumniPage';
import EventsPage from './containers/EventsPage/EventsPage';
import NoticesPage from './containers/NoticePage/NoticePage';

class App extends Component {


  render () {

    let routes = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/achievements" component={AchievementsPage} />
        <Route path="/alumni" component={AlumniPage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/notices" component={NoticesPage} />
      </Switch>
    );
    
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    ); 
  }
}

export default App;
