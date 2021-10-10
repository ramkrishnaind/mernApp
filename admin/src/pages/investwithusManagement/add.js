import React, { useState, useEffect } from "react";
import { Button, Grid, Typography, Box, Link } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import * as InvestwithusAction from "../../redux/actions/InvestwithusAction";
import { useDispatch } from "react-redux";
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";
import "./blogManagement.css";
import SubHeading from "../../common/SubHeadingBox";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import API_ENDPOINTS from "../../constants/api-endpoints";

const InvestCreateUpdate = (props) => {
  let query = useQuery();
  let id = query.get("id");
  let investwithusData = props?.investwithus?.investwithusData;
  const [, setRefresh] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    let data = {
      _id: id,
    };
    if (id != null) {
      dispatch(InvestwithusAction.InvestwithusDataRequestAsync(data));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (props.investwithus.success) {
      setRefresh(true);
      setState(initialState);
    }
  }, [props.investwithus.success]);

  const initialState = {
    header: investwithusData?.header || "",
    howToInvest: investwithusData?.howToInvest
      ? JSON.stringify(investwithusData?.howToInvest)
      : "",
    title: investwithusData?.title || "",
    shortDescription: investwithusData?.shortDescription || "",
    metaTitle: investwithusData?.metaTitle || "",
    metaKeywords: investwithusData?.metaKeywords || "",
    metaDescription: investwithusData?.metaDescription || "",
    image: "",
    bannerImage: "",
    id: id,
  };

  const [state, setState] = useState(initialState);
  const [description, setDescription] = useState(investwithusData?.description);

  const inputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    const {
      title,
      shortDescription,
      id,
      metaTitle,
      metaKeywords,
      metaDescription,
      image,
      bannerImage,
      howToInvest,
      header,
    } = state;
    var data = new FormData();
    if (id == null) {
      data.append("howToInvest", howToInvest);
      data.append("header", header);
      data.append("bannerImage", bannerImage);
      data.append("image", image);
      data.append("title", title);
      data.append("shortDescription", shortDescription);
      data.append("description", description);
      data.append("metaTitle", metaTitle);
      data.append("metaKeywords", metaKeywords);
      data.append("metaDescription", metaDescription);

      dispatch(InvestwithusAction.InvestwithusAddRequestAsync(data));
    } else {
      data.append("howToInvest", howToInvest);
      data.append("header", header);
      data.append("bannerImage", bannerImage);
      data.append("image", image);
      data.append("title", title);
      data.append("shortDescription", shortDescription);
      data.append("description", description);
      data.append("metaTitle", metaTitle);
      data.append("metaKeywords", metaKeywords);
      data.append("metaDescription", metaDescription);
      data.append("_id", id);
      dispatch(InvestwithusAction.InvestwithusUpdateRequestAsync(data));
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
        heading1={"Invest With Us Module Management"}
        heading2={"Create and Update Invest With Us Here"}
      />
      {state.id ? (
        <>
          <BreadCrumbs
            heading1={"InvestwithusManagement"}
            heading2={"Edit Invest With Us Module"}
          />
          <SubHeading heading={"Edit Invest With Us Module"} />
        </>
      ) : (
        <>
          <BreadCrumbs
            heading1={"InvestwithusManagement"}
            heading2={"Add Invest With Us Module"}
          />
          <SubHeading heading={"Add Invest With Us Module"} />
        </>
      )}
      <Grid item xs={12} className="m-5 addUserFormanage">
        <div className="card w-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <Typography component="h3" variant="h3">
              {state.id ? "Edit" : "Add"} Invest With Us
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
                    label="Short Description*"
                    fullWidth
                    value={state.shortDescription}
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
                <Grid className="form-group-item" item xs={12} sm={12} md={8}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="How To Invest*"
                    fullWidth
                    value={state.howToInvest}
                    onChange={inputChange}
                    name="howToInvest"
                    id="howToInvest"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={12} md={12}>
                  {investwithusData?.description != null ? (
                    <>
                      <ReactQuill
                        onChange={handleChangeTextEditor}
                        value={
                          description
                            ? description
                            : investwithusData?.description
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
                  {investwithusData?.image[0]?.image?.map((item, index) => {
                    return (
                      <img
                        src={API_ENDPOINTS.BASE_URL + item.path}
                        height="80px"
                        width="80px"
                      />
                    );
                  })}

                  <Dropzone
                    maxFiles="1"
                    onChangeStatus={handleBannerUpload}
                    accept="image/*"
                  />
                </Grid>
                <Grid className="form-group-item" item xs={12} sm={6} md={5}>
                  <Typography>Banner Image </Typography>
                  {investwithusData?.image[0]?.banner?.map((item, index) => {
                    return (
                      <img
                        src={API_ENDPOINTS.BASE_URL + item.path}
                        height="80px"
                        width="80px"
                      />
                    );
                  })}
                  <Dropzone
                    maxFiles="1"
                    onChangeStatus={handleBlogBannerUpload}
                    accept="image/*"
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

                <Link component={RouterLink} to="/investwithus">
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
  const { investwithus } = state;
  return {
    investwithus,
  };
}
export default connect(mapStateToProps)(InvestCreateUpdate);
