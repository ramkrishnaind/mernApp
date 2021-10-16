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

  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState("");
  const [total, setTotal] = useState("");

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

  const handleData = (e) => {
    let emi = Math.round((amount * rate * tenure) / 12 / 100);
    setEmi(emi);
    setTotal(parseFloat(emi) + parseFloat(amount));
  };
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
                    <form className="form-enquiry finance-form">
                      <TextField
                        className="form-group"
                        label="Loan Amount"
                        variant="filled"
                        required
                        type="number"
                        name="amount"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        className="form-group"
                        label="Interest Rate"
                        variant="filled"
                        required
                        type="number"
                        name="rate"
                        onChange={(e) => setRate(e.target.value)}
                        value={rate}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        className="form-group"
                        label="Loan Tenure"
                        variant="filled"
                        required
                        type="number"
                        name="tenure"
                        onChange={(e) => setTenure(e.target.value)}
                        value={tenure}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />

                      <div className="form-btn">
                        <Button
                          className="search-btn"
                          variant="contained"
                          onClick={(e) => handleData(e)}
                        >
                          Search
                        </Button>
                      </div>
                      <br></br>
                      {emi ? (
                        <>
                          <Typography>Principal Amount :{amount}</Typography>
                          <Typography>Interest Amount :{emi}</Typography>
                          <Typography>Total Value:{total}</Typography>
                        </>
                      ) : (
                        ""
                      )}
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
