import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chatbox from './components/chatbox/Chatbox';
import SignIn from './components/auth/SignIn'

function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/" exact component={SignIn} />
        <Route path="/:username" exact component={Chatbox} />
      </Router>
    </div>
  );
}

export default App;
