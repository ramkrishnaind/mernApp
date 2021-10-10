import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, makeStyles, Box, TextField, Button } from '@material-ui/core';
import PageBanner from '../../../components/page-banner';
import '../my-account.css';

const useStyles = makeStyles((theme) => ({

}));

const MyProperty = (props) => {


  return (
    <div>
      <PageBanner
        bgImage={'/about_us.jpeg'}
        title="My Property"
        currentPage="My Property"
      />

      <Container>
        <Box className="content-wrapper">
           
        </Box>
      </Container>

    </div>
  );
};

export default MyProperty;