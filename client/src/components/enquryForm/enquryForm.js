import React from 'react';
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
  const [open, setOpen] = React.useState(false);
  const { children, classes, onClose, ...other } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="EnquryForm">
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className="enquryButton">
        <ChatIcon style={{ color: "#FF7601", fontSize: 25, padding: 0, marginRight: 8, color: '#fff' }} />    
      </Button> 
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title"  open={open} className="EnquryFormData">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          ENQUIRY NOW
        </DialogTitle>
        <Box className="emiForm">
                <TextField
                    className ="EmiInputs"
                    style={{marginTop: 15}}
                    variant="outlined" 
                    label="Your Name"
                    InputProps={{
                        classes: {
                        notchedOutline: classes.notchedOutline
                        }
                    }}
                    InputLabelProps={{
                        style: {color: '#FFFFFF'}
                    }} 
                    fullWidth >
                </TextField>
                <TextField
                    className ="EmiInputs"
                    style={{marginTop: 15}}
                    variant="outlined" 
                    label="Email Address" 
                    InputProps={{
                        classes: {
                        notchedOutline: classes.notchedOutline
                        }
                    }}
                    InputLabelProps={{
                        style: {color: '#FFFFFF'}
                    }} 
                    fullWidth >
                </TextField>
                <TextField
                    className ="EmiInputs"
                    style={{marginTop: 15}}
                    variant="outlined" 
                    label="Phone Number" 
                    InputProps={{
                        classes: {
                        notchedOutline: classes.notchedOutline
                        }
                    }}
                    InputLabelProps={{
                        style: {color: '#FFFFFF'}
                    }} 
                    fullWidth >
                </TextField>
                <TextField
                    className ="EmiInputs"
                    style={{marginTop: 15}}
                    variant="outlined" 
                    label="Enter Contry" 
                    InputProps={{
                        classes: {
                        notchedOutline: classes.notchedOutline
                        }
                    }}
                    InputLabelProps={{
                        style: {color: '#FFFFFF'}
                    }} 
                    fullWidth >
                </TextField>
                <NativeSelect className="EmiInputs selectInput" fullWidth>
                    <option value={10}>Select Property Type</option>
                    <option value={20}>Residential</option>
                    <option value={30}>Commerical</option>
                </NativeSelect>
                <NativeSelect className="EmiInputs selectInput" fullWidth>
                    <option value={10}>Select Property Name</option>
                    <option value={20}>Villa</option>
                    <option value={30}>Flats</option>
                    <option value={30}>Plot</option>
                </NativeSelect>
            </Box>
        <DialogActions>
            <Box className="ParentButton">
                <Button onClick={handleClose}>
                    Save changes
                </Button>
            </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default  withStyles(styles)(EnquryForm);
