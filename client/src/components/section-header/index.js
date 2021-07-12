import React, {useEffect} from "react";
import { Typography, Grid, Container, makeStyles, Button, Box } from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({
    text1: {
      fontFamily: '"Open Sans",sans-serif',
      color: '#06AEB8',
      fontSize: 15,
      fontWeight: 'bold'
    },
    text2: {
      fontFamily: '"Open Sans",sans-serif',
      color: '#333333',
      fontSize: 30,
      fontWeight: 400
    },
  }));

const SectionHeader = props => {
    const {title, subtitle} = props;
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} md={12} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <Box style={{width: 4, height: 80, backgroundColor: '#06AEB8', marginRight: 5}} />
                <Box style={{width: 2, height: 50, backgroundColor: '#06AEB8', marginRight: 15}} />
                <Grid container>
                    <Grid item xs={12} md={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                        <Typography className={classes.text1}>{title}</Typography>
                        <Typography className={classes.text2} style={props.style}>{subtitle}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SectionHeader;