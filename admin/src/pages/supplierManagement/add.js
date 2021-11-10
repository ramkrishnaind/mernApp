import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  Link,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import * as SupplierAction from "../../redux/actions/SupplierAction";
import { useDispatch } from "react-redux";
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";
import "./blogManagement.css";
import SubHeading from "../../common/SubHeadingBox";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
// import Link from "next/link";

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import Dropzone from "react-dropzone-uploader";
// import "react-dropzone-uploader/dist/styles.css";
// import API_ENDPOINTS from "../../constants/api-endpoints";

const SupplierCreateUpdate = (props) => {
  let query = useQuery();
  let id = query.get("id");
  let supplierData = props?.supplier?.supplierData;
  const [, setRefresh] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    let data = {
      _id: id,
    };
    if (id != null) {
      dispatch(SupplierAction.SupplierDataRequestAsync(data));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (props.supplier.success) {
      setRefresh(true);
      setState(initialState);
    }
  }, [props.supplier.success]);

  const initialState = {
    name: supplierData?.name || "",
    companyName: supplierData?.companyName || "",
    email: supplierData?.email || "",
    mobile: supplierData?.mobile || "",

    role: supplierData?.role || "",
    location: supplierData?.location || "",
    city: supplierData?.city || "",
    supplierOf: supplierData?.supplierOf || "",

    message: supplierData?.message || "",
    marble: supplierData?.marble || "",
    image: "",
    bannerImage: "",
    id: id,
  };

  const [state, setState] = useState(initialState);
  const [description, setDescription] = useState(supplierData?.description);

  const inputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    const {
      name,
      companyName,
      id,
      email,

      mobile,
      role,
      location,
      city,
      supplierOf,

      message,
      marble,
      image,
      bannerImage,
    } = state;

    var data = new FormData();

    if (id === null || id === undefined) {
      let reqData = {
        name: name,
        companyName: companyName,
        email: email,
        role: role,

        mobile: mobile,
        location: location,
        city: city,
        supplierOf: supplierOf,
      };
      dispatch(SupplierAction.SupplierAddRequestAsync(reqData));
    } else {
      let reqData = {
        name: name,
        companyName: companyName,
        email: email,
        role: role,

        mobile: mobile,
        location: location,
        city: city,
        supplierOf: supplierOf,
        _id: id,
      };

      dispatch(SupplierAction.SupplierUpdateRequestAsync(reqData));
    }
  };

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const handleChangeTextEditor = (content, editor) => {
    setDescription(content);
  };

  const handleBannerUpload = (file, status) => {
    if (status === "done") {
      setState({ ...state, ["image"]: file.file });
    }
  };

  const handleBlogBannerUpload = (file, status) => {
    if (status === "done") {
      setState({ ...state, ["bannerImage"]: file.file });
    }
  };

  return (
    <Box className="MenuManagement_Data">
      <FormHeader
        heading1={"Supplier Module Management"}
        heading2={"Create and Update Supplier Here"}
      />
      {state.id ? (
        <>
          <BreadCrumbs
            heading1={"SupplierManagement"}
            heading2={"Edit Supplier Module"}
          />
          <SubHeading heading={"Edit Supplier Module"} />
        </>
      ) : (
        <>
          <BreadCrumbs
            heading1={"SupplierManagement"}
            heading2={"Add Supplier Module"}
          />
          <SubHeading heading={"Add Supplier Module"} />
        </>
      )}
      <Grid item xs={12} className="m-5 addUserFormanage">
        <div className="card w-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <Typography component="h3" variant="h3">
              {state.id ? "Edit" : "Add"} Supplier
            </Typography>
          </div>
          <div class="card-body">
            <ValidatorForm onSubmit={handleSubmit}>
              <Grid container spacing={3} className="FormFildes">
                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Your Name*"
                    fullWidth
                    value={state.name}
                    onChange={inputChange}
                    name="name"
                    id="name"
                    validators={["required"]}
                    errorMessages={["name field is required"]}
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Company Name*"
                    fullWidth
                    value={state.companyName}
                    onChange={inputChange}
                    name="companyName"
                    id="companyName"
                    validators={["required"]}
                    errorMessages={["companyName field is required"]}
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <InputLabel
                      id="demo-simple-select-outlined-label"
                      htmlFor="age-native-simple"
                    >
                      Position/job Role
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined-label"
                      label="Role"
                      native
                      name="role"
                      value={state.role}
                      onChange={inputChange}
                      inputProps={{
                        name: "role",
                        id: "age-native-simple",
                      }}
                    >
                      <option value="owner">Owner</option>
                      <option value="manager">Manager</option>
                      <option value="staff">Staff</option>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Mobiile *"
                    fullWidth
                    value={state.mobile}
                    onChange={inputChange}
                    name="mobile"
                    id="mobile"
                    validators={["required"]}
                    errorMessages={["mobile field is required"]}
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Email Id *"
                    fullWidth
                    value={state.email}
                    onChange={inputChange}
                    name="email"
                    id="email"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="city *"
                    fullWidth
                    value={state.city}
                    onChange={inputChange}
                    name="city"
                    id="city"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Location *"
                    fullWidth
                    value={state.location}
                    onChange={inputChange}
                    name="location"
                    id="location"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <InputLabel
                      id="demo-simple-select-outlined-label"
                      htmlFor="age-native-simple"
                    >
                      Supplier of
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined-label"
                      label="Role"
                      native
                      name="supplierOf"
                      value={state.supplierOf}
                      onChange={inputChange}
                      inputProps={{
                        name: "supplierOf",
                        id: "age-native-simple",
                      }}
                    >
                      <option value="owner">Top</option>
                      <option value="manager">Bottom</option>
                    </Select>
                  </FormControl>
                </Grid>

                {/* <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Message *"
                    fullWidth
                    value={state.message}
                    onChange={inputChange}
                    name="message"
                    id="message"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Marble*"
                    fullWidth
                    value={state.marble}
                    onChange={inputChange}
                    name="marble"
                    id="marble"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Tiles*"
                    fullWidth
                    value={state.tiles}
                    onChange={inputChange}
                    name="tiles"
                    id="tiles"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Bricks*"
                    fullWidth
                    value={state.brick}
                    onChange={inputChange}
                    name="brick"
                    id="brick"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Decorative Items*"
                    fullWidth
                    value={state.decorative_items}
                    onChange={inputChange}
                    name="decorative_items"
                    id="decorative_items"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Sand*"
                    fullWidth
                    value={state.sand}
                    onChange={inputChange}
                    name="sand"
                    id="sand"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Cement*"
                    fullWidth
                    value={state.cement}
                    onChange={inputChange}
                    name="cement"
                    id="cement"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Electrical Items*"
                    fullWidth
                    value={state.electrical_items}
                    onChange={inputChange}
                    name="electrical_items"
                    id="electrical_items"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Furniture*"
                    fullWidth
                    value={state.furniture}
                    onChange={inputChange}
                    name="furniture"
                    id="furniture"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Furniture Hardware*"
                    fullWidth
                    value={state.furniture_hardware}
                    onChange={inputChange}
                    name="furniture_hardware"
                    id="furniture_hardware"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Paint*"
                    fullWidth
                    value={state.paint}
                    onChange={inputChange}
                    name="paint"
                    id="paint"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Security Services*"
                    fullWidth
                    value={state.security_services}
                    onChange={inputChange}
                    name="security_services"
                    id="security_services"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Still Equipments*"
                    fullWidth
                    value={state.still_equipments}
                    onChange={inputChange}
                    name="still_equipments"
                    id="still_equipments"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Sanitary Hardware*"
                    fullWidth
                    value={state.sanitary_hardware}
                    onChange={inputChange}
                    name="sanitary_hardware"
                    id="sanitary_hardware"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Ro Services*"
                    fullWidth
                    value={state.ro_services}
                    onChange={inputChange}
                    name="ro_services"
                    id="ro_services"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Electronic Item*"
                    fullWidth
                    value={state.electronic_item}
                    onChange={inputChange}
                    name="electronic_item"
                    id="electronic_item"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Electrical services*"
                    fullWidth
                    value={state.electrical_services}
                    onChange={inputChange}
                    name="electrical_services"
                    id="electrical_services"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Safety Guards*"
                    fullWidth
                    value={state.safety_guards}
                    onChange={inputChange}
                    name="safety_guards"
                    id="safety_guards"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Building Material*"
                    fullWidth
                    value={state.building_material}
                    onChange={inputChange}
                    name="building_material"
                    id="building_material"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Glass House*"
                    fullWidth
                    value={state.glass_house}
                    onChange={inputChange}
                    name="glass_house"
                    id="glass_house"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Fabrication*"
                    fullWidth
                    value={state.fabrication}
                    onChange={inputChange}
                    name="fabrication"
                    id="fabrication"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="JVNL services*"
                    fullWidth
                    value={state.jvnl_services}
                    onChange={inputChange}
                    name="jvnl_services"
                    id="jvnl_services"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="JDA Work*"
                    fullWidth
                    value={state.jda_work}
                    onChange={inputChange}
                    name="jda_work"
                    id="jda_work"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Solar Equipments*"
                    fullWidth
                    value={state.solar_equipments}
                    onChange={inputChange}
                    name="solar_equipments"
                    id="solar_equipments"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Manpower Supplier*"
                    fullWidth
                    value={state.manpower_Supplier}
                    onChange={inputChange}
                    name="manpower_Supplier"
                    id="manpower_Supplier"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Construction Hardware *"
                    fullWidth
                    value={state.Construction}
                    onChange={inputChange}
                    name="Construction"
                    id="Construction"
                  />
                </Grid>
               */}
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

                <Link component={RouterLink} to="/supplier">
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
  const { supplier } = state;
  return {
    supplier,
  };
}
export default connect(mapStateToProps)(SupplierCreateUpdate);
