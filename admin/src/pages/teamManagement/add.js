import React, { useState, useEffect } from "react";
import { Button, Grid, Typography, Box, Link } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import * as TeamAction from "../../redux/actions/TeamAction";
import { useDispatch } from "react-redux";
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";
import "./blogManagement.css";
import SubHeading from "../../common/SubHeadingBox";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
// import Link from "next/link";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

const MenuCreateUpdate = (props) => {
  let query = useQuery();
  let id = query.get("id");
  let teamData = props?.team?.teamData;
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let data = {
      _id: id,
    };
    if (id != null) {
      dispatch(TeamAction.TeamDataRequestAsync(data));
    }
  }, [id]);

  useEffect(() => {
    if (props.team.success) {
      setRefresh(true);
      setState(initialState);
    }
  }, [props.team.success]);

  const dispatch = useDispatch();

  const initialState = {
    name: teamData?.name,
    shortDescription: teamData?.shortDescription,
    designation: teamData?.designation,
    facebook: teamData?.facebook,
    twitter: teamData?.twitter,
    instagram: teamData?.instagram,
    linkedin: teamData?.linkedin,
    image: "",
    id: id,
  };

  const [state, setState] = useState(initialState);
  const [file, setFile] = useState("");
  const [description, setDescription] = useState(teamData?.description);

  const inputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    const {
      name,
      shortDescription,
      id,
      designation,
      facebook,
      twitter,
      image,
      instagram,
      linkedin,
    } = state;
    if (id == null) {
      var data = new FormData();
      data.append("image", image);
      data.append("name", name);
      data.append("shortDescription", shortDescription);
      data.append("description", description);
      data.append("designation", designation);
      data.append("facebook", facebook);
      data.append("twitter", twitter);
      data.append("instagram", instagram);
      data.append("linkedin", linkedin);
      console.log("dsadsd", data);
      dispatch(TeamAction.TeamAddRequestAsync(data));
    } else {
      var data = new FormData();
      data.append("image", image);
      data.append("name", name);
      data.append("shortDescription", shortDescription);
      data.append("description", description);
      data.append("designation", designation);
      data.append("facebook", facebook);
      data.append("twitter", twitter);
      data.append("instagram", instagram);
      data.append("linkedin", linkedin);
      data.append("_id", id);
      dispatch(TeamAction.TeamUpdateRequestAsync(data));
    }
  };

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const handleChangeTextEditor = (content, editor) => {
    setDescription(content);
  };

  const handleBannerUpload = (file, status) => {
    let list = state;
    if (status == "done") {
      setState({ ...state, ["image"]: file.file });
    }
  };

  return (
    <Box className="MenuManagement_Data">
      <FormHeader
        heading1={"Team Module Management"}
        heading2={"Create and Update Team Here"}
      />
      {state.id ? (
        <>
          <BreadCrumbs
            heading1={"TeamManagement"}
            heading2={"Edit Team Module"}
          />
          <SubHeading heading={"Edit Team Module"} />
        </>
      ) : (
        <>
          <BreadCrumbs
            heading1={"TeamManagement"}
            heading2={"Add Team Module"}
          />
          <SubHeading heading={"Add Team Module"} />
        </>
      )}
      <Grid item xs={12} className="m-5 addUserFormanage">
        <div className="card w-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <Typography component="h3" variant="h3">
              {state.id ? "Edit" : "Add"} Team
            </Typography>
            {/* <Button
                onClick={() => this.props.history.push("menu")}
                variant="contained"
                color="primary"
                type="submit"
                
              >Back</Button> */}
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
                    value={state.name ? state.name : teamData?.name}
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
                    label="Short Description*"
                    fullWidth
                    value={
                      state.shortDescription
                        ? state.shortDescription
                        : teamData?.shortDescription
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
                    label="Designation"
                    fullWidth
                    value={
                      state.designation
                        ? state.designation
                        : teamData?.designation
                    }
                    onChange={inputChange}
                    name="designation"
                    id="designation"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Facebook"
                    fullWidth
                    value={state.facebook ? state.facebook : teamData?.facebook}
                    onChange={inputChange}
                    name="facebook"
                    id="facebook"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Twitter"
                    fullWidth
                    value={state.twitter ? state.twitter : teamData?.twitter}
                    onChange={inputChange}
                    name="twitter"
                    id="twitter"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Instagram"
                    fullWidth
                    value={
                      state.instagram ? state.instagram : teamData?.instagram
                    }
                    onChange={inputChange}
                    name="instagram"
                    id="instagram"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Linkedin"
                    fullWidth
                    value={state.linkedin ? state.linkedin : teamData?.linkedin}
                    onChange={inputChange}
                    name="linkedin"
                    id="linkedin"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={12} md={12}>
                  {teamData?.description != null ? (
                    <>
                      <ReactQuill
                        onChange={handleChangeTextEditor}
                        value={
                          description ? description : teamData?.description
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
                    maxFiles="1"
                    onChangeStatus={handleBannerUpload}
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

                <Link component={RouterLink} to="/team">
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
  const { team } = state;
  return {
    team,
  };
}
export default connect(mapStateToProps)(MenuCreateUpdate);
