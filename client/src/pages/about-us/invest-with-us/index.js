import React, {useEffect, useState} from 'react';
import {Container, Grid, Typography, makeStyles, Box} from '@material-ui/core';
import '../about-us.css';
import PageBanner from '../../../components/page-banner';
import DescriptionIcon from '@material-ui/icons/Description';
import ApiClient from '../../../api-client';
import HtmlParser from 'react-html-parser';

const useStyles = makeStyles((theme) => ({

}));

const InvestWithUs = (props) => {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    populateInvestWithUsDetails();
  }, []);


  const populateInvestWithUsDetails = () => {
    const getData = async () => {
      const response = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, '/investWithUs/getActiveInvestWithUs', {}, {}, {Cookie: ApiClient.cookie, Authorization: ApiClient.authorization}, false);

      setData(response.data);
      // console.log('About us details', aboutUsInfo, aboutSection);
    };
    getData();
  };
  let img = 'no-image-available-icon-6.png';
  console.log("data", data);
  if (data)
    img = data?.image[0]?.path ? ApiClient.SERVER_ADDRESS + '/' + data.image[0].path : 'no-image-available-icon-6.png';

  return (
    <div style={{background: '#fff'}}>
      <PageBanner
        bgImage={'/about_us.jpeg'}
        title="Invest With Us"
        currentPage="Invest With Us"
      />

      <Container>
        <Box className="content-wrapper">
          <Box className="about-page-item">
            <Box className="about-page-content" align="center">
              <Typography variant="h3">Invest Now For Consistent Returns</Typography>
              <Typography>
                {HtmlParser(data?.shortDescription)}
              </Typography>
            </Box>
          </Box>
          <Box className="about-page-item">
            <Grid container spacing={3}>
              <Grid className="about-page-summery" item xs={12} md={7}>
                <Box className="about-page-content">
                  <Typography variant="h3"> {HtmlParser(data?.title)}</Typography>
                  <Typography>
                    {HtmlParser(data?.description)}
                  </Typography>
                </Box>
              </Grid>
              <Grid className="about-page-images" item xs={12} md={5} className={classes.style2}>
                <Box className="about-page-image"><img src={img} alt='' /></Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Box className="invest-items-wrapper">
        <Container>
          <Box className="page-section-header" align="center">
            <Box component="h2" className="page-section-title">How We Invest</Box>
          </Box>
          <Box className="invest-items">
            <Grid container spacing={3}>
              {(data?.howToInvest || []).map((details, i) => {
                return <Grid className="invest-item" item xs={12} md={4}>
                  <Box className="client-block-icon">
                    <i className={`fas ${details.icon}`} style={{color: '#FF7601', fontSize: 40, padding: 0, margin: 20}} aria-hidden="true"></i>
                  </Box>
                  <Typography variant="h4">{details.title}</Typography>
                  <Typography> {details.detail}</Typography>
                </Grid>;
              })
              }
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default InvestWithUs;