import { Box, Container } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';

function ContactUs(props){
    return(
        <Box>
            <Box> 
            <Header />
            <div className="footer-section">
            <Container style={{paddingTop: 10, paddingBottom: 40}}>
                <Footer />
            </Container>
            </div>
        </Box>
        </Box>
    )
}

export default ContactUs;