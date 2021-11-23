import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import "../about-us.css";
import PageBanner from "../../../components/page-banner";
import DescriptionIcon from "@material-ui/icons/Description";
import ApiClient from "../../../api-client";
import HtmlParser from "react-html-parser";
import "./invest-with-us.css";
const useStyles = makeStyles((theme) => ({
  detailImage: {
    borderRadius: "50%",
    width: 100,
    padding: "10px",
    objectFit: "fill",
    border: "2px solid orange",
    backgroundColor: "lightcyan",
    color: "orange",
    textShadow: "1px 1px 1px #ccc",
    fontSize: "3em",
    margin: "auto",
    textAlign: "center",
  },
}));
const ps = document.querySelectorAll(".box-text >p");
const observer = new ResizeObserver((entries) => {
  for (let entry of entries) {
    entry.target.classList[
      entry.target.scrollHeight > entry.contentRect.height ? "add" : "remove"
    ]("truncated");
  }
});

ps.forEach((p) => {
  observer.observe(p);
});
const InvestWithUs = (props) => {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [checkedState, setCheckedState] = useState([false, false, false]);
  useEffect(() => {
    populateInvestWithUsDetails();
  }, []);

  const populateInvestWithUsDetails = () => {
    const getData = async () => {
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/investWithUs/getActiveInvestWithUs",
        {},
        {},
        { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
        false
      );

      setData(response.data);
      // console.log('About us details', aboutUsInfo, aboutSection);
    };
    getData();
  };
  let img = "no-image-available-icon-6.png";
  let banner = "no-image-available-icon-6.png";
  console.log("data", data);
  if (data) {
    img = data?.media[0]?.image[0]?.path
      ? ApiClient.SERVER_ADDRESS + "/" + data?.media[0]?.image[0]?.path
      : "no-image-available-icon-6.png";
    banner = data?.media[0]?.bannerImage[0]?.path
      ? ApiClient.SERVER_ADDRESS + "/" + data?.media[0]?.bannerImage[0]?.path
      : "no-image-available-icon-6.png";
  }
  return (
    <div style={{ background: "#fff" }}>
      <PageBanner
        bgImage={banner}
        title="Invest With Us"
        currentPage="Invest With Us"
      />

      <Container>
        <Box className="content-wrapper">
          <Box className="about-page-item">
            <Box className="about-page-content" align="center">
              <Typography variant="h3">
                {data.shortDescription||'What We Do'}
              </Typography>
              <Typography>{HtmlParser(data?.shortDescription)}</Typography>
            </Box>
          </Box>
          <Box className="about-page-item">
            <Grid
              container
              spacing={3}
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Grid
                className="about-page-summery"
                item
                xs={12}
                md={6}
                style={{ flexBasis: "60%" }}
              >
                <Grid
                  container
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Grid item xs={3} md={3} style={{ margin: "auto" }}>
                    <div
                      className={classes.detailImage}
                      style={{ color: "coral", backgroundColor: "cornsilk" }}
                    >
                      <i class="fas fa-user-tie"></i>
                    </div>
                    {/* <img
                      src="https://api.vishalconstructioncompany.com/uploads/InvestWithUs/image-1633890447529.png"
                      className={`${classes.detailImage} box-img`}
                    /> */}
                  </Grid>
                  <Grid item xs={9} md={9} className="">
                    <Box className="about-page-content">
                      <Typography variant="h5">
                        {" "}
                        {HtmlParser(data?.title)}
                      </Typography>
                      <div className="box-text">
                        <input
                          type="checkbox"
                          id="expanded"
                          defaultChecked={checkedState[0]}
                          onChange={() =>
                            setCheckedState((prevChState) => {
                              // const newState = [...prevChState];
                              prevChState[0] = !prevChState[0];
                              return [...prevChState];
                            })
                          }
                          // checked={checkedState[0]}
                        />
                        {HtmlParser(data?.description)}

                        <label
                          htmlFor="expanded"
                          role="button"
                          style={{ cursor: "pointer" }}
                        >
                          read {checkedState[0] ? "less" : "more"}
                        </label>
                      </div>
                      {/* <Typography>{HtmlParser(data?.description)}</Typography> */}
                    </Box>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={3} md={3} style={{ margin: "auto" }}>
                    <div
                      className={classes.detailImage}
                      style={{
                        color: "cadetblue",
                        backgroundColor: "lightpink",
                      }}
                    >
                      <i class="fas fa-jedi"></i>
                    </div>

                    {/* <img
                      src="https://api.vishalconstructioncompany.com/uploads/InvestWithUs/image-1633890447529.png"
                      className={`${classes.detailImage} box-img`}
                    /> */}
                  </Grid>
                  <Grid item xs={9} md={9}>
                    <Box className="about-page-content">
                      <Typography variant="h5">
                        {" "}
                        {HtmlParser(data?.title)}
                      </Typography>
                      <div className="box-text">
                        <input
                          type="checkbox"
                          id="expanded1"
                          defaultChecked={checkedState[1]}
                          onChange={() =>
                            setCheckedState((prevChState) => {
                              // const newState = [...prevChState];
                              prevChState[1] = !prevChState[1];
                              return [...prevChState];
                            })
                          }
                          // checked={checkedState[0]}
                        />
                        {HtmlParser(data?.description)}

                        <label
                          htmlFor="expanded1"
                          role="button"
                          style={{ cursor: "pointer" }}
                        >
                          read {checkedState[1] ? "less" : "more"}
                        </label>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={3} md={3} style={{ margin: "auto" }}>
                    <div className={classes.detailImage}>
                      <i class="fas fa-street-view"></i>
                    </div>

                    {/* <img
                      src="https://api.vishalconstructioncompany.com/uploads/InvestWithUs/image-1633890447529.png"
                      className={`${classes.detailImage} box-img`}
                    /> */}
                  </Grid>
                  <Grid item xs={9} md={9}>
                    <Box className="about-page-content">
                      <Typography variant="h5">
                        {" "}
                        {HtmlParser(data?.title)}
                      </Typography>
                      <div className="box-text">
                        <input
                          type="checkbox"
                          id="expanded2"
                          defaultChecked={checkedState[2]}
                          onChange={() =>
                            setCheckedState((prevChState) => {
                              // const newState = [...prevChState];
                              prevChState[2] = !prevChState[2];
                              return [...prevChState];
                            })
                          }
                          // checked={checkedState[0]}
                        />
                        {HtmlParser(data?.description)}

                        <label
                          htmlFor="expanded2"
                          role="button"
                          style={{ cursor: "pointer" }}
                        >
                          read {checkedState[2] ? "less" : "more"}
                        </label>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                className="about-page-images"
                item
                xs={12}
                md={6}
                className={classes.style2}
                style={{
                  flexBasis: "30%",
                  display:"flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  className="about-page-image"
                  style={{
                    margin: "auto",
                    // flexDirection:"row",
                    // justifyContent: "center",
                    // alignItems: "center",
                    display: "block",
                    flexBasis: "100%",
                    height: "50%",
                    width: "100%",
                    background:
                      `url('${img}'),rgba(0,0,0,.6)`,
                    position: "relative",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  {/* <img src="https://images.unsplash.com/photo-1593642633279-1796119d5482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" /> */}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Box className="invest-items-wrapper">
        <Container>
          <Box className="page-section-header" align="center">
            <Box component="h2" className="page-section-title">
              {data.howToInvestTitle||'How We Invest'}
            </Box>
          </Box>
          <Box className="invest-items">
            <Grid container spacing={3}>
              {(data?.howToInvest || []).map((details, i) => {
                return (
                  <Grid className="invest-item" item xs={12} md={4}>
                    <Box className="client-block-icon">
                      <i
                        className={`fas ${details.icon}`}
                        style={{
                          color: "#FF7601",
                          fontSize: 40,
                          padding: 0,
                          margin: 20,
                        }}
                        aria-hidden="true"
                      ></i>
                    </Box>
                    <Typography variant="h4">{details.title}</Typography>
                    <Typography> {details.detail}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default InvestWithUs;
