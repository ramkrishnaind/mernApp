import React, { useState, useEffect } from "react";
import { Button, Grid, Typography, Box, Link } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import * as ServiceItemAction from "../../redux/actions/ServiceItemAction";
import { useDispatch } from "react-redux";
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";
import "./serviceManagement.css";
import SubHeading from "../../common/SubHeadingBox";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
// import Link from "next/link";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

const MenuCreateUpdate = (props) => {
  const dispatch = useDispatch();
  let query = useQuery();
  let id = query.get("id");
  let serviceItemData = props?.serviceItem?.serviceItemData;
  useEffect(() => {
    let data = {
      _id: id,
    };
    if (id != null) {
      dispatch(ServiceItemAction.ServiceItemDataRequestAsync(data));
    }
  }, [id, dispatch]);

  const [, setRefresh] = useState(false);
  useEffect(() => {
    if (props.serviceItem.success) {
      setRefresh(true);
      setState(initialState);
    }
  }, [props.serviceItem.success]);

  const initialState = {
    title: serviceItemData?.title,
    metaTitle: serviceItemData?.metaTitle,
    metaKeywords: serviceItemData?.metaKeywords,
    metaDescription: serviceItemData?.metaDescription,
    shortDescription: serviceItemData?.shortDescription,
    id: id,
    banner: "",
    // video: "",
    image: [],
  };

  const [state, setState] = useState(initialState);
  const [description, setDescription] = useState(serviceItemData?.description);
  const inputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    const {
      title,
      metaTitle,
      metaKeywords,
      metaDescription,
      shortDescription,
      id,
      banner,
      // video,
    } = state;

    var data = new FormData();
    state?.image?.forEach((item) => {
      data.append("image", item);
    });
    if (id === null) {
      data.append("title", title);
      data.append("description", description);
      data.append("metaTitle", metaTitle);
      data.append("metaKeywords", metaKeywords);
      data.append("metaDescription", metaDescription);
      data.append("shortDescription", shortDescription);

      data.append("banner", banner);
      // data.append("video", video);
      dispatch(ServiceItemAction.ServiceItemAddRequestAsync(data));
    } else {
      data.append("title", title);
      data.append("description", description);
      data.append("metaTitle", metaTitle);
      data.append("metaKeywords", metaKeywords);
      data.append("metaDescription", metaDescription);
      data.append("shortDescription", shortDescription);

      data.append("banner", banner);
      // data.append("video", video);
      data.append("_id", id);
      dispatch(ServiceItemAction.ServiceItemUpdateRequestAsync(data));
    }
  };

  const handleChangeTextEditor = (content, editor) => {
    setDescription(content);
  };

  const handleImageExteriorView = (file, status) => {
    let list = state;
    let data = [];
    if (status === "done") {
      if (list.image && list.image.length) {
        data = list.image;
        data[list.image.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setState({ ...state, ["image"]: data });
    }
  };

  // const handleVideouplaod = (file, status) => {
  //   if (status === "done") {
  //     setState({ ...state, ["video"]: file.file });
  //   }
  // };

  const handleBannerUpload = (file, status) => {
    if (status === "done") {
      setState({ ...state, ["banner"]: file.file });
    }
  };

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  return (
    <Box className="MenuManagement_Data">
      <FormHeader
        heading1={"Service Item Module Management"}
        heading2={"Create and Update Service Item Here"}
      />
      {state.id ? (
        <>
          <BreadCrumbs
            heading1={"ServiceItemManagement"}
            heading2={"Edit Service Item Module"}
          />
          <SubHeading heading={"Edit Service Item Module"} />
        </>
      ) : (
        <>
          <BreadCrumbs
            heading1={"ServiceItemManagement"}
            heading2={"Add Service Item Module"}
          />
          <SubHeading heading={"Add Service Item Module"} />
        </>
      )}
      <Grid item xs={12} className="m-5 addUserFormanage">
        <div className="card w-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <Typography component="h3" variant="h3">
              {state.id ? "Edit" : "Add"} Service Item
            </Typography>
          </div>
          <div class="card-body">
            <ValidatorForm onSubmit={handleSubmit}>
              <Grid container spacing={3} className="FormFildes">
                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Title*"
                    fullWidth
                    value={state.title ? state.title : serviceItemData?.title}
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
                    label="Short Description*"
                    fullWidth
                    value={
                      state.shortDescription
                        ? state.shortDescription
                        : serviceItemData?.shortDescription
                    }
                    onChange={inputChange}
                    name="shortDescription"
                    id="shortDescription"
                    validators={["required"]}
                    errorMessages={["shortDescription field is required"]}
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Meta Title *"
                    fullWidth
                    value={
                      state.metaTitle
                        ? state.metaTitle
                        : serviceItemData?.metaTitle
                    }
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
                    value={
                      state.metaKeywords
                        ? state.metaKeywords
                        : serviceItemData?.metaKeywords
                    }
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
                    value={
                      state.metaDescription
                        ? state.metaDescription
                        : serviceItemData?.metaDescription
                    }
                    onChange={inputChange}
                    name="metaDescription"
                    id="metaDescription"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={12} md={12}>
                  {serviceItemData?.description != null ? (
                    <>
                      <ReactQuill
                        onChange={handleChangeTextEditor}
                        value={
                          description
                            ? description
                            : serviceItemData?.description
                        }
                        placeholder="Enter description"
                        theme="snow"
                      />
                    </>
                  ) : (
                    <>
                      <ReactQuill
                        onChange={handleChangeTextEditor}
                        placeholder="Enter description"
                        theme="snow"
                      />
                    </>
                  )}
                </Grid>
              </Grid>
              <br />
              <SubHeading heading={"Upload Image"} />
              <br />
              <Grid container spacing={3} className="FormFildes">
                <Grid className="form-group-item" item xs={12} sm={6} md={5}>
                  <Typography>Image </Typography>
                  <Dropzone
                    onChangeStatus={handleImageExteriorView}
                    accept="image/*,audio/*,video/*"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={3}>
                  <Typography>Banner </Typography>
                  <Dropzone
                    maxFiles="1"
                    onChangeStatus={handleBannerUpload}
                    accept="image/*"
                  />
                </Grid>

                {/* <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <Typography>Video </Typography>
                  <Dropzone
                    maxFiles="1"
                    onChangeStatus={handleVideouplaod}
                    accept="video/*"
                  />
                </Grid> */}
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

                <Link component={RouterLink} to="/ServiceItem">
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
  const { serviceItem } = state;
  return {
    serviceItem,
  };
}
export default connect(mapStateToProps)(MenuCreateUpdate);
