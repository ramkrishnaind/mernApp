import React, {useState,useEffect} from "react";
import { HashRouter, Route, Switch, Redirect} from "react-router-dom";
import { withRouter } from "react-router";
import { useIdleTimer } from 'react-idle-timer'
// components
import Layout from "./Layout/Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

// context
//import { useUserState } from "../context/UserContext";

export default function App() {
  
  const [isActive, setIsActive] =  useState(true)

 

  const handleOnIdle = event => {
    localStorage.removeItem("user")
    setIsActive(false)
    
  }



  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * 15,
    onIdle: handleOnIdle,
    debounce: 50
  })

  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            localStorage.getItem("user") ? (
              <Redirect to="/app/dashboard" />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                }}
              />
            )
          }
        />
       
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        {
          !isActive ? <Route
          component={withRouter(Login)}
          render={() => <Redirect to="/login" />}
        />: <PrivateRoute path="/app" component={withRouter(Layout)} />
        }

        
        <PublicRoute path="/login" component={withRouter(Login)} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    console.log("rest", rest)
    // if(!(localStorage.getItem("user")))
    // {
    //   rest.history.push("/login")
    // }
    return (
      <Route
        {...rest}
        render={(props) =>
          // localStorage.getItem('user') ? (
            localStorage.getItem("user") ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          false ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}