import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Alert } from 'react-bootstrap';
import Loader from '../components/helpingComponents/Loader';
import Message from '../components/helpingComponents/Message';
const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        //dispatch(productLists());
    }, [dispatch]);
    return (
        <>
            {
                [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                  ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                      This is a {variant} alert—check it out!
                    </Alert>
                  ))
            }
            
        </>
    );
}

export default HomePage;