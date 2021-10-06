import React, {useState, useEffect} from "react";
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/Chat';
import './enquryForm.css';
import {Box, NativeSelect, TextField} from '@material-ui/core';
import {useDispatch} from "react-redux";
import * as EnquiryAction from '../../redux/actions/EnquiryAction';
import {useParams, useLocation} from 'react-router-dom';
import ApiClient from '../../api-client';

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
  const {children, classes, onClose, ...other} = props;


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
  const {children, classes, onClose, ...other} = props;

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [type, setPropertyType] = useState("");
  const [propertyname, setPropertyName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pCity, setPCity] = useState("");
  const [pAddress, setPAddress] = useState("");
  const [pState, setPState] = useState("");
  const [pLocation, setPLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [floor, setFoor] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  const [address, setAddress] = useState("");

  const [isServicePage, setServicePage] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const handleData = (e) => {

    if (isServicePage) {
      handleServiceFormSubmit();
      return;
    }

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
    setName('');
    setMobile('');
    setEmail('');
    setCountry('');
    setPropertyType('');
    setPropertyName('');
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const params = useParams();

  useEffect(() => {
    console.log("pathname changed *** ", location.pathname);


    if (location.pathname === '/service-details') {
      setServicePage(true);
      console.log("is a service page");
    } else {
      setServicePage(false);
      console.log("not a service page");
    }
    // const type = new URLSearchParams(location.search).get("type");
    // if path is service-details then show some more fields



  }, [location]);

  const handleServiceFormSubmit = () => {

    // const formData = {
    //   name: name,
    //   email: email,
    //   mobile: mobile,
    //   city: city,
    //   state: state,
    //   address: address,
    //   propertyType: type,
    //   propertyAddress: pAddress,
    //   image: image,
    //   propertyCity: pCity,
    //   propertyState: pState,
    //   budget: budget,
    //   totalArea: totalArea,
    //   floor: floor,
    //   message: message,
    //   propertyLocation: pLocation
    // };

    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('address', address);
    formData.append('propertyType', type);
    formData.append('propertyAddress', pAddress);
    formData.append('image', image);
    formData.append('propertyCity', pCity);
    formData.append('propertyState', pState);
    formData.append('budget', budget);
    formData.append('totalArea', totalArea);
    formData.append('floor', floor);
    formData.append('message', message);
    formData.append('propertyLocation', pLocation);
    console.log("service enquiry form data ", formData);
    submitServiceEnquiry(formData);
  };

  const submitServiceEnquiry = async (payload) => {

    try {

      const response = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, '/services/createServicesEnquiry', payload, {}, {Cookie: ApiClient.cookie, Authorization: ApiClient.authorization}, false);

      if (!response || response.error) {
        console.log("error submiting enquiry ", response.message);
        // show error
        return;
      }

    } catch (e) {
      console.log("error::submitReview::", e);
    }
  };

  const constructFloorOptions = () => {
    const comp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(floorNo => {
      console.log("floor", floorNo);
      return <option value={`G+${floorNo}`}>{`G+${floorNo}`}</option>;
    });
    console.log("comp", comp);
    return comp;
  };

  return (
    <div className="EnquryForm">
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className="enquryButton">
        <i class="fas fa-comments"></i>
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className="EnquryFormData">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          ENQUIRY NOW
        </DialogTitle>
        <Box className="emiForm">
          <TextField
            className="EmiInputs"
            style={{marginTop: 15}}
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
              style: {color: '#FFFFFF'}
            }}
            fullWidth >
          </TextField>
          <TextField
            className="EmiInputs"
            style={{marginTop: 15}}
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
              style: {color: '#FFFFFF'}
            }}
            fullWidth >
          </TextField>
          <TextField
            className="EmiInputs"
            style={{marginTop: 15}}
            variant="outlined"
            label="Phone Number"
            name="Phone"
            type="number"
            min="1000000"
            max="9999999999999999"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
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
          {!isServicePage ? <TextField
            className="EmiInputs"
            style={{marginTop: 15}}
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
              style: {color: '#FFFFFF'}
            }}
            fullWidth >
          </TextField> : null
          }
          <NativeSelect className="EmiInputs selectInput"
            onChange={(e) => setPropertyType(e.target.value)}
            fullWidth>
            <option value={10}>Select Property Type</option>
            <option value={20}>Residential</option>
            <option value={30}>Commerical</option>
          </NativeSelect>
          {!isServicePage ? <NativeSelect className="EmiInputs selectInput"
            onChange={(e) => setPropertyName(e.target.value)}
            fullWidth>
            <option value={10}>Select Property Name</option>
            <option value={20}>Villa</option>
            <option value={30}>Flats</option>
            <option value={30}>Plot</option>
          </NativeSelect> : null
          }
          {
            isServicePage ? <TextField
              className="EmiInputs"
              style={{marginTop: 15}}
              variant="outlined"
              label="Property Address"

              name="property-address"
              value={pAddress}
              onChange={(e) => setPAddress(e.target.value)}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                style: {color: '#FFFFFF'}
              }}
              fullWidth >

            </TextField> : null
          }
          {
            isServicePage ? <TextField
              className="EmiInputs"
              style={{marginTop: 15}}
              variant="outlined"
              label="Your Address"

              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                style: {color: '#FFFFFF'}
              }}
              fullWidth >
            </TextField> : null
          }
          {
            isServicePage ? <TextField
              className="EmiInputs"
              style={{marginTop: 15}}
              variant="outlined"
              label="City"

              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                style: {color: '#FFFFFF'}
              }}
              fullWidth >
            </TextField> : null
          }

          {
            isServicePage ? <TextField
              className="EmiInputs"
              style={{marginTop: 15}}
              variant="outlined"
              label="State"

              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                style: {color: '#FFFFFF'}
              }}
              fullWidth >
            </TextField> : null
          }
          {
            isServicePage ? <TextField
              className="EmiInputs"
              style={{marginTop: 15}}
              variant="outlined"
              label="property City"

              name="property-city"
              value={pCity}
              onChange={(e) => setPCity(e.target.value)}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                style: {color: '#FFFFFF'}
              }}
              fullWidth >
            </TextField> : null
          }

          {
            isServicePage ? <TextField
              className="EmiInputs"
              style={{marginTop: 15}}
              variant="outlined"
              label="property State"

              name="property-state"
              value={pState}
              onChange={(e) => setPState(e.target.value)}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                style: {color: '#FFFFFF'}
              }}
              fullWidth >
            </TextField> : null
          }
          {
            isServicePage ? <TextField
              className="EmiInputs"
              style={{marginTop: 15}}
              variant="outlined"
              label="Property location"

              name="property-location"
              value={pLocation}
              onChange={(e) => setPLocation(e.target.value)}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                style: {color: '#FFFFFF'}
              }}
              fullWidth >
            </TextField> : null
          }

          {
            isServicePage ? <TextField
              className="EmiInputs"
              style={{marginTop: 15}}
              variant="outlined"
              label="Your Budget"
              type='number'
              name="your-budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                style: {color: '#FFFFFF'}
              }}
              fullWidth >
            </TextField> : null
          }
          {
            isServicePage ? <TextField
              className="EmiInputs"
              style={{marginTop: 15}}
              variant="outlined"
              label="Total area"
              type="number"
              name="total-area"
              value={totalArea}
              onChange={(e) => setTotalArea(e.target.value)}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                style: {color: '#FFFFFF'}
              }}
              fullWidth >
            </TextField> : null
          }
          {
            isServicePage ? <NativeSelect className="EmiInputs selectInput"
              value={floor}
              onChange={(e) => setFoor(e.target.value)}
              fullWidth>
              <option value={''}>Select Floor</option>
              {
                constructFloorOptions()
              }
            </NativeSelect> : null
          }


          {
            isServicePage ? <TextField
              className="EmiInputs"
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={2}
              fullWidth
              defaultValue=""
              variant="outlined"
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                style: {color: '#FFFFFF'}
              }}
            /> : null}

          {
            isServicePage ? <TextField
              className="EmiInputs"
              style={{marginTop: 15}}
              variant="outlined"
              label="Upload file"
              type='file'
              name="floor"
              value={file}
              onChange={(e) => {
                setImage(e.target.files[0]);
                setFile(e.target.value);
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                style: {color: '#FFFFFF'}
              }}
              fullWidth >
            </TextField> : null
          }

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
