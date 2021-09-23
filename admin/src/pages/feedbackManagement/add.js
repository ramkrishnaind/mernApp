import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  Link,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import * as FeedbackAction from "../../redux/actions/FeedbackAction";
import { useDispatch } from "react-redux";
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";
import "./blogManagement.css";
import SubHeading from "../../common/SubHeadingBox";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

const MenuCreateUpdate = (props) => {
  let query = useQuery();
  let id = query.get("id");
  let feedbackData = props?.feedback?.feedbackData;
  const [, setRefresh] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    let data = {
      _id: id,
    };
    if (id != null) {
      dispatch(FeedbackAction.FeedbackDataRequestAsync(data));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (props.feedback.success) {
      setRefresh(true);
      setState(initialState);
    }
  }, [props.feedback.success]);

  const initialState = {
    name: feedbackData?.name,
    email: feedbackData?.email,
    rating: feedbackData?.rating,
    comment: feedbackData?.comment,
    image: "",
    id: id,
  };

  const [state, setState] = useState(initialState);

  const inputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    const { name, email, id, rating, comment, image } = state;
    var data = new FormData();
    if (id === null) {
      data.append("image", image);
      data.append("name", name);
      data.append("email", email);
      data.append("rating", rating);
      data.append("comment", comment);
      dispatch(FeedbackAction.FeedbackAddRequestAsync(data));
    } else {
      data.append("image", image);
      data.append("name", name);
      data.append("email", email);
      data.append("rating", rating);
      data.append("comment", comment);
      data.append("_id", id);
      dispatch(FeedbackAction.FeedbackUpdateRequestAsync(data));
    }
  };

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const handleBannerUpload = (file, status) => {
    if (status === "done") {
      setState({ ...state, ["image"]: file.file });
    }
  };

  return (
    <Box className="MenuManagement_Data">
      <FormHeader
        heading1={"Feedback Module Management"}
        heading2={"Create and Update Feedback Here"}
      />
      {state.id ? (
        <>
          <BreadCrumbs
            heading1={"FeedbackManagement"}
            heading2={"Edit Feedback Module"}
          />
          <SubHeading heading={"Edit Feedback Module"} />
        </>
      ) : (
        <>
          <BreadCrumbs
            heading1={"FeedbackManagement"}
            heading2={"Add Feedback Module"}
          />
          <SubHeading heading={"Add Feedback Module"} />
        </>
      )}
      <Grid item xs={12} className="m-5 addUserFormanage">
        <div className="card w-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <Typography component="h3" variant="h3">
              {state.id ? "Edit" : "Add"} Feedback
            </Typography>
          </div>
          <div class="card-body">
            <ValidatorForm onSubmit={handleSubmit}>
              <Grid container spacing={3} className="FormFildes">
                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Name*"
                    fullWidth
                    value={state.name ? state.name : feedbackData?.name}
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
                    label="Email*"
                    fullWidth
                    value={state.email ? state.email : feedbackData?.email}
                    onChange={inputChange}
                    name="email"
                    id="email"
                    validators={["required"]}
                    errorMessages={["email field is required"]}
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <FormControl variant="outlined" style={{ width: "100%" }}>
                    <InputLabel
                      id="demo-simple-select-outlined-label"
                      htmlFor="age-native-simple"
                    >
                      Role
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined-label"
                      label="Role"
                      native
                      name="rating"
                      value={state.rating ? state.rating : feedbackData?.rating}
                      onChange={inputChange}
                      inputProps={{
                        name: "rating",
                        id: "age-native-simple",
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Comment*"
                    fullWidth
                    value={
                      state.comment ? state.comment : feedbackData?.comment
                    }
                    onChange={inputChange}
                    name="comment"
                    id="comment"
                  />
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

                <Link component={RouterLink} to="/feedback">
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
  const { feedback } = state;
  return {
    feedback,
  };
}
export default connect(mapStateToProps)(MenuCreateUpdate);
