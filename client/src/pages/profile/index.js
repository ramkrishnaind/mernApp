import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import "./blog.css";
import PageBanner from "../../components/page-banner";
import bannerImage from "../../images/clientbg.jpeg";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Profile() {
  const classes = useStyles();

  return (
    <Box className="BlogPage">
      <PageBanner bgImage={bannerImage} title="Profile" currentPage="PROFILE" />
      <Container className="CardSection"></Container>
    </Box>
  );
}
