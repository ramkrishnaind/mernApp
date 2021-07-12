import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import classnames from "classnames";
import useStyles from "./styles";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import Dashboard from "../../pages/dashboard";
import { useLayoutState } from "../../context/LayoutContext";
import { store } from "../../_helpers";
import Admin from "../../pages/adminManagement/adminManagement";
import Menu from "../../pages/MenuManagement/MenuManagement";

function Layout(props) {
  let users = store.getState().users;
  console.log("users :: ", users);

  var classes = useStyles();
  var layoutState = useLayoutState();
  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />

          <Switch>
            <Route path="/app/dashboard" component={withRouter(Dashboard)} />
            
            <Route
              path="/app/admin"
              exact
              component={withRouter(Admin)}
            />
            
            <Route
              path="/app/menu"
              exact
              component={withRouter(Menu)}
            />
          </Switch>
        </div>
      </>
    </div>
  );
}
export default withRouter(Layout);
