import { Box, Container } from '@material-ui/core';
import React from 'react';
import BannerImage from '../../images/clientbg.jpeg';
import PageBanner from '../page-banner';
import BlogDetailsLeft from './blog-details-left';
import './blog-detalis.css'


function BlogDetails(props) {
  
  return (
    <Box className="Blog-details-main">
        <PageBanner
        bgImage={BannerImage}
        title="Blog Details"
        currentPage="Blog Details"
      />
      <Box className="blogdetailsData">
          <Container>
            <BlogDetailsLeft />
          </Container>

      </Box>
      
    </Box>
  );
}

export default BlogDetails;
