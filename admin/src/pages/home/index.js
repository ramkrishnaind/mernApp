import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import * as DashboardAction from "../../redux/actions/DashboardAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  text1: {
    fontFamily: '"Open Sans"',
    color: "#303030",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  text3: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#666666",
    fontSize: 14,
  },
  text4: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#333333",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text5: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FF7601",
    fontSize: 20,
    fontWeight: "bold",
  },
  text6: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#888888",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 1.8,
  },
  text7: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#333333",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 10,
  },
});

const HomePage = withStyles(styles)((props) => {
  const { classes } = props;
  const dashboard = useSelector((state) => state.dashboard.list);
  console.log("dashboard", dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DashboardAction.DashboardRequestAsync());
  }, [dispatch]);
  // return null
  const content = (title, key, value,index) => (
    <>
      <Card style={{flexBasis:"46%",cursor:"default",marginLeft:"2%",marginRight:"2%",marginBottom:"2%",marginTop:"2%"}} key={index}>
        <CardActionArea style={{height:"100%",cursor:"default"}} key={index}>
          <CardContent style={{padding:"10px"}}>            
            {body(key, value)}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
  const body = (key, value) => (
    <Grid item style={{display:"flex",flexDirection:"column",cursor:"default",justifyContent:"center"}}>
      <Grid>
        <Typography variant="h6" style={{textTransform:"capitalize",textAlign:"center"}}>{key}</Typography>
      </Grid>
      <Grid>
        <Typography style={{textAlign:"center"}} variant="h6">{value || ""}</Typography>
      </Grid>
    </Grid>
  );
  const getDisplay = (dashObj = dashboard, prevKey = "Dashboard details",isEvenLevel=false,index="0") => {
    debugger;
    const keys = Object.keys(dashObj);
    let container = (
      <>
        <Card 
        style={{backgroundColor:isEvenLevel?"rgb(230,230,230)":"rgb(250,250,250)",cursor:"default",display:"flex",flexBasis:"50%",cursor:"default"}}
        key={index}
        >
          <CardActionArea >
            <CardContent style={{display:"flex",border:"1px solid black",flexDirection:"column",justifyContent:"center"}}>
              <Typography gutterBottom variant="h2" component="div" style={{textTransform:"capitalize",cursor:"default"}}>
                {prevKey}
              </Typography>
              <Grid style={{display:"flex",border:"1px solid black",flexWrap:"wrap",justifyContent:"center"}}>  
              {keys.map((k,ind) =>
                typeof dashObj[k] === "object" && dashObj[k] !== null
                  ? getDisplay(dashObj[k], k,!isEvenLevel,index+k+ind)
                  : content(prevKey, k, dashObj[k],index+k+ind)
              )}
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
    return container;
  };
  return dashboard ? getDisplay() : <Typography>Data not found.</Typography>;
});

export default HomePage;
