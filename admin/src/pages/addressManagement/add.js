import React, { useState, useEffect } from "react";
import { Button, Grid, Typography, Box, Link } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import * as AddressAction from "../../redux/actions/AddressAction";
import { useDispatch } from "react-redux";
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";
import "./blogManagement.css";
import SubHeading from "../../common/SubHeadingBox";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const AddressCreateUpdate = (props) => {
  let addressData = props?.address?.addressData;
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AddressAction.AddressDataRequestAsync());
  }, []);

  useEffect(() => {
    if (props.address.success) {
      setRefresh(true);
      setState(initialState);
    }
  }, [props.address.success]);

  const initialState = {
    address: addressData?.address,
    city: addressData?.city,
    states: addressData?.state,
    pinCode: addressData?.pinCode,
    mobile: addressData?.mobile,
    email: addressData?.email,
    timming: addressData?.timming,
    id: addressData?._id,
  };

  const [state, setState] = useState(initialState);

  const inputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    const {
      address,
      city,
      id,
      states,
      pinCode,
      mobile,
      email,
      timming,
    } = state;
    if (id == null) {
      let reqData = {
        address: address,
        city: city,
        state: states,
        pinCode: pinCode,
        mobile: mobile,
        email: email,
        timming: timming,
      };
      dispatch(AddressAction.AddressAddRequestAsync(reqData));
    } else {
      let reqData = {
        address: address,
        city: city,
        state: states,
        pinCode: pinCode,
        mobile: mobile,
        email: email,
        timming: timming,
        _id: id,
      };
      dispatch(AddressAction.AddressUpdateRequestAsync(reqData));
    }
  };

  return (
    <Box className="MenuManagement_Data">
      <FormHeader
        heading1={"Address Module Management"}
        heading2={"Create and Update Address Here"}
      />
      {state.id ? (
        <>
          <BreadCrumbs
            heading1={"AddressManagement"}
            heading2={"Edit Address Module"}
          />
          <SubHeading heading={"Edit Address Module"} />
        </>
      ) : (
        <>
          <BreadCrumbs
            heading1={"AddressManagement"}
            heading2={"Add Address Module"}
          />
          <SubHeading heading={"Add Address Module"} />
        </>
      )}
      <Grid item xs={12} className="m-5 addUserFormanage">
        <div className="card w-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <Typography component="h3" variant="h3">
              {state.id ? "Edit" : "Add"} Address
            </Typography>
          </div>
          <div class="card-body">
            <ValidatorForm onSubmit={handleSubmit}>
              <Grid container spacing={3} className="FormFildes">
                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Address*"
                    fullWidth
                    value={state.address ? state.address : addressData?.address}
                    onChange={inputChange}
                    name="address"
                    id="address"
                    validators={["required"]}
                    errorMessages={["address field is required"]}
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="City*"
                    fullWidth
                    value={state.city ? state.city : addressData?.city}
                    onChange={inputChange}
                    name="city"
                    id="city"
                    validators={["required"]}
                    errorMessages={["city field is required"]}
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="State"
                    fullWidth
                    value={state.states ? state.states : addressData?.states}
                    onChange={inputChange}
                    name="states"
                    id="states"
                    validators={["required"]}
                    errorMessages={["states field is required"]}
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Pin Code"
                    fullWidth
                    value={state.pinCode ? state.pinCode : addressData?.pinCode}
                    onChange={inputChange}
                    name="pinCode"
                    id="pinCode"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Mobile"
                    fullWidth
                    value={state.mobile ? state.mobile : addressData?.mobile}
                    onChange={inputChange}
                    name="mobile"
                    id="mobile"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Email"
                    fullWidth
                    value={state.email ? state.email : addressData?.email}
                    onChange={inputChange}
                    name="email"
                    id="email"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Timming"
                    fullWidth
                    value={state.timming ? state.timming : addressData?.timming}
                    onChange={inputChange}
                    name="timming"
                    id="timming"
                  />
                </Grid>
              </Grid>
              <br />
              <Box className="footer">
                <Button
                  // fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={"SaveData"}
                >
                  Save
                </Button>

                <Link component={RouterLink} to="/address">
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    className={"CanceForm"}
                  >
                    Cancel
                  </Button>
                </Link>
              </Box>
            </ValidatorForm>
          </div>
        </div>
      </Grid>
    </Box>
  );
};

function mapStateToProps(state) {
  const { address } = state;
  console.log("adad", address);
  return {
    address,
  };
}
export default connect(mapStateToProps)(AddressCreateUpdate);
