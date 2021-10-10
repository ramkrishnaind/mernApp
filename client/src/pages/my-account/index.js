import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, makeStyles, Box, TextField, Button } from '@material-ui/core';
import PageBanner from '../../components/page-banner';
import './my-account.css';

const useStyles = makeStyles((theme) => ({

}));

const MyAccount = (props) => {


  return (
    <div>
      <PageBanner
        bgImage={'/about_us.jpeg'}
        title="My Acount"
        currentPage="My Account"
      />

      <Container>
        <Box className="content-wrapper">
           
        </Box>
      </Container>

    </div>
  );
};

export default MyAccount;