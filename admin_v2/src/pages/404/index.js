import React from 'react';
import {Box} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Error404Page = () => {

    return (
        <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            Oops! Page Not Found :( <Box style={{width: 20}} /><Link to="/">Go to Home</Link>
        </Box>
    );
}

export default Error404Page;