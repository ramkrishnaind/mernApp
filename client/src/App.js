import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from '../src/pages/home';

const App = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  );
}

export default App;
