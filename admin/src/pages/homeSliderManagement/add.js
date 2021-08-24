import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  Link
} from "@material-ui/core";
import {
  ValidatorForm,
  TextValidator,
} from "react-material-ui-form-validator";

import * as HomeSliderAction from "../../redux/actions/HomeSliderAction";
import { useDispatch } from "react-redux";
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";
import './sliderManagement.css';
import SubHeading from "../../common/SubHeadingBox";
import {
  Link as RouterLink,
  useLocation
} from "react-router-dom";
import { connect } from "react-redux";
// import Link from "next/link";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MenuCreateUpdate = (props) => {

  let query = useQuery();
  let id = query.get("id");
  let sliderData = props?.slider?.sliderData;
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let data = {
      _id: id
    }
    if (id != null) {
      dispatch(HomeSliderAction.SliderDataRequestAsync(data));
    }

  }, [id]);

  useEffect(() => {
    if (props.slider.success) {
      setRefresh(true)
      setState(initialState)
    }
  }, [props.slider.success]);

  const dispatch = useDispatch();

  const initialState = {
    title: sliderData?.title,
    sortDescription: sliderData?.sortDescription,
    metaTitle: sliderData?.metaTitle,
    metaKeywords: sliderData?.metaKeywords,
    metaDescription: sliderData?.metaDescription,
    image: "",
    id: id,
  };

  const [state, setState] = useState(initialState);
  const [file, setFile] = useState("");
  const [description, setDescription] = useState(sliderData?.description);



  const inputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    const { title, sortDescription, id, metaTitle, metaKeywords, metaDescription, image } = state;
    if (id == null) {
      var data = new FormData();
      data.append('blogImage', image);
      data.append('title', title);
      data.append('sortDescription', sortDescription);
      data.append('description', description);
      data.append('metaTitle', metaTitle);
      data.append('metaKeywords', metaKeywords);
      data.append('metaDescription', metaDescription);

      console.log('dsadsd', data);
      dispatch(HomeSliderAction.SliderAddRequestAsync(data));
    }
    else {
      var data = new FormData();
      data.append('blogImage', image);
      data.append('title', title);
      data.append('sortDescription', sortDescription);
      data.append('description', description);
      data.append('metaTitle', metaTitle);
      data.append('metaKeywords', metaKeywords);
      data.append('metaDescription', metaDescription);
      data.append('_id', id);
      dispatch(HomeSliderAction.SliderUpdateRequestAsync(data));
    }
  };

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const handleChange = (event) => {
    // this.setState({
    setState({ image: event.target.files[0] });
    setFile(URL.createObjectURL(event.target.files[0]))

    // })
  }

  const handleChangeTextEditor = (content, editor) => {
    setDescription(content);
  }

  return (
    <Box className="MenuManagement_Data">
      <FormHeader heading1={"Slider Module Management"} heading2={"Create and Update Slider Here"} />
      {state.id ? (
        <>
          <BreadCrumbs heading1={"SliderManagement"} heading2={"Edit Slider Module"} />
          <SubHeading heading={"Edit Slider Module"} />
        </>
      ) : (
          <>
            <BreadCrumbs heading1={"HomeSliderManagement"} heading2={"Add Slider Module"} />
            <SubHeading heading={"Add Slider Module"} />
          </>
        )
      }
      <Grid item xs={12} className="m-5 addUserFormanage">
        <div className="card w-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <Typography component="h3" variant="h3">
              {state.id ? 'Edit' : 'Add'} Home Slider
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
                    value={(state.title) ? state.title : sliderData?.title}
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
                    value={(state.sortDescription) ? state.sortDescription : sliderData?.sortDescription}
                    onChange={inputChange}
                    name="sortDescription"
                    id="sortDescription"
                    validators={["required"]}
                    errorMessages={["sortDescription field is required"]}
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Meta Title *"
                    fullWidth
                    value={(state.metaTitle) ? state.metaTitle : sliderData?.metaTitle}
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
                    value={(state.metaKeywords) ? state.metaKeywords : sliderData?.metaKeywords}
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
                    value={(state.metaDescription) ? state.metaDescription : sliderData?.metaDescription}
                    onChange={inputChange}
                    name="metaDescription"
                    id="metaDescription"


                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={12} md={12}>
                  {(sliderData?.description != null) ? (
                    <>
                      <ReactQuill
                        onChange={handleChangeTextEditor}
                        value={(description) ? description : sliderData?.description}
                        placeholder='Enter description'
                        theme='snow'
                      />
                    </>
                  )

                    : (
                      <>
                        <ReactQuill
                          onChange={handleChangeTextEditor}
                          placeholder='Enter description'
                          theme='snow'
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

                  <img src={file} height="200px" width="200px" />
                  <Box>
                    <br />

                    {/* <input type="file" onChange={handleChange} />
                    <img src={file} /> */}


                    <Grid item xs={12} sm={12}>
                      <label className="uploadbutton" htmlFor="mainImage">
                        <Button
                          color="default"
                          variant="contained"
                          component="span"
                          color="primary"
                        >
                          Browse
                        </Button>
                      </label>
                      <input
                        style={{ display: "none" }}
                        id="mainImage"
                        name="mainImage"
                        type="file"
                        onChange={handleChange}
                      />
                      {/* <Button
                        style={{ marginLeft: "20px" }}
                        variant="contained"
                        component="span"
                      // onClick={handleCleanImage}
                      >
                        Cancle
                    </Button> */}
                    </Grid>
                  </Box>
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

                <Link component={RouterLink} to="/slider">
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
    </Box >
  )
}


function mapStateToProps(state) {
  const { slider } = state;
  return {
    slider,

  };
}
export default connect(mapStateToProps)(
  (MenuCreateUpdate),
);
