import { Box, Container } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import OnlineBooking from '../../components/online-form/online-form';
import BannerContent from './banner/banner-content/banner-content';
import BannerImage from './banner/banner-img/banner-img';



function BookOnline(){
    return(
        <Box> 
            {/* <Header /> */}
            <BannerImage />
            <OnlineBooking/>
            {/* <div className="footer-section">
            <Container style={{paddingTop: 10, paddingBottom: 40}}>
                <Footer />
            </Container>
            </div> */}
        </Box>
    )
}

export default BookOnline;