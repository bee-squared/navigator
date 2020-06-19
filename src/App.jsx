import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from './components/styled-components/navbar/navbar';
import ActivityStream from './components/activity/activity-stream/activity-stream';
import Profile from './components/profile/profile';
import NewActivity from './components/activity/new-activity/new-activity';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/dashboard'/>
          </Route>
          <Route path='/dashboard' component={ActivityStream} />
          <Route path='/profile' component={Profile} />
          {/* <Route exact path='/activity' component={ViewActivity} /> */}
          <Route exact path='/activity' component={NewActivity} />
          <Route exact path='/activity/:activityId' component={NewActivity} />
        </Switch>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
