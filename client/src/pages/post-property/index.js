import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  TextField,
  Select,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Box,
  Radio,
  RadioGroup,

} from "@material-ui/core";
import "./post-property.css";
import FieldsContainer from "./components/fields-container";
import Detail from "./components/details";
import propertyTypeOptions from "../../utils/property-type-options.json";
import Option from "./components/option";
import PropertyOptionManager from "./utils/PropertyOptionManager";
import Transaction from "./components/transaction";
import APP_CONSTANTS from "../../utils/constants";
import {useDispatch} from 'react-redux';
import * as PropertyAction from "../../redux/actions/PropertyAction";
import HorizontalLinearStepper from './stepper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  text1: {
    fontFamily: '"Open Sans"',
    color: "#303030",
    fontSize: 28,
    marginTop: 10,
    marginBottom: 10,
  },
  text3: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#666666",
    fontSize: 14,
  },
  text4: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#333333",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text5: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#FF7601",
    fontSize: 20,
    fontWeight: "bold",
  },
  text6: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#888888",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 1.8,
  },
  text7: {
    fontFamily: '"Open Sans",sans-serif',
    color: "#333333",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 10,
  },
  icon: {
    color: "#FF7601",
    fontSize: 20,
    paddingRight: 10,
  },
  style1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  btn1: {
    borderRadius: 8,
    color: "#FFFFFF",
    textTransform: "none",
    fontFamily: '"Open Sans",sans-serif',
    backgroundColor: "#FF7601",
  },
  btn2: {
    borderRadius: 15,
    color: "#FFFFFF",
    textTransform: "none",
    marginRight: 10,
    fontFamily: '"Open Sans",sans-serif',
  },
  style2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  style3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  box1: {
    width: 10,
    paddingRight: 5,
    paddingLeft: 5,
    color: "#333333",
  },
}));

const personal_details_options = ["Owner", "Agent", "Builder"];
const property_details_options = ["Sell", "Rent"];

const PostPropertyPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [isOwner, setIsOnwer] = React.useState(false);
  const [step, setStep] = React.useState(true);
  const [state, setState] = React.useState({});
  const [file, setFile] = React.useState({});
  const [propertyFor, setPropertyFor] = React.useState("");
  const [propertyOptions, setPropertyOptions] = React.useState(
    propertyTypeOptions[0]
  );
  const [proeprtyForCurrentIndex, setPropertyForCurrentIndex] =
    React.useState(0);
  const [formFields, setFormFields] = React.useState(null);
  const [areaUnit, setAreaUnit] = React.useState("");
  const [isResidentialHoueBuiltOnCorner, setIsResidentialHoueBuiltOnCorner] =
    React.useState(false);
  const [propertyFeatures, setSectionFeatures] = React.useState({});
  const [currentAreaField, setCurrentAreaField] = React.useState({});

  // stepper items
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = ['Basic Details', 'Property Details', 'Upload Files'];
  const [propertyDetail, setPropertyDetail] = useState([
    {key: "", Value: ""},
  ]);
  const [amenities, setAmenities] = useState([{0: ""}]);



  const isStepOptional = (step) => {
    // return step === 1;
    return false;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {


    if (activeStep === 1) {
      // Submit Form Detials
      submitData();
    }

    if (activeStep === 2) {
      // Submit Image
      submitFile();
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onOptionSelectListener = (option) => {
    console.log("-Personal-Info- Option-", option);
    if (option === "Owner") {
      setIsOnwer(true);
    } else {
      setIsOnwer(false);
    }
  };

  const onOptionPropertyForSelectListener = (option) => {
    console.log("-PropertyFor-- Option-", option);
    if (option === "Sell") {
      setPropertyForCurrentIndex(0);
    } else if (option === "Rent") {
      setPropertyForCurrentIndex(1);
    }
    setPropertyFor(option);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    console.log("-HandleChange-", event);
    setState({
      ...state,
      [name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const handleimage = (event) => {
    event.preventDefault();
    console.log("-HandleChange-", event);
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setFile({'exteriorView': URL.createObjectURL(img), 'productId': 1});
    }
  };

  const handleAreaUnitChange = (event) => {
    event.preventDefault();
    const fieldUnit = event.target.value;
    console.log("--currentAreaField--", currentAreaField);
    setState({
      ...state,
      [currentAreaField.fieldName]: {
        size: currentAreaField.fieldValue,
        unit: fieldUnit,
      },
    });
  };

  const onFeatureSelect = (feature) => {
    console.log("-FEATURE--", feature);
    setSectionFeatures({
      ...propertyFeatures,
      [feature.label]: feature.item,
    });
  };

  const onAreaFieldSelect = (e) => {
    e.preventDefault();
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setCurrentAreaField({fieldName, fieldValue});
  };

  const handleCheckboxStateChange = (event) => {
    setIsResidentialHoueBuiltOnCorner(event.target.checked);
  };
  const _getPropertyTypeOptions = () => {
    const options = propertyTypeOptions[proeprtyForCurrentIndex];
    setPropertyOptions(options);
  };

  const onTransactionOptionSelectListener = (data) => {
    setState({
      ...state,
      [data.title]: data.value,
    });
  };

  useEffect(() => {
    _getPropertyTypeOptions();
  }, [proeprtyForCurrentIndex]);

  useEffect(() => {
    console.log("-Form-Data-State-", state);
    console.log("-Property-Features-", propertyFeatures);
  }, [state, propertyFeatures]);

  useEffect(() => {
    setState({
      ...state,
      amenities: amenities
    });
  }, [amenities]);

  useEffect(() => {
    setState({
      ...state,
      propertyDetail: propertyDetail
    });
  }, [propertyDetail]);

  const submitData = () => {
    //PostPropertyRequestAsync(state);
    dispatch(PropertyAction.AddPropertyRequestAsync(state));
    setStep(false);
  };

  const submitFile = () => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('imagetype', 'livingRoom');
    formData.append('propertyId', '61155a4f37c57504a11628ce');
    dispatch(PropertyAction.UploadPropertyImageRequestAsync(formData));
  };

  const fileUpload = (event) => {
    setFile({'exteriorView': event.target.files[0], 'productId': 1});
  };
  const _renderOwnerBlock = () => {
    if (isOwner) {
      return (
        <Grid container>
          <Grid item xs={12} md={12} className={classes.style1}>
            <TextField
              label="Name"
              style={{width: "25%"}}
              name="owner_name"
              onChange={handleChange}
            ></TextField>
            <Grid container>
              <Grid item xs={12} md={12} className={classes.style2}>
                <Select
                  native
                  value={state["country_code"]}
                  onChange={handleChange}
                  inputProps={{name: "country_code"}}
                  style={{height: 48, marginRight: 5}}
                >
                  <option value={10}>IND +91</option>
                  <option value={20}>PAK +92</option>
                </Select>
                <TextField
                  label="Mobile"
                  style={{width: "17.5%"}}
                  name="mobile_number"
                  onChange={handleChange}
                ></TextField>
              </Grid>
            </Grid>
            <TextField
              label="Email"
              style={{width: "25%"}}
              onChange={handleChange}
              name="owner_email"
            ></TextField>
          </Grid>
        </Grid>
      );
    }
    return false;
  };

  React.useEffect(() => {
    if (state["pType"]) {
      const formData =
        PropertyOptionManager.getFormFieldsBySelectedPropertyType(
          state["pType"]
        );
      setFormFields(formData);
    }
  }, [state]);

  /**
   *
   * @param {*} section - FEATURES
   */
  const _renderFeaturesSection = (section) => {
    // console.log('--SECTION FEATURES--', section);
    const {fields, section: sectionName} = section || {};
    return (
      <FieldsContainer label={sectionName}>
        <Grid container>
          {fields?.map((field, index) => {
            const {
              label,
              initial_counts,
              more_counts,
              showMore,
              type,
              values,
              unit,
            } = field || {};
            if (type === "option") {
              return (
                <Grid item xs={12} md={12} key={index}>
                  <Option
                    label={label}
                    items={initial_counts}
                    moreOptions={more_counts}
                    showMore={showMore}
                    onSelect={onFeatureSelect}
                  ></Option>
                </Grid>
              );
            } else if (type === "dropdown") {
              return (
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    marginTop: 10,
                  }}
                >
                  <Typography className={classes.text3}>{label}</Typography>
                  <Select
                    native
                    value={state["pType"]}
                    onChange={handleChange}
                    inputProps={{name: "pType"}}
                    style={{
                      height: 48,
                      marginRight: 5,
                      maxHeight: 200,
                      width: 200,
                    }}
                  >
                    {values.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </Select>
                </Grid>
              );
            } else if (type === "textfield") {
              return (
                <Grid
                  item
                  xs={12}
                  md={4}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <TextField
                    label={field?.label}
                    placeholder={field.placeholder}
                    fullWidth
                  />
                  <Typography className={classes.text3}>{unit}</Typography>
                </Grid>
              );
            }
          })}
        </Grid>
      </FieldsContainer>
    );
  };

  /**
   *
   * @param {*} section - AREA
   */
  const _renderAreaSection = (section) => {
    // console.log('--SECTION AREA--', section);
    const {fields, section: sectionName} = section || {};
    return (
      <FieldsContainer label={sectionName}>
        <Grid container>
          {fields?.map((field, index) => {
            const {
              label,
              initial_counts,
              more_counts,
              showMore,
              type,
              values,
              unit,
              units,
              placeholder,
            } = field || {};
            if (type === "textfield") {
              return (
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  key={index}
                >
                  <TextField
                    label={label}
                    placeholder={placeholder}
                    style={{width: 400}}
                    name={label}
                    onChange={onAreaFieldSelect}
                  />
                  {units && (
                    <Select
                      native
                      value={areaUnit["area-unit"]}
                      onChange={handleAreaUnitChange}
                      inputProps={{
                        name: "area-unit",
                      }}
                      style={{height: 48, marginRight: 5, maxHeight: 200}}
                    >
                      {units?.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </Select>
                  )}
                </Grid>
              );
            } else if (type === "checkbox") {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange}
                      name={label}
                    />
                  }
                  label={label}
                />
              );
            }
          })}
        </Grid>
      </FieldsContainer>
    );
  };

  /**
   *
   * @param {*} section - TRANSACTION
   */
  const _renderTransactionSection = (section) => {
    // console.log("--SECTION TRANSACTION--", section);
    const {fields, section: sectionName} = section || {};
    return (
      <FieldsContainer label={sectionName}>
        <Grid container>
          {fields?.map((field, index) => {
            const {label, type, values, unit, units, placeholder, data} =
              field || {};
            if (type === "radio") {
              return (
                <Grid
                  item
                  xs={12}
                  md={12}
                  key={index}
                  style={{display: "flex", flexDirection: "column"}}
                >
                  <Transaction
                    title={label}
                    options={values}
                    onOptionSelectListener={onTransactionOptionSelectListener}
                  />
                </Grid>
              );
            } else if (type === "dropdown") {
              return (
                <Grid item xs={12} md={12}>
                  <Grid container>
                    <Grid item xs={12} md={12}>
                      <Typography className={classes.text3}>{label}</Typography>
                    </Grid>
                    {data?.map((d) => {
                      return (
                        <Grid item xs={12} md={3}>
                          <Select
                            native
                            value={state[d.fieldName]}
                            onChange={handleChange}
                            inputProps={{
                              name: d.fieldName,
                            }}
                            style={{
                              height: 48,
                              marginRight: 5,
                              maxHeight: 200,
                              width: 200,
                            }}
                          >
                            {d.values.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                          </Select>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              );
            }
          })}
        </Grid>
      </FieldsContainer>
    );
  };

  /**
   *
   * @param {*} section - PRICE
   */
  const _renderPriceSection = (section) => {
    // console.log("--SECTION PRICE--", section);
    const {fields, section: sectionName} = section || {};
    return (
      <FieldsContainer label={sectionName}>
        <Grid container>
          {fields?.map((field, index) => {
            const {
              label,
              type,
              values,
              unit,
              units,
              placeholder,
              data,
              fieldName,
            } = field || {};
            if (type === "textfield" && data) {
              return data.map((e, i) => {
                return (
                  <Grid item xs={12} md={3} key={i}>
                    <TextField
                      label={e.label}
                      placeholder={e.placeholder}
                      onChange={handleChange}
                      name={fieldName}
                    // style={{ width: 400 }}
                    />
                  </Grid>
                );
              });
            } else if (type === "textfield") {
              return (
                <Grid item xs={12} md={12}>
                  <TextField
                    label={label}
                    placeholder={placeholder}
                    onChange={handleChange}
                    style={{width: 300}}
                    name={fieldName}
                  />
                </Grid>
              );
            } else if (type === "text-dropdown" && field.data) {
              return field?.data?.map((e, i) => {
                if (e.type === "textfield") {
                  return (
                    <Grid item xs={12} md={4}>
                      <TextField
                        label={e.label}
                        name={e.fieldName}
                        onChange={handleChange}
                        placeholder={e.placeholder}
                        style={{width: 300}}
                      />
                    </Grid>
                  );
                } else if (e.type === "dropdown") {
                  return (
                    <Grid item xs={12} md={4}>
                      <Select
                        native
                        value={state[e.fieldName]}
                        onChange={handleChange}
                        inputProps={{
                          name: e.fieldName,
                        }}
                        style={{
                          height: 48,
                          marginRight: 5,
                          maxHeight: 200,
                          width: 200,
                        }}
                      >
                        {e.values.map((item, index) => {
                          return (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </Select>
                    </Grid>
                  );
                }
              });
            } else if (type === "dropdown") {
              return (
                <Grid item xs={12} md={12}>
                  <Select
                    native
                    value={state[fieldName]}
                    onChange={handleChange}
                    name={fieldName}
                    inputProps={{
                      name: fieldName,
                    }}
                    style={{
                      height: 48,
                      marginRight: 5,
                      maxHeight: 200,
                      width: 200,
                    }}
                  >
                    {values?.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </Select>
                </Grid>
              );
            } else if (type === "checkbox" && field?.fields) {
              return (
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography style={{marginRight: 10}}>{label}</Typography>
                  <FormGroup row>
                    {field?.fields?.map((e, i) => {
                      return (
                        <FormControlLabel
                          key={i}
                          control={
                            <Checkbox
                              value={state[e.fieldName]}
                              onChange={handleChange}
                              name={e.fieldName}
                            />
                          }
                          label={e.label}
                        />
                      );
                    })}
                  </FormGroup>
                </Grid>
              );
            } else if (type === "checkbox") {
              return (
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state[fieldName]}
                        value={state[fieldName]}
                        onChange={handleChange}
                        name={fieldName}
                      />
                    }
                    label={label}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
      </FieldsContainer>
    );
  };

  // handle input change
  const handleDetailChange = (e, index) => {
    const {name, value} = e.target;
    // if(name == 'key'){
    //   const arr = e.target.value.split(" ");
    //   for (var i = 0; i < arr.length; i++) {
    //       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    //   }
    //   keydata = arr.join("");
    // }

    const list = [...propertyDetail];
    list[index][name] = value;
    setPropertyDetail(list);
  };

  const handleDetailRemoveClick = (index) => {
    const list = [...propertyDetail];
    list.splice(index, 1);
    setPropertyDetail(list);
  };

  const handleDetailAddClick = () => {
    setPropertyDetail([...propertyDetail, {key: "", Value: ""}]);
  };

  const handleRemoveAmenitiesClick = (index) => {
    const list = [...amenities];
    list.splice(index, 1);
    setAmenities(list);
  };
  const handleAminitiesInputChange = (e, index) => {
    const {value} = e.target;
    const list = [...amenities];
    list[index] = value;
    setAmenities(list);
  };

  // handle click event of the Add button
  const handleAddAminitiesClick = () => {
    setAmenities([...amenities, {amenities: ""}]);
  };

  const getStepOne = () => {
    return <Grid container>
      {/* <Grid item xs={12} md={12}>
        <Typography className={classes.text1}>
          Sell or Rent your Property
        </Typography>
      </Grid> */}

      <Grid item xs={12} md={12}>
        <FieldsContainer label="Property Details">
          <Grid container>
            <Grid item xs={12} md={12}>
              <Detail
                title="For"
                options={property_details_options}
                onOptionSelectListener={onOptionPropertyForSelectListener}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Select
                native
                value={state["pType"]}
                onChange={handleChange}
                inputProps={{
                  name: "pType",
                  id: "pType",
                }}
                style={{height: 48, marginRight: 5, maxHeight: 200}}
              >
                {propertyOptions.items.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {item.name}
                    </option>
                  );
                })}
              </Select>
            </Grid>
          </Grid>
        </FieldsContainer>
      </Grid>

      <Grid item xs={12} md={12}>
        {formFields?.sections?.map((section) => {
          switch (section?.section_id) {
            case APP_CONSTANTS.section_features:
              return _renderFeaturesSection(section);
            case APP_CONSTANTS.section_area:
              return _renderAreaSection(section);
            case APP_CONSTANTS.section_transaction:
              return _renderTransactionSection(section);
            case APP_CONSTANTS.section_price:
              return _renderPriceSection(section);
          }
        })}
      </Grid>
      {/* <Button variant="contained" onClick={submitData} color="primary">Save</Button> */}
    </Grid>;
  };

  const getStepZero = () => {
    return <Grid container>
      <Grid item xs={12} sm={6} md={4}>
        <FieldsContainer label="Personal Details ">

          <Grid item xs={12} md={11}>
            <Detail
              title="I am"
              options={personal_details_options}
              onOptionSelectListener={onOptionSelectListener}
            />
          </Grid>
          <Grid item xs={12} md={11}>
            <Select
              native
              value={state["iAm"]}
              variant="outlined"
              onChange={handleChange}
              inputProps={{
                name: "iAm",
                id: "iAm",
              }}
              fullWidth
              style={{height: 48, marginRight: 5, maxHeight: 200}}
            >
              {personal_details_options.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </Select>
          </Grid>

        </FieldsContainer>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <FieldsContainer label="Property Location">
          <Grid item xs={12} md={11} className={classes.style1}>
            <TextField
              label="City"
              placeholder="Enter City"
              variant="outlined"
              // style={{width: "25%"}}
              onChange={handleChange}
              name="pCity"
              fullWidth
            />
            <TextField
              label="Locality"
              variant="outlined"
              placeholder="Enter Locality"
              style={{marginTop: 20}}
              onChange={handleChange}
              name="property_location"
              fullWidth
            />
          </Grid>

        </FieldsContainer>
      </Grid>


      <Grid item xs={12} sm={6} md={4}>
        <FieldsContainer label="Project Name">

          <Grid item xs={12} md={11}>
            <TextField
              label="Project Name"
              variant="outlined"
              placeholder="Enter Project Name"
              // style={{width: "100%"}}
              onChange={handleChange}
              name="nameOfProject"
              fullWidth

            ></TextField>
            {/* <TextValidator
                  label="Project Name"
                  variant="outlined"
                  placeholder="Enter Project Name"
                  style={{width: "100%"}}
                  onChange={handleChange}
                  name="nameOfProject"
                  value={state.nameOfProject || ''}
                  validators={["required"]}
                  errorMessages={["nameOfProject field is required"]}
                /> */}
            <Box mt={2} />
          </Grid>


        </FieldsContainer>
      </Grid>


      <Grid item xs={12} sm={6} md={4}>
        <FieldsContainer label="Property Details">
          <Box mt={2} />
          {propertyDetail.map((x, i) => {
            return (
              <>
                <Grid container style={{marginTop: 20, marginBottom: 20}}>
                  <Grid item xs={12} md={7} >
                    <TextField
                      label="Key"
                      variant="outlined"
                      placeholder="Enter Key"
                      style={{width: "100%"}}
                      onChange={(e) => handleDetailChange(e, i)}
                      name="key"
                      value={x.key}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} md={4} >
                    <TextField
                      label="Value"
                      variant="outlined"
                      placeholder="Enter Value"
                      style={{width: "100%"}}
                      onChange={(e) => handleDetailChange(e, i)}
                      name="Value"
                      value={x.Value}
                    ></TextField>
                  </Grid>
                  <div className="RemoveBtn" style={{marginTop: 20, marginBottom: 20}}>
                    {propertyDetail.length !== 1 && (
                      <Button
                        variant="contained"
                        type="button"
                        color="primary"
                        className={"CanceForm"}
                        style={{marginRight: 20}}
                        onClick={() => handleDetailRemoveClick(i)}
                      >
                        Remove
                      </Button>
                    )}
                    {propertyDetail.length - 1 === i && (
                      <Button
                        variant="contained"
                        type="button"
                        color="primary"
                        className={"SaveData"}
                        onClick={handleDetailAddClick}
                      >
                        Add More
                      </Button>
                    )}
                  </div>
                </Grid>
              </>
            );
          })}
        </FieldsContainer>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <FieldsContainer label="Property Amenities">
          <Grid item xs={12} md={11}>
            {amenities.map((x, i) => {
              if (state.id == null) {
                return (
                  <Grid item xs={12} md={12} style={{marginTop: 20}}>
                    <TextField
                      label="Amenities"
                      variant="outlined"
                      placeholder="Enter Amenities"
                      style={{width: "100%"}}
                      onChange={(e) =>
                        handleAminitiesInputChange(e, i)
                      }
                      name="amenities"
                    // value={x}
                    ></TextField>

                    <div className="RemoveBtn" style={{marginTop: 20}}>
                      {amenities.length !== 1 && (
                        <Button
                          variant="contained"
                          type="button"
                          color="primary"
                          className={"CanceForm"}
                          style={{marginRight: 20}}
                          onClick={() =>
                            handleRemoveAmenitiesClick(i)
                          }
                        >
                          Remove
                        </Button>
                      )}
                      {amenities.length - 1 === i && (
                        <Button
                          variant="contained"
                          type="button"
                          color="primary"
                          className={"SaveData"}
                          onClick={handleAddAminitiesClick}
                        >
                          Add more
                        </Button>
                      )}
                    </div>
                  </Grid>
                );
              } else {
                return (
                  <Grid item xs={12} md={8} style={{marginTop: 20}}>
                    <TextField
                      label="Amenities"
                      variant="outlined"
                      placeholder="Enter Amenities"
                      style={{width: "100%"}}
                      onChange={(e) =>
                        handleAminitiesInputChange(e, i)
                      }
                      name="amenities"
                      value={x}
                    ></TextField>

                    <div className="RemoveBtn" style={{marginTop: 20}}>
                      {amenities.length !== 1 && (
                        <Button
                          variant="contained"
                          type="button"
                          color="primary"
                          className={"CanceForm"}
                          style={{marginRight: 20}}
                          onClick={() =>
                            handleRemoveAmenitiesClick(i)
                          }
                        >
                          Remove
                        </Button>
                      )}
                      {amenities.length - 1 === i && (
                        <Button
                          variant="contained"
                          type="button"
                          color="primary"
                          className={"SaveData"}
                          onClick={handleAddAminitiesClick}
                        >
                          Add more
                        </Button>
                      )}
                    </div>
                  </Grid>
                );
              }
            })}
          </Grid>

        </FieldsContainer>
      </Grid>
    </Grid >;
  };

  const getStepTwo = () => {
    return <Grid container>
      <Grid item xs={12} md={12}>
        <FieldsContainer label="Images">
          <Grid container>
            <Grid item xs={6} md={6}>
              <p>Upload Images</p>
            </Grid>
            <Grid item xs={6} md={6}>
              <input type="file" multiple onChange={handleimage} />
            </Grid>
          </Grid>
        </FieldsContainer>
      </Grid>
      {/* <Grid item xs={12} md={12}>
      <FieldsContainer label="Videos">
        <Grid container>
          <Grid item xs={6} md={6}>
            <p>Upload Videos</p>
          </Grid>
          <Grid item xs={6} md={6}>
            <input type="file" onChange={fileUpload} />
          </Grid>
        </Grid>
      </FieldsContainer>
    </Grid> */}
      {/* <Button variant="contained" onClick={submitFile} color="primary">Save</Button> */}
    </Grid>;
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return getStepZero();
      case 1:
        return getStepOne();
      case 2:
        return getStepTwo();
      default:
        console.log(step);
        return 'Unknown step';
    }
  };

  const getStepButtonText = (activeStep) => {

    switch (activeStep) {
      case 0:
        return 'Next';
      case 1:
        return 'Save Details';
      case 2:
        return 'Finish';
      default:
        console.log(activeStep);
        return 'Unknown step';
    }

  };

  return (
    <Container style={{marginTop: 60, marginBottom: 60}}>
      <Grid item xs={12} md={12} >
        <Typography className={classes.text1} mt={3} style={{textAlign: 'center'}}>
          Sell or Rent your Property
        </Typography>
      </Grid>
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Grid contianer style={{paddingLeft: 40}}>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              {/* <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button> */}
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{
                getStepContent(activeStep)
              }</Typography>
              <div>
                {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button> */}
                {/* {isStepOptional(activeStep) && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSkip}
                                    className={classes.button}
                                >
                                    Skip
                                </Button>
                            )} */}

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  style={{marginTop: 20}}
                  className={classes.button}
                >
                  {
                    getStepButtonText(activeStep)
                  }
                  {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
                </Button>
              </div>
            </div>
          )}
        </Grid>
      </div>
    </Container>
  );
};

export default PostPropertyPage;
