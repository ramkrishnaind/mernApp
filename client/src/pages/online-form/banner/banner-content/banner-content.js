import { Box, Container } from '@material-ui/core';
import React from 'react';
import "./banner-content.css"


function BannerContent(){
    return(
        <Container className="bannerContainer">
            <h2 className="bannerh2">Now Book A Vishal Ultima Online</h2>
            <h3 className="bannerh3">IN JUST 3 EASY STEPS</h3>
            {/* <img src={require('./3steps.png')} /> */}
            <span className="bannerancr">
                <a href="#">Home </a>
                <p>/ Book Now</p>
            </span>
        </Container>
    )
}

export default BannerContent;