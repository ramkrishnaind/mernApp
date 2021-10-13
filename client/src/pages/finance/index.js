import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import PageBanner from "../../components/page-banner";
import ApiClient from "../../api-client";
import HtmlParser from "react-html-parser";

const useStyles = makeStyles((theme) => ({}));

const Finance = (props) => {
  const [financeSection, setFinanceSection] = useState([]);
  const [bankImage, setBankImage] = useState([]);

  React.useEffect(() => {
    financeResponse();
  }, []);

  const financeResponse = () => {
    const getData = async () => {
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/finance/getFinanceData",
        {},
        {},
        { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
        false
      );
      setFinanceSection(response.data[0] || []);
      setBankImage(response.data[0]?.media[0]?.bankImage || []);
    };
    getData();
  };
  console.log("financeSection", bankImage);
  return (
    <div>
      <PageBanner
        bgImage={"/about_us.jpeg"}
        title="Finance"
        currentPage="Finance"
      />

      <Container>
        <Box className="content-wrapper">
          <Box className="about-block-item">
            <Grid container spacing={3} alignItems="center">
              <Grid
                className="about-block-images"
                item
                xs={12}
                md={5}
                className=""
              >
                <Box className="about-block-image">
                  <img src="../images/about-img.jpg" alt="" />

                  <div id="form1" class="finance-form-block">
                    <form className="map-form finance-form">
                      <TextField
                        className="form-group"
                        label="Loan Amount"
                        variant="filled"
                        required
                        value="100000"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        className="form-group"
                        label="Interest Rate"
                        variant="filled"
                        required
                        value="10.5"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        className="form-group"
                        label="Loan Tenure"
                        variant="filled"
                        required
                        value="36"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />

                      <div className="form-btn">
                        <Button
                          type="submit"
                          className="search-btn"
                          variant="contained"
                        >
                          Search
                        </Button>
                      </div>
                    </form>
                  </div>
                </Box>
              </Grid>
              <Grid className="about-block-summery" item xs={12} md={7}>
                <Box className="about-block-content">
                  <Typography variant="h3">{financeSection?.title} </Typography>
                  <Typography>
                    {HtmlParser(financeSection.description)}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box className="page-section-header" align="center">
            <Box component="h2" className="page-section-title">
              OUR FINANCE BANK
            </Box>
          </Box>
          <Box className="finance-bank-section">
            <Box className="finance-bank-outer">
              {bankImage?.map((item, index) => {
                return (
                  <Box className="finance-bank-wrap">
                    <img src={ApiClient.SERVER_ADDRESS + "/" + item.path} />
                  </Box>
                );
              })}
              {/* <Box className="finance-bank-wrap">
                <img src="../images/bank1.jpg" alt="" />
              </Box> */}
              {/* <Box className="finance-bank-wrap">
                <img src="../images/bank2.jpg" alt="" />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank3.jpg" alt="" />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank4.jpg" alt="" />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank5.jpg" alt="" />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank6.jpg" alt="" />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank7.jpg" alt="" />
              </Box>
              <Box className="finance-bank-wrap">
                <img src="../images/bank8.jpg" alt="" />
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Finance;
