import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, makeStyles, Box } from '@material-ui/core';
import '../about-us.css';
import PageBanner from '../../../components/page-banner';


const useStyles = makeStyles((theme) => ({

}));

const ConstructionProcess = (props) => {
  const classes = useStyles();

  return (
    <div style={{ background: '#fff' }}>
      <PageBanner
        bgImage={'/about_us.jpeg'}
        title="Construction Process"
        currentPage="Construction Process"
      />

      <Container>
        <Box className="content-wrapper">
          <Box className="about-page-item">
            <Grid container spacing={3} alignItems="center">
              <Grid className="about-page-summery" item xs={12} md={6}>
                <Box className="about-page-content">                
                  <Typography variant="h3">Readying construction site and pouring the foundation</Typography>
                  <Typography>
                  In the inception stage, the work begins with digging the ground and setting the foundation. This involves digging trenches and removing stones This is continued by installing footings. Concrete is also poured into the holes and trenches and allowed to dry. After the concrete is dry, a waterproofing membrane is applied over foundation walls followed by the installation of drains, sewer, taps, and plumbing.
                  </Typography>
                </Box>
              </Grid>
              <Grid className="about-page-images" item xs={12} md={6} className={classes.style2}>
                <Box className="about-page-image"><img src={process.env.PUBLIC_URL + '/images/Construction-Process-1.jpg'} /></Box>
              </Grid>
            </Grid>
          </Box>

          <Box className="about-page-item">
            <Grid container spacing={3} direction="row-reverse" alignItems="center">
              <Grid className="about-page-summery" item xs={12} md={6}>
                <Box className="about-page-content">                
                  <Typography variant="h3">Setting the Skeleton of the House</Typography>
                  <Typography>
                  The skeleton of the house is erected. This includes installing floor systems, roofs, and walls followed by applying sheath to the exteriors as a protective barrier on all the walls, roofs, windows and external doors. This is to ensure all the water vapor is removed in addition to preventing any spoilage.
                  </Typography>
                </Box>
              </Grid>
              <Grid className="about-page-images" item xs={12} md={6} className={classes.style2}>
                <Box className="about-page-image"><img src={process.env.PUBLIC_URL + '/images/Construction-Process-2.jpg'} /></Box>
              </Grid>
            </Grid>
          </Box>

          <Box className="about-page-item">
            <Grid container spacing={3} alignItems="center">
              <Grid className="about-page-summery" item xs={12} md={6}>
                <Box className="about-page-content">                  
                  <Typography variant="h3">Carrying out Basic installation of Electrical, Plumbing, and HVAC</Typography>
                  <Typography>
                  Installation of majorly all pipes, electrical connection, sewage, and entire plumbing is carried out in this phase. At the same time ductwork is installed for HVAC viz. heating, ventilation and Air Conditioning and wiring for music systems, TV and telephones are done. It is installed through the roof while the insulations are fixed through ceilings, walls, and floors.
                  </Typography>
                </Box>
              </Grid>
              <Grid className="about-page-images" item xs={12} md={6} className={classes.style2}>
                <Box className="about-page-image"><img src={process.env.PUBLIC_URL + '/images/Construction-Process-3.jpg'} /></Box>
              </Grid>
            </Grid>
          </Box>

           <Box className="about-page-item">
            <Grid container spacing={3} direction="row-reverse" alignItems="center">
              <Grid className="about-page-summery" item xs={12} md={6}>
                <Box className="about-page-content">                
                  <Typography variant="h3">Fixing of Insulation</Typography>
                  <Typography>
                  This is the key phase of the entire construction. Insulation ensures to improve the energy efficiency of the house to make it more comfortable acting as thermal protection. These are installed on the exterior walls, attic, and floors too. Fiberglass, Spray foam, concrete blocks, structured insulated panels, cellulose are some of the elements used for insulating new homes.
                  </Typography>
                </Box>
              </Grid>
              <Grid className="about-page-images" item xs={12} md={6} className={classes.style2}>
                <Box className="about-page-image"><img src={process.env.PUBLIC_URL + '/images/Construction-Process-4.jpg'} /></Box>
              </Grid>
            </Grid>
          </Box>

          <Box className="about-page-item">
            <Grid container spacing={3} alignItems="center">
              <Grid className="about-page-summery" item xs={12} md={6}>
                <Box className="about-page-content">                  
                  <Typography variant="h3">Covering of exteriors, drywall and texturing</Typography>
                  <Typography>
                  Here is where begins the actual installation of exterior finishes using materials like stone, bricks, stucco, and siding. Prior to this the drywall is hung and tapped well by texturing it completely. Over this, a coat of primer is painted once again after the tapping process after which begin covering of an external structure.
                  </Typography>
                </Box>
              </Grid>
              <Grid className="about-page-images" item xs={12} md={6} className={classes.style2}>
                <Box className="about-page-image"><img src={process.env.PUBLIC_URL + '/images/Construction-Process-5.jpg'} /></Box>
              </Grid>
            </Grid>
          </Box>

        </Box>
      </Container>
      )
    </div>
  );
};

export default ConstructionProcess;