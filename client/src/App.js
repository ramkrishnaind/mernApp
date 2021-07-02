import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from '../src/routes';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route exact={route.exact} path={route.path} render={route.render} key={i} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
