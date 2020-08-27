import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';
import './index.css';
import Index from './pages/Index';
import Login from './pages/Login';


const App = () => (
  <Router>
    <Route path="/" exact component={Index}></Route>
    <Route path="/Login" component={Login}></Route>
  </Router>
);

export default App;
