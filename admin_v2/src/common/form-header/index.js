

import './index.css'
import React from 'react';
import { Box } from '@material-ui/core';


function FormHeader(props){
    return(
        <Box className={'form-header'}>
            <h1 className="title-heading">User Role Management </h1><span>create and manage user role here</span>
        </Box>
    )
}

export default FormHeader;