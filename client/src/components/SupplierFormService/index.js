import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import "./SupplierForm.css";
import { Box, NativeSelect, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as EnquiryAction from "../../redux/actions/EnquiryAction";
import ApiClient from "../../api-client";
import * as Snackbar from "../../redux/actions/SnackbarActions";
import EditIcon from "@material-ui/icons//Edit";

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

function SupplierForm(props) {
  const [open, setOpen] = useState(false);
  const { children, classes, onClose, ...other } = props;

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  //const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [positionJobRole, setPositionJobRole] = useState("");
  const [enableOtpField, setEnableOtpField] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [verifyLoader, setVerifyLoader] = useState(false);
  const [otp, setOtp] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [supplierOf, setSupplierOf] = useState("");

  const dispatch = useDispatch();
  const handleData = (e) => {
    const formData = {
      name: name,
      email: email,
      phone: mobile,
      supplierOf: supplierOf,
      company: company,
      positionJobRole: positionJobRole,
      city: city,
      location: location,
      // type: type,
      // propertyname: propertyname,
    };
    console.log("formData", formData);
    // dispatch(EnquiryAction.EnquiryRequestAsync(formData));
    // toast.success('Request Sent successfully', { position: toast.POSITION.TOP_RIGHT, autoClose: 5000 })
    setName("");
    setCompany("");
    setMobile("");
    setEmail("");
    setCity("");
    setLocation("");
    setSupplierOf("");
    setPositionJobRole("");
    setOpen(false);
  };

  const otpHandler = async () => {
    const cookie =
      "connect.sid=s%3AOTR7JRcRLkCbykuoWLRX4yOvqEZu20Is.4utrypcpaXicNe3A0foHiWeVNP8fQDryd6%2FdCibio%2BI";
    const authorization =
      "Bearer eyJhbGciOiJIUzI1NiJ9.VmlrcmFtSmVldFNpbmdoSkk.MaACpq-fK6F02rVz3vEAUgAYvTqDAEVKpq9zNbmWCPs";
    try {
      setVerifyLoader(true);
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/otp/createOTP",
        { mobile: mobile },
        {},
        { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
        false
      );
      setEnableOtpField(true);
      setVerifyLoader(false);
      dispatch(Snackbar.showSuccessSnackbar("Otp sent successfully"));
    } catch (error) {
      console.error("this is the error::", error);
      dispatch(
        Snackbar.showFailSnackbar(
          "We are facing some issue Please try again later."
        )
      );
      setVerifyLoader(false);
    }
  };

  const checkOtpValidOrNot = async (value) => {
    try {
      const response = await ApiClient.call(
        ApiClient.REQUEST_METHOD.POST,
        "/otp/verifyOTP",
        { mobile: mobile, otp: value },
        {},
        { Cookie: ApiClient.cookie, Authorization: ApiClient.authorization },
        false
      );
      if (response.status) {
        setIsOtpVerified(true);
        dispatch(Snackbar.showSuccessSnackbar("Otp Verified SuccessFully"));
      } else {
        setIsOtpVerified(false);
        dispatch(Snackbar.showFailSnackbar("Please type Valid otp."));
      }
    } catch (error) {
      setIsOtpVerified(false);
      dispatch(
        Snackbar.showFailSnackbar(
          "We are facing some issue Please try again later."
        )
      );
    }
  };
  const reset = () => {
    setVerifyLoader(false);
    setIsOtpVerified(false);
    setEnableOtpField(false);
    setMobile("");
    setOtp("");
  };
  const inputChange = (e) => {
    let { name, value } = e.target;
    setOtp(value);
    if (name === "otp" && value.length == 6 && !isOtpVerified) {
      checkOtpValidOrNot(value);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setName("");
    setMobile("");
    setCompany("");
    setEmail("");
    setCity("");
    setSupplierOf("");
    setLocation("");
    setPositionJobRole("");
    setOpen(false);
  };

  return (
    <div className="SupplierForm" id="SupplierForm">
      <Box
        id="customized-dialog-title"
        //  onClose={handleClose}
      >
        SUPPLIER FORM
      </Box>
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
            style: { color: "#FFFFFF" },
          }}
          InputLabelProps={{
            style: { color: "#FFFFFF" },
          }}
          fullWidth
        />
        <TextField
          className="EmiInputs"
          style={{ marginTop: 15 }}
          variant="outlined"
          label="Company Name"
          name="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
            style: { color: "#FFFFFF" },
          }}
          InputLabelProps={{
            style: { color: "#FFFFFF" },
          }}
          fullWidth
        ></TextField>
        <NativeSelect
          className="EmiInputs selectInput"
          onChange={(e) => setPositionJobRole(e.target.value)}
          fullWidth
        >
          <option value={10}>Select Position/Job Role</option>
          <option value={20}>Owner</option>
          <option value={30}>Manager</option>
          <option value={40}>Staff</option>
        </NativeSelect>
        <TextField
          className="EmiInputs"
          style={{ marginTop: 15 }}
          variant="outlined"
          label="Email Address"
          type="email"
          name="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailValid(e.target.value.includes("@"));
          }}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
            style: { color: "#FFFFFF" },
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
          label="Enter City"
          name="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
            style: { color: "#FFFFFF" },
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
          label="Enter Location"
          name="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
            style: { color: "#FFFFFF" },
          }}
          InputLabelProps={{
            style: { color: "#FFFFFF" },
          }}
          fullWidth
        ></TextField>
        <NativeSelect
          className="EmiInputs selectInput"
          onChange={(e) => setSupplierOf(e.target.value)}
          fullWidth
        >
          <option value={10}>Select Supplier of</option>
          <option value={20}>Marble</option>
          <option value={30}>Tiles</option>
          <option value={40}>Bricks</option>
          <option value={50}>Decorative Items</option>
          <option value={60}>Sand</option>
          <option value={70}>cement</option>
          <option value={80}>Electrical Items</option>
          <option value={90}>Furniture</option>
          <option value={100}>Furniture Hardware</option>
          <option value={110}>Paint</option>
          <option value={120}>Security Services</option>
          <option value={130}>Still Equipments</option>
          <option value={140}>Sanitary Hardware</option>
          <option value={150}>Ro Services</option>
          <option value={160}>Electronic Item</option>
          <option value={170}>Electrical services</option>
          <option value={180}>Safety Guards</option>
          <option value={190}>Building Material</option>
          <option value={200}>Glass House</option>
          <option value={210}>Fabrication</option>
          <option value={220}>JVNL services</option>
          <option value={230}>JDA Work</option>
          <option value={240}>Solar Equipments</option>
          <option value={250}>Manpower Supplier</option>
          <option value={260}>Construction Hardware</option>
        </NativeSelect>

        <TextField
          className="EmiInputs"
          variant="outlined"
          label="Phone Number"
          style={{ marginTop: 15 }}
          name="Phone"
          // style={{width: '76%'}}
          disabled={isOtpVerified}
          type="number"
          min="1000000"
          max="9999999999999999"
          value={mobile}
          onChange={(e) => {
            if (enableOtpField) {
              setEnableOtpField(false);
            }
            if (e.target.value.length <= 10) setMobile(e.target.value);
          }}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
            },
            style: { color: "#FFFFFF" },
          }}
          InputLabelProps={{
            style: { color: "#FFFFFF" },
          }}
          fullWidth
        ></TextField>
        {/* {mobile.length === 10 && !enableOtpField ? <Button style={{ width: '23%' }} onClick={otpHandler} variant="contained" style={{ background: "green", height: " 30px", top: " 10px", left: "5px", color: '#fff' }}
          >Verify</Button> : isOtpVerified && <div onClick={reset}> <EditIcon /> </div>}
          {enableOtpField && <TextField
            className="EmiInputs"
            placeholder="Otp"
            style={{ width: '50%' }}

            fullWidth
            value={otp}
            disabled={isOtpVerified}
            onChange={inputChange}
            name="otp"
            type="number"
            variant="outlined"
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
            InputLabelProps={{
              style: { color: '#FFFFFF' }
            }}
          />} */}
        {
          mobile.length === 10 && name.length > 0 && (email
            ? emailValid
            : true ) &&
              supplierOf > 10 &&
              positionJobRole > 10 &&
              location.trim().length > 0 &&
              city.trim().length > 0 &&
              company.trim().length > 0 &&
              !enableOtpField && (
                <Button
                  style={{ width: "23%" }}
                  onClick={otpHandler}
                  variant="contained"
                  style={{
                    background: "green",
                    height: " 30px",
                    top: " 10px",
                    left: "5px",
                    color: "#fff",
                  }}
                >
                  Verify
                </Button>
              )
          // : (
          //   isOtpVerified && (
          //     <div onClick={reset}>
          //       {" "}
          //       <EditIcon />{" "}
          //     </div>
          //   )
          // )
        }
        {enableOtpField && name.length > 0 &&( email
          ? emailValid
          : true )&&
            supplierOf > 10 &&
            positionJobRole > 10 &&
            location.trim().length > 0 &&
            city.trim().length > 0 &&
            company.trim().length > 0 && (
              <>
                <TextField
                  className="EmiInputs"
                  placeholder="Otp"
                  style={{ width: "50%", color: "#FFFFFF" }}
                  fullWidth
                  value={otp}
                  disabled={isOtpVerified}
                  onChange={inputChange}
                  name="otp"
                  type="number"
                  variant="outlined"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                    },
                    style: { color: "#FFFFFF" },
                  }}
                  InputLabelProps={{
                    style: { color: "#FFFFFF" },
                  }}
                />
                {!isOtpVerified && (
                  <Button
                    style={{ width: "23%" }}
                    onClick={otpHandler}
                    variant="contained"
                    style={{
                      background: "green",
                      height: " 30px",
                      top: " 10px",
                      left: "5px",
                      color: "#fff",
                    }}
                  >
                    Resend OTP
                  </Button>
                )}
              </>
            )}
      </Box>
      <Box className="ParentButton">
        <Button
          //  onClick={handleClose}
          disabled={
            !isOtpVerified ||
            name.length === 0 ||
            (email && !emailValid) ||
            supplierOf === 10 ||
            positionJobRole === 10 ||
            location.trim().length === 0 ||
            city.trim().length === 0 ||
            company.trim().length === 0
          }
          onClick={(e) => handleData(e)}
        >
          Add Supplier
        </Button>
      </Box>
    </div>
  );
}

export default withStyles(styles)(SupplierForm);
