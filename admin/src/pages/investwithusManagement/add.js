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
// import API_ENDPOINTS from "./../../constants/api-endpoints";

const InvestCreateUpdate = (props) => {
  // return null
  let investwithusData = props?.investwithus?.investwithusData;
  let query = useQuery();
  let id = query.get("id");
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
  var getFileBlob = function (url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.addEventListener("load", function () {
      cb(xhr.response);
    });
    xhr.send();
  };

  const initialState = {
    whatWeDoHeader: investwithusData?.whatWeDoHeader || "",
    whatWeDoDescription: investwithusData?.whatWeDoDescription || "",
    whatWeDo: (investwithusData?.whatWeDo && investwithusData?.whatWeDo.length>0)?investwithusData?.whatWeDo : [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
    howToInvestTitle: investwithusData?.howToInvestTitle || "",
    howToInvest: (investwithusData?.howToInvest && investwithusData?.howToInvest.length>0)? investwithusData?.howToInvest: [
      { title: "", description: "" },
      { title: "", description: "" },
      { title: "", description: "" },
    ],
    metaTitle: investwithusData?.metaTitle || "",
    metaKeywords: investwithusData?.metaKeywords || "",
    metaDescription: investwithusData?.metaDescription || "",
    image: investwithusData?.media[0]?.image || [],
    bannerImage: investwithusData?.media[0]?.bannerImage || [],
    whatWeDoImages: investwithusData?.media[0]?.whatWeDoImages || [
      null,
      null,
      null,
    ],
    howToInvestImages: investwithusData?.media[0]?.howToInvestImages || [
      null,
      null,
      null,
    ],
    id: id,
  };

  debugger;
  const [state, setState] = useState(initialState);
  const [whatWeDoImages, setWhatWeDoImages] = useState(
    investwithusData?.whatWeDoImages || [null,null,null]
  );
  const [howToInvestImages, setHowToInvestImages] = useState(
    investwithusData?.howToInvestImages || [null,null,null]
  );
  const { image, bannerImage } = state;

  useEffect(() => {
    if (investwithusData?.media[0].bannerImage.length > 0) {
      getFileBlob(
        API_ENDPOINTS.BASE_URL +
          investwithusData?.media[0].bannerImage[0]?.path,
        (returnedImage) => {
          debugger;
          // const file=new File([returnedImage],investwithusData?.media[0].bannerImage[0]?.filename)
          // initialState.bannerImage = returnedImage;
          returnedImage.name =
            investwithusData?.media[0].bannerImage[0]?.filename;
          setState((prevState) => {
            return { ...prevState, bannerImage: [returnedImage] };
          });
        }
      );
    }
  }, [investwithusData]);

  useEffect(() => {
    debugger;
    if (investwithusData?.media[0].image.length > 0) {
      getFileBlob(
        API_ENDPOINTS.BASE_URL + investwithusData?.media[0].image[0].path,
        (returnedImage) => {
          // initialState.image = returnedImage;
          setState((prevState) => {
            returnedImage.name = investwithusData?.media[0].image[0]?.filename;
            debugger;
            return { ...prevState, image: [returnedImage] };
          });
        }
      );
    }
  }, [investwithusData]);
  useEffect(() => {
    const whatwedos = [];
    if (investwithusData && investwithusData.whatWeDoImages) {
      investwithusData?.whatWeDoImages?.forEach((image) => {
        getFileBlob(API_ENDPOINTS.BASE_URL + image.path, (returnedImage) => {
          returnedImage.name = image?.filename;
          whatwedos.push(returnedImage);
        });
      });
    }
    // if (investwithusData) {
    // investwithusData.howToInvestImages = whatwedos;
    setWhatWeDoImages(whatwedos);
    // }
  }, [investwithusData]);
  useEffect(() => {
    const howToInvestImgs = [];
    if (investwithusData && investwithusData.howToInvestImages) {
      investwithusData?.howToInvestImages?.forEach((image) => {
        getFileBlob(API_ENDPOINTS.BASE_URL + image.path, (returnedImage) => {
          returnedImage.name = image?.filename;
          howToInvestImgs.push(returnedImage);
        });
      });
    }
    // if (investwithusData) {
    // investwithusData.howToInvestImages = howToInvestImgs;
    setHowToInvestImages(howToInvestImgs);
    // }
  }, [investwithusData]);
  const inputChange = (e) => {
    debugger;
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  const whatToDoTitleChange = (e, index) => {
    let { name, value } = e.target;
    const whatToDos = [...state.whatWeDo];
    whatToDos[index].title = e.target.value;
    setState({ ...state, whatWeDo: whatToDos });
  };
  const howToInvestTitleChange = (e, index) => {
    let { name, value } = e.target;
    const howToInvests = [...state.howToInvest];
    howToInvests[index].title = e.target.value;
    setState({ ...state, howToInvest: howToInvests });
  };
  const deleteWhatWeDoHandler = (index) => {
    debugger;
    const imgs = [...whatWeDoImages];
    imgs.splice(index, 1);
    setWhatWeDoImages(imgs);
    const whatWeDos = [...state.whatWeDo];
    if (whatWeDos.length === 0) {
      whatWeDos[0] = { title: "", description: "" };
    } else {
      whatWeDos.splice(index, 1);
    }
    setState({ ...state, whatWeDo: whatWeDos });
  };
  console.log("whatwedo",state.whatWeDo)
  console.log("bannerImage", state.bannerImage);
  console.log("image", state.image);
  const addWhatWeDoHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const whatWeDos = [...state.whatWeDo];
    whatWeDos.push({ title: "", description: "" });
    setState({ ...state, whatWeDo: whatWeDos });
  };
  console.log("state.whatWeDo", state.whatWeDo);
  const handleWhatWeDoImagesUpload = (index, file, status) => {
    debugger;
    let imgs = [...whatWeDoImages];
    if (status === "removed") {
        imgs[index]=null        
        setWhatWeDoImages(imgs);
    } else {
      // let list = image;
      // let data = [];
      if (status === "done") {
        imgs[index] = file.file;
        setWhatWeDoImages(imgs);
      }
    }
  };
  const handleHowToInvestImagesUpload = (index, file, status) => {
    debugger;
    let imgs = [...howToInvestImages];
    if (status === "removed") {
        imgs[index]=null        
        setHowToInvestImages(imgs);
    } else {
      const imgs = [...howToInvestImages];
      // let list = image;
      // let data = [];
      if (status === "done") {
        imgs[index] = file.file;

        setHowToInvestImages(imgs);
      }
    }
  };

  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    const {
      whatWeDoHeader,
      whatWeDoDescription,
      whatWeDo,
      howToInvestTitle,
      howToInvest,
      id,
      metaTitle,
      metaKeywords,
      metaDescription,
      image,
      bannerImage,
      whatWeDoImages,
      howToInvestImages,
    } = state;
    var data = new FormData();
    if (id == null) {
      data.append("whatWeDoHeader", whatWeDoHeader);
      data.append("whatWeDoDescription", whatWeDoDescription);
      data.append("whatWeDo", whatWeDo); //array
      // data.append("shortDescription", shortDescription);
      data.append("howToInvestTitle", howToInvestTitle);
      data.append("howToInvest", howToInvest); //array
      data.append("metaTitle", metaTitle);
      data.append("metaKeywords", metaKeywords);
      data.append("metaDescription", metaDescription);
      data.append("bannerImage", bannerImage);
      data.append("image", image);
      data.append("whatWeDoImages", whatWeDoImages); //array
      data.append("howToInvestImages", howToInvestImages); //array

      dispatch(InvestwithusAction.InvestwithusAddRequestAsync(data));
    } else {
      data.append("whatWeDoHeader", whatWeDoHeader);
      data.append("whatWeDoDescription", whatWeDoDescription);
      data.append("whatWeDo", whatWeDo); //array
      data.append("howToInvest", howToInvest);
      data.append("howToInvestTitle", howToInvestTitle);
      // data.append("header", header);
      data.append("bannerImage", bannerImage);
      data.append("image", image);
      data.append("whatWeDoImages", whatWeDoImages); //array
      data.append("howToInvestImages", howToInvestImages); //array
      // data.append("title", title);
      // data.append("shortDescription", shortDescription);
      // data.append("description", description);
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

  const handleWhatWeDoDetailTextEditor = (index, content) => {
    debugger
    const whatWeDos = state.whatWeDo ? [...state.whatWeDo] : [];
    whatWeDos[index].description = content;
    setState((prevState) => {
      return { ...prevState, whatWeDo: whatWeDos };
    });
  };
  const handleHowToInvestTextEditor = (index, content) => {
    const whatWeDos = state.howToInvest ? [...state.howToInvest] : [];
    whatWeDos[index].description = content;
    setState((prevState) => {
      return { ...prevState, howToInvest: whatWeDos };
    });
  };
  const handleChangeWhatWeDoTextEditor = (content, editor) => {
    setState((prevState) => {
      return { ...prevState, whatWeDoDescription: content };
    });
  };
  // const handleWhatWeDoTextEditor = (content, editor) => {
  //   // setDescription(content);
  // };
  const handleImageUpload = (file, status) => {
    if (status === "done") {
      setState({ ...state, ["image"]: [file.file] });
    }
  };

  const handleBannerImageUpload = (file, status) => {
    if (status === "done") {
      setState({ ...state, ["bannerImage"]: [file.file] });
    }
  };

  return (
    <Box className="MenuManagement_Data investWithUs">
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
        {/* <Box mt={2}/> */}
      </Grid>
      <Grid item xs={12} className="m-5 addUserFormanage">
        <div className="card w-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <Typography component="h3" variant="h3">
              {state.id ? "Edit" : "Add"} Invest With Us
            </Typography>
          </div>

          <div class="card-body">
            <ValidatorForm onSubmit={handleSubmit}>
              <Box mt={2} />
              <SubHeading heading={"Main Section"} />
              <Box mt={2} />

              <Grid
                className="form-group-item"
                item
                xs={12}
                sm={6}
                md={5}
                style={{ padding: "15px" }}
              >
                <Typography>Banner Image </Typography>
                {/* <Typography>Banner Image </Typography>
                  {investwithusData?.media[0]?.bannerImage?.map(
                    (item, index) => {
                      return (
                        <img
                          src={API_ENDPOINTS.BASE_URL + item.path}
                          height="80px"
                          width="80px"
                        />
                      );
                    }
                  )} */}
                <Dropzone
                  maxFiles="1"
                  multiple={false}
                  initialFiles={state?.bannerImage || []}
                  onChangeStatus={handleBannerImageUpload}
                  accept="image/*"
                />
              </Grid>
              <Grid
                className="form-group-item"
                item
                style={{ display: "flex", padding: "15px" }}
              >
                <Grid
                  className="form-group-item"
                  item
                  xs={12}
                  style={{ flex: 1 }}
                >
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
                <Box sx={{ marginLeft: 3 }} />
                <Grid className="form-group-item" item style={{ flex: 1 }}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="Meta Keywords*"
                    value={state.metaKeywords}
                    onChange={inputChange}
                    fullWidth
                    name="metaKeywords"
                    id="metaKeywords"
                  />
                </Grid>
                <Box sx={{ marginLeft: 3 }} />
                <Grid
                  className="form-group-item"
                  item
                  xs={12}
                  style={{ flex: 1 }}
                >
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    fullWidth
                    label="Meta Description*"
                    value={state.metaDescription}
                    onChange={inputChange}
                    name="metaDescription"
                    id="metaDescription"
                  />
                </Grid>
              </Grid>

              <Grid
                container
                spacing={3}
                className="FormFildes"
                style={{ padding: "15px" }}
              ></Grid>
              <Box mt={2} />
              <SubHeading heading={"What We Do Section"} />
              <Box mt={2} />
              <Grid
                container
                spacing={3}
                className="FormFildes"
                style={{ padding: "15px" }}
              >
                <Grid
                  className="form-group-item"
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  style={{ padding: "15px" }}
                >
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="What we do header*"
                    fullWidth
                    value={state.whatWeDoHeader}
                    onChange={inputChange}
                    name="whatWeDoHeader"
                    id="whatWeDoHeader"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={3}
                className="FormFildes"
                style={{ padding: "15px" }}
              >
                <Grid className="form-group-item" item xs={12} sm={6} md={5}>
                  <Typography>Image </Typography>
                  {/* {investwithusData?.media[0]?.image?.map((item, index) => {
                    return (
                      <img
                        src={API_ENDPOINTS.BASE_URL + item.path}
                        height="80px"
                        width="80px"
                      />
                    );
                  })} */}

                  <Dropzone
                    maxFiles="1"
                    multiple={false}
                    initialFiles={state?.image || []}
                    onChangeStatus={handleImageUpload}
                    accept="image/*"
                  />
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={12} md={12}>
                  <ReactQuill
                    onChange={handleChangeWhatWeDoTextEditor}
                    value={state.whatWeDoDescription}
                    placeholder="What we do description"
                    theme="snow"
                  />
                </Grid>
              </Grid>

              <Grid
                className="form-group-item"
                item
                xs={12}
                style={{ padding: "15px" }}
              >
                <div className="card-header d-flex justify-content-between align-items-center">
                  <Typography component="h4" variant="h4">
                    What We Do Details
                  </Typography>
                </div>

                <Grid className="form-group-item" item xs={12} sm={12} md={12}>
                  {state.whatWeDo &&
                    state.whatWeDo.length > 0 &&
                    state.whatWeDo.map((whatWeDo, index) => {
                      return (
                        <Grid
                          className="form-group-item"
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            style={{ marginTop: "15px" }}
                            label="Title*"
                            fullWidth
                            value={whatWeDo?.title || ""}
                            onChange={(e) => whatToDoTitleChange(e, index)}
                            name="whatWeDoTitle"
                            // id="whatWeDoHeader"
                          />
                          <ReactQuill
                            onChange={handleWhatWeDoDetailTextEditor.bind(this, index)}
                            value={whatWeDo?.description || ""}
                            placeholder="Enter description"
                            theme="snow"
                          />
                          <Dropzone
                            maxFiles="1"
                            multiple={false}
                            initialFiles={whatWeDoImages[index]?[whatWeDoImages[index]]:[]}
                            onChangeStatus={handleWhatWeDoImagesUpload.bind(
                              this,
                              index
                            )}
                            accept="image/*"
                          />
                          <div style={{ display: "flex" }}>
                            <Button
                              variant="contained"
                              color="primary"
                              type="button"
                              style={{ width: "10vw" }}
                              className={"CanceForm"}
                              onClick={deleteWhatWeDoHandler}
                            >
                              Delete
                            </Button>
                            {state.whatWeDo.length - 1 === index && (
                              <Button
                                onClick={addWhatWeDoHandler}
                                variant="contained"
                                color="primary"
                                type="submit"
                                style={{ width: "10vw" }}
                                className={"SaveData"}
                              >
                                Add
                              </Button>
                            )}
                          </div>
                        </Grid>
                      );
                    })}
                </Grid>
              </Grid>
              <Box mt={2} />
              <SubHeading heading={"How To Invest Components"} />
              <Box mt={2} />
              <Grid container spacing={3} className="FormFildes">
                <Grid className="form-group-item" item xs={12} sm={6} md={4}>
                  <TextValidator
                    className="form-control-item"
                    variant="outlined"
                    label="How To Invest Title*"
                    fullWidth
                    value={state.howToInvestTitle}
                    onChange={inputChange}
                    name="howToInvestTitle"
                    id="howToInvestTitle"
                  />
                </Grid>
              </Grid>
              <Grid
                className="form-group-item"
                item
                xs={12}
                style={{ padding: "15px" }}
              >
                <div className="card-header d-flex justify-content-between align-items-center">
                  <Typography component="h4" variant="h4">
                    How To Invest Details
                  </Typography>
                </div>

                <Grid className="form-group-item" item xs={12} sm={12} md={12}>
                  {state.howToInvest &&
                    state.howToInvest.length > 0 &&
                    state.howToInvest.map((howToInvest, index) => {
                      debugger
                      return (
                        <Grid
                          className="form-group-item"
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <TextValidator
                            className="form-control-item"
                            variant="outlined"
                            style={{ marginTop: "15px" }}
                            label="Title*"
                            fullWidth
                            value={howToInvest?.title || ""}
                            onChange={(e) => howToInvestTitleChange(e, index)}
                            name="howToInvestDetailTitle"
                            // id="howToInvestTitle"
                          />
                          <ReactQuill
                            // onChange={handleHowToInvestTextEditor}
                            onChange={
                              handleHowToInvestTextEditor.bind(this, index)
                            }
                            value={howToInvest?.description || ""}
                            placeholder="Enter description"
                            theme="snow"
                          />
                          <Dropzone
                            maxFiles="1"
                            multiple={false}
                            initialFiles={howToInvestImages[index]>0?[howToInvestImages[index]]:[]}
                            onChangeStatus={handleHowToInvestImagesUpload.bind(
                              this,
                              index
                            )}
                            accept="image/*"
                          />
                          {/* <div style={{ display: "flex" }}>
                            <Button
                              variant="contained"
                              color="primary"
                              type="button"
                              style={{ width: "10vw" }}
                              className={"CanceForm"}
                              onClick={deleteHowToInvestHandler}
                            >
                              Delete
                            </Button>
                            {state.howToInvest.length - 1 === index && (
                              <Button
                                onClick={addHowToInvestHandler}
                                variant="contained"
                                color="primary"
                                type="submit"
                                style={{ width: "10vw" }}
                                className={"SaveData"}
                              >
                                Add
                              </Button>
                            )}
                          </div> */}
                        </Grid>
                      );
                    })}
                </Grid>

                {/* 
                <Grid className="form-group-item" item xs={12} sm={12} md={12}>
                  {state?.shortDescription && (
                    <ReactQuill
                      onChange={handleChangeTextEditor}
                      value={state?.shortDescription || ""}
                      placeholder="Enter description"
                      theme="snow"
                    />
                  )}
                </Grid> */}
              </Grid>

              <br />
              {/* <Grid container spacing={3} className="FormFildes">
              </Grid> */}
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
