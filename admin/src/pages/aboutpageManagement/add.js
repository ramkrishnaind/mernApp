import React, { useState, useEffect } from "react";
import { Button, Grid, Typography, Box, Link } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import * as AboutpageAction from "../../redux/actions/AboutpageAction";
import { useDispatch } from "react-redux";
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";
import "./aboutUsManagement.css";
import SubHeading from "../../common/SubHeadingBox";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
// import Link from "next/link";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

const MenuCreateUpdate = (props) => {
  let query = useQuery();
  let id = query.get("id");
  let aboutpageData = props?.aboutpage?.aboutpageData;
  const [, setRefresh] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id != null) {
      dispatch(AboutpageAction.AboutpageDataRequestAsync());
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (props.aboutpage.success) {
      setRefresh(true);
      setState(initialState);
    }
  }, [props.aboutpage.success]);

  const initialState = {
    imagePosition: aboutpageData?.imagePosition,
    title: aboutpageData?.title,
    description: aboutpageData?.description,
    metaTitle: aboutpageData?.metaTitle,
    metaKeywords: aboutpageData?.metaKeywords,
    metaDescription: aboutpageData?.metaDescription,
    image: [],
    id: aboutpageData?._id,
  };

  const [state, setState] = useState(initialState);

  const inputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    const {
      title,
      description,
      id,
      metaTitle,
      metaKeywords,
      metaDescription,
      imagePosition,
    } = state;
    var data = new FormData();
    state?.image.forEach((item, index) => {
      data.append("aboutImages", item);
    });
    if (id === null) {
      data.append("imagePosition", imagePosition);
      data.append("title", title);
      data.append("description", description);
      data.append("metaTitle", metaTitle);
      data.append("metaKeywords", metaKeywords);
      data.append("metaDescription", metaDescription);
      dispatch(AboutpageAction.AboutpageAddRequestAsync(data));
    } else {
      data.append("imagePosition", imagePosition);
      data.append("title", title);
      data.append("description", description);
      data.append("metaTitle", metaTitle);
      data.append("metaKeywords", metaKeywords);
      data.append("metaDescription", metaDescription);
      data.append("_id", id);

      dispatch(AboutpageAction.AboutpageUpdateRequestAsync(data));
    }
  };

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

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

  return (
    <Box className="MenuManagement_Data">
      <FormHeader
        heading1={"About Page Module Management"}
        heading2={"Create and Update About Page Here"}
      />
      {state.id ? (
        <>
          <BreadCrumbs
            heading1={"AboutPageManagement"}
            heading2={"Edit About Page Module"}
          />
          <SubHeading heading={"Edit About Page Module"} />
        </>
      ) : (
        <>
          <BreadCrumbs
            heading1={"AboutPageManagement"}
            heading2={"Add About Page Module"}
          />
          <SubHeading heading={"Add About Page Module"} />
        </>
      )}
      <Grid item xs={12} className="m-5 addUserFormanage">
        <div className="card w-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <Typography component="h3" variant="h3">
              {state.id ? "Edit" : "Add"} About Page
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
                    value={state.title ? state.title : aboutpageData?.title}
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
                    label="Description*"
                    fullWidth
                    value={
                      state.description
                        ? state.description
                        : aboutpageData?.description
                    }
                    onChange={inputChange}
                    name="description"
                    id="description"
                    validators={["required"]}
                    errorMessages={["description field is required"]}
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
                        : aboutpageData?.metaTitle
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
                        : aboutpageData?.metaKeywords
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
                        : aboutpageData?.metaDescription
                    }
                    onChange={inputChange}
                    name="metaDescription"
                    id="metaDescription"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Image position*"
                    fullWidth
                    value={
                      state.imagePosition
                        ? state.imagePosition
                        : aboutpageData?.imagePosition
                    }
                    onChange={inputChange}
                    name="imagePosition"
                    id="imagePosition"
                    validators={["required"]}
                    errorMessages={["imagePosition field is required"]}
                  />
                </Grid>
              </Grid>
              <br />
              <SubHeading heading={"Upload Image"} />
              <br />
              <Grid container spacing={3} className="FormFildes">
                <Grid className="form-group-item" item xs={12} sm={6} md={5}>
                  <Dropzone
                    onChangeStatus={handleImageExteriorView}
                    accept="image/*,audio/*,video/*"
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

                <Link component={RouterLink} to="/aboutpage">
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
  const { aboutpage } = state;
  return {
    aboutpage,
  };
}
export default connect(mapStateToProps)(MenuCreateUpdate);
