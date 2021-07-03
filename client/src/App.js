import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from '../src/routes';
import {useSelector} from 'react-redux';

const App = () => {
  const isAuth = useSelector(state => state.Login.isAuth);

  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route exact={route.exact} path={route.path} render={() => route.render({isAuth})} key={i} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
