import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import { clearSnackbar } from "../redux/actions/snackbarActions";
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function SuccessSnackbar() {
  const dispatch = useDispatch();
  const { successSnackbarMessage, successSnackbarOpen } = useSelector(
    state => state.snackbar
    // state => state.SideMenuList.data
  );

  function handleClose() {
    dispatch(clearSnackbar());
  }

  return (

    <Snackbar open={successSnackbarOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        {successSnackbarMessage}
        </Alert>
    </Snackbar>
  );
}