import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // console.log('CustomizedSnackbars ', props, props.active, open)

  React.useEffect(() => {
    setOpen(props.active);
  }, [props.active]);

  const handleClose = (event, reason) => {
    // console.log('handleClose called')
    if (reason === 'clickaway') {
      return;
    }
    props.closeSnackBar({ active: false, type: "error", text: "", timeout: 4000 });
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={props.timeout || 3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleClose} severity={props.type || "error"}>
          {props.text}
        </Alert>
      </Snackbar>
    </div>
  );
}