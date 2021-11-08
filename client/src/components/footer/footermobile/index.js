import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "@material-ui/icons/HomeOutlined";
import Phone from "@material-ui/icons/Phone";
import Sell from "@material-ui/icons/LocalOfferOutlined";
import Rent from "@material-ui/icons/ApartmentOutlined";
import Visit from "@material-ui/icons/MyLocationOutlined";
import {
  Typography,
  Box,
  TextField,
  Button,
  NativeSelect,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import "../../header/header.css";
import APP_CONSTANTS from "../../../constants/app-constants";
import Dialog from "@material-ui/core/Dialog";
import "../../enquryForm/enquryForm.css";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import * as SitevisitAction from "../../../redux/actions/SitevisitAction";

const useStyles = makeStyles((theme) => ({
  text1: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FF7601",
    fontSize: 14,
    marginTop: 10,
  },
  text2: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#333333",
    fontSize: 18,
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
    fontSize: 14,
    fontWeight: "bold",
  },
  text5: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FF7601",
    fontSize: 20,
    fontWeight: "bold",
  },
  features: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  icon: {
    color: "#FF7601",
    fontSize: 20,
    paddingRight: 10,
  },
  btn1: {
    borderRadius: 12,
    color: "#FFFFFF",
    textTransform: "none",
    fontFamily: '"Open Sans",sans-serif',
    backgroundColor: "#FF7601",
  },
  btn2: {
    borderRadius: 12,
    color: "#666666",
    textTransform: "none",
    fontFamily: '"Open Sans",sans-serif',
    backgroundColor: "#ECECEC",
  },
  footermenu: {
    backgroundColor: "#FF7601",
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,

    "& .MuiBottomNavigationAction-root": {
      minWidth: "auto",
    },
    "& .MuiBottomNavigationAction-root.Mui-selected": {
      color: "#fff",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
  TextbottomMenuColor: { color: "white" },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#FFFFFF !important",
  },

  contact: {
    padding: 0,
    color: "#FFFFFF",
    marginRight: 10,
    fontFamily: '"Open Sans",sans-serif',
  },
  icon: {
    padding: 0,
    color: "#FFFFFF",
    marginRight: 10,
  },
  menu: {
    padding: 0,
    color: "#000000",
    marginRight: 10,
    fontFamily: '"Open Sans",sans-serif',
    fontWeight: 400,
    cursor: "pointer",
  },
  btn1: {
    borderRadius: 15,
    color: "#FFFFFF",
    textTransform: "none",
    marginRight: 10,
    fontFamily: '"Open Sans",sans-serif',
  },
  btn2: {
    borderRadius: 15,
    background: "#FF7601",
    color: "#FFFFFF",
    textTransform: "none",
    fontFamily: "Open Sans,sans-serif",
  },
  btn3: {
    borderRadius: 15,
    background: "#ECECEC",
    marginRight: 10,
    color: "#000000",
    textTransform: "none",
    fontFamily: '"Open Sans",sans-serif',
  },
  btn4: {
    borderRadius: 15,
    color: "#000000",
    textTransform: "none",
    fontFamily: '"Open Sans",sans-serif',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Mobilefootermenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  function handleNull(val) {
    return val || "_ _ ";
  }

  const handleData = (e) => {
    const formData = {
      name: name,
      email: email,
      phone: mobile,
      time: time,
      // type: type,
      // propertyname: propertyname,
    };
    console.log("formData", formData);
    dispatch(SitevisitAction.SitevisitRequestAsync(formData));
    // toast.success('Request Sent successfully', { position: toast.POSITION.TOP_RIGHT, autoClose: 5000 })
    setName("");
    setMobile("");
    setEmail("");
    setTime("");
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setName("");
    setMobile("");
    setEmail("");
    setTime("");
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("new Value", newValue);
    if (newValue === "+91-9571647680") {
      window.open("tel:+91-9571647680");
    }
  };

  return (
    <div>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        className={classes.footermenu}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<Home />}
          component={Link}
          to="/"
          className={classes.TextbottomMenuColor}
        />
        <BottomNavigationAction
          label="Call"
          value="+91-9571647680"
          icon={<Phone />}
          className={classes.TextbottomMenuColor}
        />
        <BottomNavigationAction
          label="Sell"
          value="/sell"
          icon={<Sell />}
          component={Link}
          to="/search-property-details?type=Sell"
          className={classes.TextbottomMenuColor}
        />
        <BottomNavigationAction
          label="Rent"
          value="/rent"
          icon={<Rent />}
          component={Link}
          to="/search-property-details?type=Rent"
          className={classes.TextbottomMenuColor}
        />
        <BottomNavigationAction
          label="Visit"
          value="Visit"
          icon={<Visit />}
          onClick={handleClickOpen}
          className={classes.TextbottomMenuColor}
        />
      </BottomNavigation>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="EnquryFormData"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {APP_CONSTANTS.titleSiteVisit}
        </DialogTitle>
        <Box className="emiForm">
          <TextField
            className="EmiInputs"
            style={{ marginTop: 15 }}
            variant="outlined"
            label="Your Name"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
            InputLabelProps={{
              style: { color: "#FFFFFF" },
            }}
            fullWidth
          ></TextField>
          <TextField
            className="EmiInputs"
            style={{ marginTop: 15 }}
            variant="outlined"
            label="Email Address"
            type="email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
            InputLabelProps={{
              style: { color: "#FFFFFF" },
            }}
            fullWidth
          ></TextField>
          <TextField
            className="EmiInputs"
            style={{ marginTop: 15 }}
            variant="outlined"
            label="Phone Number"
            name="Phone"
            type="tel"
            max="9999999999"
            value={mobile}
            onChange={(e) => {
              if (e.target.value.length <= 10) setMobile(e.target.value);
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
            InputLabelProps={{
              style: { color: "#FFFFFF" },
            }}
            fullWidth
          ></TextField>
          <NativeSelect
            className="EmiInputs selectInput"
            onChange={(e) => setTime(e.target.value)}
            fullWidth
          >
            <option value="">Choose Time</option>
            <option value="8:00 AM">8:00 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 AM">12:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="7:00 PM">7:00 PM</option>
          </NativeSelect>
        </Box>
        <DialogActions>
          <Box className="ParentButton">
            <Button onClick={(e) => handleData(e)}>Submit</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}
