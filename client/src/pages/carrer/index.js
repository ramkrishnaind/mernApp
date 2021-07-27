
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Container } from '@material-ui/core';
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateRangeIcon from '@material-ui/icons/DateRange';
import "./index.css"
import PageBanner from "../../components/page-banner";
import bannerImage from "../../images/clientbg.jpeg";
import Workspace1 from "../../images/carrer_img/about_carrier.png";
import Workspace2 from "../../images/carrer_img/about_carrier2.png";
import Workspace3 from "../../images/carrer_img/about_carrier3.png";
import Workspace4 from "../../images/carrer_img/about_carrier4.png";
import Workspace5 from "../../images/carrer_img/about_carrier6.png";
import Workspace6 from "../../images/carrer_img/about_carrier7.png";
import ApplyJobs from '../../components/apply-jobs/apply-jobs';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Carrer() {
  const classes = useStyles();

  return (
      <>
      <PageBanner
        bgImage={bannerImage}
        title="Career"
        currentPage="CAREER"
      />
      <Box className="CareerPageText">
        <Container>
            <div className={classes.root} className="headingtext">                
                <Box className="middel-content"> 
                    {/* <CarrierBannerImg /> */}
                    <h2>Come, Join Us! <span style={{color:"#00afb8"}}>We’re Hiring.</span></h2>

                    <p>We believe that each one of us should be able to find our dream job, and we constantly strive hard to make that possible. Apply now!</p>

                    <div className="job-list">
                        <div className="row">
                            <div className=" job_inner wow fadeInUp" >
                            <Grid item xs={9}>
                                    <h3 className="job-title">Assistant Manager - Marketing - 1 Position</h3>
                                    <div className="job-details-section">
                                        <div className="job-detail">                                        
                                            <span className="detail-value"> <DateRangeIcon style={{ color: "#FF7601",  }} />7-11 yrs</span>
                                        </div>
                                        <div className="job-detail">
                                            <span className="detail-value"><LocationOnIcon style={{ color: "#FF7601",  }} /> Jaipur</span>
                                        </div>
                                    </div>
                            </Grid>
                                <Grid item xs={3}>
                                    <Box className="ParentButton">
                                        <ApplyJobs buttonName={"Apply Now"} Jobsheading={""} />
                                    </Box>
                                </Grid>
                            </div>
                            <div className=" job_inner wow fadeInUp" >
                            <Grid item xs={9}>
                                    <h3 className="job-title">Assistant Manager - Marketing - 1 Position</h3>
                                    <div className="job-details-section">
                                        <div className="job-detail">                                        
                                            <span className="detail-value"> <DateRangeIcon style={{ color: "#FF7601",  }} />7-11 yrs</span>
                                        </div>
                                        <div className="job-detail">
                                            <span className="detail-value"><LocationOnIcon style={{ color: "#FF7601",  }} /> Jaipur</span>
                                        </div>
                                    </div>
                            </Grid>
                                <Grid item xs={3}>
                                    <Box className="ParentButton">
                                        <ApplyJobs buttonName={"Apply Now"} Jobsheading={""} />
                                    </Box>
                                </Grid>
                            </div>
                            <div className=" job_inner wow fadeInUp" >
                            <Grid item xs={9}>
                                    <h3 className="job-title">Assistant Manager - Marketing - 1 Position</h3>
                                    <div className="job-details-section">
                                        <div className="job-detail">                                        
                                            <span className="detail-value"> <DateRangeIcon style={{ color: "#FF7601",  }} />7-11 yrs</span>
                                        </div>
                                        <div className="job-detail">
                                            <span className="detail-value"><LocationOnIcon style={{ color: "#FF7601",  }} /> Jaipur</span>
                                        </div>
                                    </div>
                            </Grid>
                                <Grid item xs={3}>
                                    <Box className="ParentButton">
                                        <ApplyJobs buttonName={"Apply Now"} Jobsheading={""} />
                                    </Box>
                                </Grid>
                            </div>
                            <div className=" job_inner wow fadeInUp" >
                            <Grid item xs={9}>
                                    <h3 className="job-title">Assistant Manager - Marketing - 1 Position</h3>
                                    <div className="job-details-section">
                                        <div className="job-detail">                                        
                                            <span className="detail-value"> <DateRangeIcon style={{ color: "#FF7601",  }} />7-11 yrs</span>
                                        </div>
                                        <div className="job-detail">
                                            <span className="detail-value"><LocationOnIcon style={{ color: "#FF7601",  }} /> Jaipur</span>
                                        </div>
                                    </div>
                            </Grid>
                                <Grid item xs={3}>
                                    <Box className="ParentButton">
                                        <ApplyJobs buttonName={"Apply Now"} Jobsheading={""} />
                                        {/* <Button>Apply Now</Button> */}
                                    </Box>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box className="work-space">
                    <h2>Vishal <span style={{color:"#00afb8"}}>Work Space</span></h2>
                    <Grid container spacing={3}>
                        <Grid item xs={4} className="workSpaceImgaes">
                            <img src={process.env.PUBLIC_URL + Workspace1} />
                        </Grid>
                        <Grid item xs={4} className="workSpaceImgaes">
                            <img src={process.env.PUBLIC_URL + Workspace2} />
                        </Grid>
                        <Grid item xs={4} className="workSpaceImgaes">
                            <img src={process.env.PUBLIC_URL + Workspace3} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={4} className="workSpaceImgaes">
                            <img src={process.env.PUBLIC_URL + Workspace4} />
                        </Grid>
                        <Grid item xs={4} className="workSpaceImgaes">
                            <img src={process.env.PUBLIC_URL + Workspace5} />
                        </Grid>
                        <Grid item xs={4} className="workSpaceImgaes">
                            <img src={process.env.PUBLIC_URL + Workspace6} />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Container>
    </Box>
    </>
  );
}
