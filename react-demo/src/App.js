import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { FrontendAuth } from './components/frontend-auth';

import './App.css';
import './index.css';
import Index from './pages/Index';
import Login from './pages/Login';

const routerConfig = [
  {
    path: '/',
    component: Index,
    auth: true
  },
  {
    path: '/Login',
    component: Login,
    auth: false
  }
]


const App = () => (
  <Router>
    <Switch>
      <FrontendAuth config={routerConfig}></FrontendAuth>
    </Switch>
  </Router>
);

export default App;
