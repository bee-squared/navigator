import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ActivityStream from './components/activity/activity-stream/activity-stream';
import Profile from './components/profile/profile';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>This is the Navigator App</div>
        </header>
        <Switch>
          <Route exact path='/'>
            <ActivityStream/>
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
