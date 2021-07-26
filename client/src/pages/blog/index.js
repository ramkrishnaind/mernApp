import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./blog.css"
import PageBanner from '../../components/page-banner';
import bannerImage from '../../images/clientbg.jpeg'
import BlogImage from "../../images/blogImage.jpg";
import { Box, Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Blog() {
  const classes = useStyles();

  return (
      <Box className="BlogPage">
        <PageBanner
          bgImage={bannerImage}
          title="Latest News"
          currentPage="LATEST NEWS"
        />
      <Container className="CardSection">
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={BlogImage}
            title="Contemplative Reptile"
            />
            <CardContent className="BlogCrad">
            <Typography gutterBottom variant="h5" component="h2" className="Heading">
                Why People Choose Listio For Own Properties
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum estibulum issim
            </Typography>
            <Box className="ParentButton">
                <Button>View Details </Button>
            </Box>
            </CardContent>
        </CardActionArea>
        </Card>
    </Container>
    </Box>
  );
}
