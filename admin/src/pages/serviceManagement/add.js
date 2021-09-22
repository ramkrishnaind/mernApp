import React, { useState } from "react";
import { Button, Grid, Typography, Box, Link } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import * as ServiceAction from "../../redux/actions/ServiceAction";
import { useDispatch } from "react-redux";
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";
import "./serviceManagement.css";
import SubHeading from "../../common/SubHeadingBox";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
// import Link from "next/link";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const MenuCreateUpdate = (props) => {
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    header: "",
    metaTitle: "",
    metaKeywords: "",
    metaDescription: "",
  };

  const [state, setState] = useState(initialState);
  const [description, setDescription] = useState("");
  const inputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    const { title, header, metaTitle, metaKeywords, metaDescription } = state;

    let reqData = {
      title: title,
      header: header,
      description: description,
      metaTitle: metaTitle,
      metaKeywords: metaKeywords,
      metaDescription: metaDescription,
    };
    // console.log("res", reqData);
    dispatch(ServiceAction.ServiceAddRequestAsync(reqData));
  };

  const handleChangeTextEditor = (content, editor) => {
    setDescription(content);
  };

  return (
    <Box className="MenuManagement_Data">
      <FormHeader
        heading1={"Service Module Management"}
        heading2={"Create and Update Service Here"}
      />
      {state.id ? (
        <>
          <BreadCrumbs
            heading1={"ServiceManagement"}
            heading2={"Edit Service Module"}
          />
          <SubHeading heading={"Edit Service Module"} />
        </>
      ) : (
        <>
          <BreadCrumbs
            heading1={"ServiceManagement"}
            heading2={"Add Service Module"}
          />
          <SubHeading heading={"Add Service Module"} />
        </>
      )}
      <Grid item xs={12} className="m-5 addUserFormanage">
        <div className="card w-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <Typography component="h3" variant="h3">
              {state.id ? "Edit" : "Add"} Service
            </Typography>
          </div>
          <div class="card-body">
            <ValidatorForm onSubmit={handleSubmit}>
              <Grid container spacing={3} className="FormFildes">
                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Header*"
                    fullWidth
                    value={state.header}
                    onChange={inputChange}
                    name="header"
                    id="header"
                    validators={["required"]}
                    errorMessages={["header field is required"]}
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Title*"
                    fullWidth
                    value={state.title}
                    onChange={inputChange}
                    name="title"
                    id="title"
                    validators={["required"]}
                    errorMessages={["title field is required"]}
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Meta Title *"
                    fullWidth
                    value={state.metaTitle}
                    onChange={inputChange}
                    name="metaTitle"
                    id="metaTitle"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Meta Keywords*"
                    fullWidth
                    value={state.metaKeywords}
                    onChange={inputChange}
                    name="metaKeywords"
                    id="metaKeywords"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Meta Description*"
                    fullWidth
                    value={state.metaDescription}
                    onChange={inputChange}
                    name="metaDescription"
                    id="metaDescription"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={12} md={12}>
                  <ReactQuill
                    onChange={handleChangeTextEditor}
                    placeholder="Enter description"
                    theme="snow"
                    value={description}
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

                <Link component={RouterLink} to="/service">
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
  const { service } = state;
  return {
    service,
  };
}
export default connect(mapStateToProps)(MenuCreateUpdate);
