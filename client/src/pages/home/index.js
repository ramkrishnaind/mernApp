import React, {useEffect} from "react";
import { Typography } from "@material-ui/core";
import {useDispatch} from 'react-redux';
import * as LoginAction from '../../redux/actions/LoginAction';
import {withRouter} from 'react-router-dom';

const HomePage = (props) => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(LoginAction.LoginRequestAsync({}));
  });

  return (
    <>
      <Typography>Home Page</Typography>
    </>
  );
};

export default withRouter(HomePage);
