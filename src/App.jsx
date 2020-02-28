import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Activities from './components/activities';
import Profile from './components/profile';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>This is the Navigator App</div>
        </header>
        <Switch>
          <Route exact path='/'>
            <Activities />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
