import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/Chat';
import './enquryForm.css'
import { Box, NativeSelect, TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";
import * as EnquiryAction from '../../redux/actions/EnquiryAction';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#FFFFFF !important",
  }
});


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;


  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

// main function

function EnquryForm(props) {
  const [open, setOpen] = useState(false);
  const { children, classes, onClose, ...other } = props;

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [type, setPropertyType] = useState("");
  const [propertyname, setPropertyName] = useState("");
  const dispatch = useDispatch();
  const handleData = (e) => {
    const formData = {
      name: name,
      email: email,
      phone: mobile,
      place: country,
      // type: type,
      // propertyname: propertyname,
    };
    console.log('formData', formData);
    dispatch(EnquiryAction.EnquiryRequestAsync(formData));
    // toast.success('Request Sent successfully', { position: toast.POSITION.TOP_RIGHT, autoClose: 5000 })
    setName('')
    setMobile('')
    setEmail('')
    setCountry('')
    setPropertyType('')
    setPropertyName('')
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="EnquryForm">
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className="enquryButton">
        <ChatIcon />
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className="EnquryFormData">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          ENQUIRY NOW
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
                notchedOutline: classes.notchedOutline
              }
            }}
            InputLabelProps={{
              style: { color: '#FFFFFF' }
            }}
            fullWidth >
          </TextField>
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
                notchedOutline: classes.notchedOutline
              }
            }}
            InputLabelProps={{
              style: { color: '#FFFFFF' }
            }}
            fullWidth >
          </TextField>
          <TextField
            className="EmiInputs"
            style={{ marginTop: 15 }}
            variant="outlined"
            label="Phone Number"
            name="Phone"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            InputLabelProps={{
              style: { color: '#FFFFFF' }
            }}
            fullWidth >
          </TextField>
          <TextField
            className="EmiInputs"
            style={{ marginTop: 15 }}
            variant="outlined"
            label="Enter Contry"

            name="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            InputLabelProps={{
              style: { color: '#FFFFFF' }
            }}
            fullWidth >
          </TextField>
          <NativeSelect className="EmiInputs selectInput"
            onChange={(e) => setPropertyType(e.target.value)}
            fullWidth>
            <option value={10}>Select Property Type</option>
            <option value={20}>Residential</option>
            <option value={30}>Commerical</option>
          </NativeSelect>
          <NativeSelect className="EmiInputs selectInput"
            onChange={(e) => setPropertyName(e.target.value)}
            fullWidth>
            <option value={10}>Select Property Name</option>
            <option value={20}>Villa</option>
            <option value={30}>Flats</option>
            <option value={30}>Plot</option>
          </NativeSelect>
        </Box>
        <DialogActions>
          <Box className="ParentButton">
            <Button
              //  onClick={handleClose}
              onClick={(e) => handleData(e)}
            >
              Save changes
                </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(EnquryForm);
