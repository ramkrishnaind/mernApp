import React, {useEffect} from "react";
import { Typography } from "@material-ui/core";
import {useDispatch} from 'react-redux';
import * as LoginAction from '../../redux/actions/LoginAction';

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

export default HomePage;
