import { Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import blogDetailsImage from '../../images/Happy-Family.jpg'
import AuthorImage from '../../images/client_1.jpg'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import PostComments from './comments';


function BlogDetailsLeft(props) {
  
  return (
    <Box className="BlogDetailsLeft">
        <Grid item xs={12} lg={8} md={8} sm={12} className="Leftgrid">
            <>
            <img src={blogDetailsImage} alt="blogDetailsImage"  />
            <Grid container className="detailsheadingData">
                <Grid item xs={3} lg={3} md={3} sm={3} className="date">
                    <Typography className="dateText">25 <br/> <span className="month">Nov</span></Typography>
                </Grid>
                <Grid item xs={9} lg={9} md={9} sm={9} className="DetailsHeading">
                    <Typography className="DetailsText">Tips For Business Success 2017: Why To Online</Typography>
                    <Typography></Typography>
                    <Typography className="providedBy"><span>By Admin</span> <span> Advice, Fitness</span></Typography>
                </Grid>
            </Grid>
            </>
            <Typography className="blogDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</Typography>
            <Box className="PostAuthor">
                <Box className="authorphoto">
                    <img src={AuthorImage} alt="author Image"  />
                </Box>
                <Typography className="authorName">Rosalina William</Typography>
                <Grid container >
                    <Grid item xs={12} md={12} className="SocailMedia">
                        <Box className="social_icon">
                            <FacebookIcon style={{color: '#777777', fontSize: 20, padding: 0, }} />
                        </Box>
                        <Box className={`social_icon`}>
                            <TwitterIcon style={{color: '#777777', fontSize: 20, padding: 0, }} />
                        </Box>
                        <Box className={`social_icon`}>
                            <InstagramIcon style={{color: '#777777', fontSize: 20, padding: 0, }} />
                        </Box>
                        <Box className={`social_icon`}>
                            <LinkedInIcon style={{color: '#777777', fontSize: 20, padding: 0, }} />
                        </Box>
                    </Grid>
                </Grid>
                <Typography className="blogDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            </Box>
            <PostComments />
        </Grid>
    </Box>
  );
}

export default BlogDetailsLeft;
