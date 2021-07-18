import React from "react";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import "./page-slider.css";

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FFFFFF",
    fontSize: 40,
  },
  text2: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 10,
  },
  text3: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FFFFFF",
    fontSize: 14,
  },
  text4: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
}));

const PageBanner = (props) => {
  const classes = useStyles();
  const { showSearch = false, bgImage, title, currentPage } = props;

  return (
    <div
      className={`${classes.bannerContainer}`}
      style={{
        backgroundImage: `url(${bgImage}`,
        height: 326,
        overflow: "hidden",
        textAlign: "center",
        // backgroundAttachment: "fixed",
        position: "relative",
        backgroundPosition: "center",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography className={classes.text1}>{title}</Typography>
          <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                className={classes.text2}
                component={RouterLink}
                to="/"
              >
                HOME
              </Typography>
              <Box style={{ width: 10 }}></Box>
              <Typography className={classes.text2}>/</Typography>
              <Box style={{ width: 10 }}></Box>
              <Typography className={classes.text2}>{currentPage}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

PageBanner.propTypes = {
  showSearch: PropTypes.bool,
  bgImage: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default PageBanner;
