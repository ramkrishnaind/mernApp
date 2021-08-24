import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  Select,
  Box,
  Link,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import _ from "lodash";
import classes from "./makeStyles";
import FieldsContainer from "./components/fields-container";
import Detail from "./components/details";
import { ValidatorForm } from "react-material-ui-form-validator";
import * as PropertyAction from "../../redux/actions/PropertyAction";
import { useDispatch } from "react-redux";
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";
import "./propertyManagement.css";
import SubHeading from "../../common/SubHeadingBox";
import { connect } from "react-redux";
import { Link as RouterLink, useLocation } from "react-router-dom";
import propertyTypeOptions from "../../utils/property-type-options.json";
import PropertyOptionManager from "./utils/PropertyOptionManager";
import APP_CONSTANTS from "../../utils/constant";
import Option from "./components/option";
import Transaction from "./components/transaction";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

const personal_details_options = ["Owner", "Agent", "Builder"];
const property_details_options = ["Sale", "Rent/Lease"];

const PropertyCreateUpdate = (props) => {
  // store data
  const dispatch = useDispatch();
  //   state
  const [, setRefresh] = useState(false);
  const [, setIsOwner] = React.useState(false);
  const [propertyOptions, setPropertyOptions] = React.useState([]);
  const [formFields, setFormFields] = React.useState(null);
  const [propertyFeatures] = React.useState({});
  const [currentAreaField, setCurrentAreaField] = React.useState({});
  const [areaUnit] = React.useState("");

  let propertyData = props?.property?.propertyData;
  let query = useQuery();
  let id = query.get("id");

  const initialState = {
    name: propertyData?.name,
    description: propertyData?.description,
    id: id,
    status: true,
  };

  const imageState = {
    exteriorView: [],
    livingRoom: [],
    badrooms: [],
    bathrooms: [],
    kitchen: [],
    floorPlan: [],
    masterPlan: [],
    locationMap: [],
    other: [],
  };
  const [state, setState] = useState(initialState);
  const [amenities, setAmenities] = useState([{ amenities: "" }]);
  const [propertyDetail, setPropertyDetail] = useState([
    { key: "", Value: "" },
  ]);
  const [file, setFile] = useState("");

  const [image, setImageState] = useState(imageState);

  // Life cycle hooks
  useEffect(() => {
    let data = {
      _id: id,
    };
    if (id != null) {
      dispatch(PropertyAction.PropertyDataRequestAsync(data));
    }
  }, []);

  useEffect(() => {
    if (props.property.success) {
      setRefresh(true);
      setState(initialState);
    }
  }, [props.property.success]);

  useEffect(() => {
    if (state["pType"]) {
      const formData = PropertyOptionManager.getFormFieldsBySelectedPropertyType(
        state["pType"]
      );
      setFormFields(formData);
    }
  }, [state]);

  useEffect(() => {
    console.log("-Form-Data-State-", image);
    // console.log("-Form-Data-State-", state);

    // console.log("-Form-amenities-State-", amenities);
    // console.log("-Property-Features-", propertyDetail);
  }, [state, propertyFeatures]);

  // Extra methods
  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name.replace(/[^a-zA-Z]/gi, "_");
    setState({
      ...state,
      [name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const onOptionPropertyForSelectListener = (option) => {
    const clonePropertyTypeOptions = _.cloneDeep(propertyTypeOptions);
    if (option === "Sale") {
      clonePropertyTypeOptions.splice(1, 1);
    } else if (option === "Rent/Lease") {
      clonePropertyTypeOptions.splice(0, 1);
    }
    setPropertyOptions(clonePropertyTypeOptions[0]);

    setState({ ...state, ["for"]: option });
  };

  const onOptionSelectListener = (option) => {
    console.log("-Personal-Info- Option-", option);
    if (option === "Owner") {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
    setState({ ...state, ["iAm"]: option });
  };

  const onFeatureSelect = (feature) => {
    let name = feature.label.replace(/[^a-zA-Z]/gi, "_");
    console.log("-FEATURE--", feature);
    setState({
      ...state,
      [name]: feature.item,
    });
  };

  const onAreaFieldSelect = (e) => {
    e.preventDefault();
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setCurrentAreaField({ fieldName, fieldValue });
  };

  const handleAreaUnitChange = (event) => {
    event.preventDefault();
    const fieldUnit = event.target.value;
    const { fieldName, fieldValue } = currentAreaField;
    let name = fieldName.replace(/[^a-zA-Z]/gi, "_");
    setState({
      ...state,
      [name]: {
        size: fieldValue,
        unit: fieldUnit,
      },
    });
  };

  const onTransactionOptionSelectListener = (data) => {
    let name = data.title.replace(/[^a-zA-Z]/gi, "_");
    setState({
      ...state,
      [name]: data.value,
    });
  };
  const handleSubmit = () => {
    let reqData = {
      iAm: state.iAm,
      for: state.for,
      pType: state.pType,
      postingAs: state.postingAs,
      nameOfProject: state.nameOfProject,
      bedrooms: state.Bedrooms,
      balconies: state.Balconies,
      floorNo: state.Floor_No_,
      totalFloors: state.Total_Floors,
      furnishedStatus: state.Furnished_Status,
      bathrooms: state.Bathrooms,
      superArea: state.Super_Area?.size,
      builtUpArea: state.Built_up_Area?.size,
      carpetArea: state.Carpet_Area?.size,

      possessionStatus: state.Possession_Status,
      availableFromMonth: state.available_from_month,
      availableFromYear: state.available_from_year,

      expectedPrice: state.expected_price,
      pricePerSqFt: state.expected_price_per_sq_ft,

      // isPLCIncluded: state.price_includes_plc,
      // isCarParkingIncluded: state.price_includes_car_parking,
      // isClubMemberShipIncluded: state.price_includes_club_membership,
      otherCharges: state.other_charges,
      isStumpDutyRCExcluded: state.stamp_duty_registration_charges_excluded,
      bookingAmount: state.booking_token_amount,
      maintenanceCharge: state.maintenance_charges,
      maintenanceFor: state.maintenance_charges_per,
      brokerageCharge: state.brokerage,

      // propertyType:state.Property_Type,
      // heating:state.Heating,
      // garage:state.garage,
      // buildYear:state.build_year,

      // basketballCourt: state.basketball_court,
      // airConditioned: state.air_conditioned,
      // swimmingPool:state.swimming_pool,
      // noSmokingZone:state.no_smoking_zone,
      // gym:state.gym,
      // petFriendly:state.pet_friendly,

      // freeParkingonPremises:state.free_parking_on_premises,
      // wheelchairFriendly:state.wheelchair_friendly,
      // homeTheater:state.home_theater,
      // pCity: state.pCity,
      // location:state.location,
      amenities: amenities,
      longitude: state.longitude,
      latitude: state.latitude,
      address: state.address,
      city: state.city,
      State: state.State,
      pinCode: state.pinCode,
      propertTag: state.Transaction_Type,
      propertyDetails: propertyDetail,
    };

    var data = new FormData();
    data.append('image', image);
    data.append('mainImage',state.mainImage);
    data.append('propertyId', '611a296df7df552ad49faa65');

    // let imageData = {
    //   image: image,
    //   mainImage: state.mainImage,
    //   propertyId:'611a296df7df552ad49faa65',
    // };

    dispatch(PropertyAction.PropertyAddRequestAsync(reqData, data));
  };

  // Render methods

  /**
   *
   * @param {*} section - OwnerBlock
   */
  // const _renderOwnerBlock = () => {
  //   return (
  //     <Grid container>
  //       <Grid item xs={12} md={12} className={classes.style1}>
  //         <TextField
  //           label="Name"
  //           variant="outlined"
  //           style={{ width: "100%" }}
  //           name="owner_name"
  //           onChange={handleChange}
  //         ></TextField>
  //         <Box mt={2} />
  //         <Grid container>
  //           <Grid item xs={4} md={4} className={classes.style2}>
  //             <Select
  //               native
  //               variant="outlined"
  //               value={state["country_code"]}
  //               onChange={handleChange}
  //               inputProps={{ name: "country_code" }}
  //               style={{ height: 55, marginRight: 5 }}
  //             >
  //               <option value={10}>IND +91</option>
  //               <option value={20}>PAK +92</option>
  //             </Select>
  //           </Grid>
  //           <Grid item xs={8} md={8} className={classes.style2}>
  //             <TextField
  //               label="Mobile"
  //               variant="outlined"
  //               // style={{ width: "17.5%" }}
  //               name="mobile_number"
  //               onChange={handleChange}
  //             ></TextField>
  //           </Grid>
  //         </Grid>
  //         <Box mt={2} />
  //         <TextField
  //           label="Email"
  //           variant="outlined"
  //           style={{ width: "100%" }}
  //           onChange={handleChange}
  //           name="owner_email"
  //         ></TextField>
  //       </Grid>
  //     </Grid>
  //   );
  // };

  /**
   *
   * @param {*} section - FeaturesSection
   */
  const _renderFeaturesSection = (section, sectionIndex) => {
    const { fields, section: sectionName } = section || {};
    return (
      <FieldsContainer label={sectionName} key={sectionIndex}>
        <Grid container>
          {fields?.length > 0 &&
            fields?.map((field, fieldIndex) => {
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
                  <Grid item xs={12} md={12} key={fieldIndex}>
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
                      variant="outlined"
                      value={state["pType"]}
                      onChange={handleChange}
                      inputProps={{ name: "pType" }}
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
                      variant="outlined"
                      placeholder={field.placeholder}
                      fullWidth
                      style={{ marginTop: 15 }}
                    />
                    <Typography className={classes.text3}>{unit}</Typography>
                  </Grid>
                );
              }
            })}
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
              label="Garage"
              name="garage"
              variant="outlined"
              placeholder="Garage"
              fullWidth
              style={{ marginTop: 15 }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </FieldsContainer>
    );
  };

  /**
   *
   * @param {*} section - AreaSection
   */
  const _renderAreaSection = (section) => {
    // console.log('--SECTION AREA--', section);
    const { fields, section: sectionName } = section || {};
    return (
      <FieldsContainer label={sectionName}>
        <Grid container>
          {fields?.length > 0 &&
            fields?.map((field, index) => {
              const { label, type, units, placeholder } = field || {};
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
                      style={{ width: 400, marginRight: 15, marginBottom: 15 }}
                      name={label}
                      variant="outlined"
                      onChange={onAreaFieldSelect}
                    />
                    {units && (
                      <Select
                        native
                        variant="outlined"
                        value={areaUnit["area-unit"]}
                        onChange={handleAreaUnitChange}
                        inputProps={{
                          name: "area-unit",
                        }}
                        style={{ height: 55, marginTop: -15, maxHeight: 200 }}
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
   * @param {*} section - TransactionSection
   */
  const _renderTransactionSection = (section) => {
    // console.log("--SECTION TRANSACTION--", section);
    const { fields, section: sectionName } = section || {};
    return (
      <FieldsContainer label={sectionName}>
        <Grid container>
          {fields?.map((field, index) => {
            const { label, type, values, fieldName, placeholder, data } =
              field || {};
            if (type === "radio") {
              return (
                <Grid
                  item
                  xs={12}
                  md={12}
                  style={{ display: "flex", flexDirection: "column" }}
                  key={index}
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
                <Grid item xs={12} md={12} key={index}>
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
                            variant="outlined"
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
                              return d.fieldName === "available_from_month" ? (
                                <option key={index} value={index + 1}>
                                  {item}
                                </option>
                              ) : (
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
            } else if (type === "textfield") {
              return (
                <Grid item xs={12} md={12}>
                  <Box mt={2} />
                  <TextField
                    label={label}
                    variant="outlined"
                    placeholder={placeholder}
                    onChange={handleChange}
                    style={{ width: 300, marginBottom: 15 }}
                    name={fieldName}
                  />
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
   * @param {*} section - PriceSection
   */
  const _renderPriceSection = (section) => {
    // console.log("SECTION PRICE--", section);
    const { fields, section: sectionName } = section || {};
    return (
      <FieldsContainer label={sectionName}>
        <Grid container>
          {fields?.map((field) => {
            const { label, type, values, placeholder, data, fieldName } =
              field || {};
            if (type === "textfield" && data) {
              return data.map((e, index) => {
                return (
                  <Grid item xs={12} md={3} key={index}>
                    <TextField
                      label={e.label}
                      variant="outlined"
                      placeholder={e.placeholder}
                      onChange={handleChange}
                      name={e.fieldName}
                    />
                  </Grid>
                );
              });
            } else if (type === "textfield") {
              return (
                <Grid item xs={12} md={12}>
                  <TextField
                    label={label}
                    variant="outlined"
                    placeholder={placeholder}
                    onChange={handleChange}
                    style={{ width: 300, marginBottom: 15 }}
                    name={fieldName}
                  />
                </Grid>
              );
            } else if (type === "text-dropdown" && field.data) {
              return field?.data?.map((e, i) => {
                if (e.type === "textfield") {
                  return (
                    <Grid item xs={12} md={4} key={i}>
                      <TextField
                        label={e.label}
                        variant="outlined"
                        name={e.fieldName}
                        onChange={handleChange}
                        placeholder={e.placeholder}
                        style={{ width: 300, marginBottom: 15 }}
                      />
                    </Grid>
                  );
                } else if (e.type === "dropdown") {
                  return (
                    <Grid item xs={12} md={4} key={i}>
                      <Typography className={classes.text3}>
                        {e.label}
                      </Typography>
                      <Select
                        native
                        variant="outlined"
                        value={state[e.fieldName]}
                        onChange={handleChange}
                        inputProps={{
                          name: e.fieldName,
                        }}
                        style={{
                          height: 55,
                          marginRight: 5,
                          maxHeight: 200,
                          width: 200,
                        }}
                      >
                        <option value={null}>Select Option</option>
                        {e?.values?.length > 0 &&
                          e?.values?.map((item, index) => {
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
                  <Typography className={classes.text3}>{label}</Typography>
                  <Select
                    native
                    value={state[fieldName]}
                    onChange={handleChange}
                    name={fieldName}
                    variant="outlined"
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
                    <option value={null}>Select Option</option>
                    {values?.length > 0 &&
                      values?.map((item, index) => {
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
                  <Typography style={{ marginRight: 10 }}>{label}</Typography>
                  <FormGroup row>
                    {field?.fields?.length > 0 &&
                      field?.fields?.map((e, index) => {
                        return (
                          <FormControlLabel
                            key={index}
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

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const handleRemoveAmenitiesClick = (index) => {
    const list = [...amenities];
    list.splice(index, 1);
    setAmenities(list);
  };
  const handleAminitiesInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...amenities];
    list[index] = value;
    setAmenities(list);
  };

  // handle click event of the Add button
  const handleAddAminitiesClick = () => {
    setAmenities([...amenities, { amenities: "" }]);
  };

  // handle input change
  const handleDetailChange = (e, index) => {
    const { name, value } = e.target;
    // if(name == 'key'){
    //   const arr = e.target.value.split(" ");
    //   for (var i = 0; i < arr.length; i++) {
    //       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    //   }
    //   keydata = arr.join("");
    // }

    const list = [...propertyDetail];
    // if(name=='key'){
    //   console.log('key',keydata);
    //   list[index][name] = keydata;
    // }else{
    list[index][name] = value;
    // }
    setPropertyDetail(list);
  };

  // handle click event of the Remove button
  const handleDetailRemoveClick = (index) => {
    const list = [...propertyDetail];
    list.splice(index, 1);
    setPropertyDetail(list);
  };

  // handle click event of the Add button
  const handleDetailAddClick = () => {
    setPropertyDetail([...propertyDetail, { key: "", Value: "" }]);
  };

  const handleMainImageChange = (event) => {
    // this.setState({
    setState({ ...state, ["mainImage"]: event.target.files[0] });
    setFile(URL.createObjectURL(event.target.files[0]));

    // })
  };
  //dropzone states
  const handleImageExteriorView = (file, status) => {
    let list = image;
    let data = [];
    if (status == "done") {
      if (list.exteriorView && list.exteriorView.length) {
        data = list.exteriorView;
        data[list.exteriorView.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["exteriorView"]: data });
    }
  };

  const handleImageLivingRoom = (file, status) => {
    let list = image;
    let data = [];
    if (status == "done") {
      if (list.livingRoom && list.livingRoom.length) {
        data = list.livingRoom;
        data[list.livingRoom.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["livingRoom"]: data });
    }
  };

  const handleImageBadrooms = (file, status) => {
    let list = image;
    let data = [];
    if (status == "done") {
      if (list.badrooms && list.badrooms.length) {
        data = list.badrooms;
        data[list.badrooms.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["badrooms"]: data });
    }
  };

  const handleImageBathrooms = (file, status) => {
    let list = image;
    let data = [];
    if (status == "done") {
      if (list.bathrooms && list.bathrooms.length) {
        data = list.bathrooms;
        data[list.bathrooms.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["bathrooms"]: data });
    }
  };

  const handleImageKitchen = (file, status) => {
    let list = image;
    let data = [];
    if (status == "done") {
      if (list.kitchen && list.kitchen.length) {
        data = list.kitchen;
        data[list.kitchen.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["kitchen"]: data });
    }
  };

  const handleImageFloorPlan = (file, status) => {
    let list = image;
    let data = [];
    if (status == "done") {
      if (list.floorPlan && list.floorPlan.length) {
        data = list.floorPlan;
        data[list.floorPlan.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["floorPlan"]: data });
    }
  };

  const handleImageMasterPlan = (file, status) => {
    let list = image;
    let data = [];
    if (status == "done") {
      if (list.masterPlan && list.masterPlan.length) {
        data = list.masterPlan;
        data[list.masterPlan.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["masterPlan"]: data });
    }
  };

  const handleImageLocationMap = (file, status) => {
    let list = image;
    let data = [];
    if (status == "done") {
      if (list.locationMap && list.locationMap.length) {
        data = list.locationMap;
        data[list.locationMap.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["locationMap"]: data });
    }
  };

  const handleImageOther = (file, status) => {
    let list = image;
    let data = [];
    if (status == "done") {
      if (list.other && list.other.length) {
        data = list.other;
        data[list.other.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["other"]: data });
    }
  };

  return (
    <Box className="PropertyManagement_Data">
      <FormHeader
        heading1={"Property Module Management"}
        heading2={"Create and Update Property Here"}
      />
      {state?.id ? (
        <>
          <BreadCrumbs
            heading1={"PropertyManagement"}
            heading2={"Edit Property Module"}
          />
          <SubHeading heading={"Edit Property Module"} />
        </>
      ) : (
        <>
          <BreadCrumbs
            heading1={"PropertyManagement"}
            heading2={"Add Property Module"}
          />
          <SubHeading heading={"Add Property Module"} />
        </>
      )}
      <Grid item xs={12} className="m-5 addUserFormanage">
        <div className="card w-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <Typography component="h3" variant="h3">
              {state?.id ? "Edit" : "Add"} Property
            </Typography>
          </div>
          <div className="card-body">
            <ValidatorForm onSubmit={handleSubmit}>
              <Grid container spacing={3} className="FormFildes">
                <Grid item xs={12} sm={6} md={4}>
                  <FieldsContainer label="Personal Details">
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Detail
                          title="I am"
                          options={personal_details_options}
                          onOptionSelectListener={onOptionSelectListener}
                        />
                      </Grid>
                      {/* {isOwner && (
                        <Grid item xs={12} md={12}>
                          {_renderOwnerBlock()}
                        </Grid>
                      )} */}
                    </Grid>
                  </FieldsContainer>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FieldsContainer label="Property Details">
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Detail
                          title="For"
                          options={property_details_options}
                          onOptionSelectListener={
                            onOptionPropertyForSelectListener
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Select
                          native
                          variant="outlined"
                          value={state["pType"]}
                          onChange={handleChange}
                          inputProps={{
                            name: "pType",
                            id: "pType",
                          }}
                          style={{
                            height: 48,
                            marginRight: 5,
                            maxHeight: 200,
                            width: "100%",
                          }}
                        >
                          <option value={null}>Select Property Type</option>

                          {propertyOptions?.items?.length > 0 &&
                            propertyOptions?.items?.map((item, index) => {
                              return (
                                <option key={index} value={item.name}>
                                  {item.name}
                                </option>
                              );
                            })}
                        </Select>
                      </Grid>
                    </Grid>

                    <Box mt={2} />
                    {propertyDetail.map((x, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item xs={12} md={8}>
                              <TextField
                                label="Key"
                                variant="outlined"
                                placeholder="Enter Key"
                                style={{ width: "100%" }}
                                onChange={(e) => handleDetailChange(e, i)}
                                name="key"
                                value={x.key}
                              ></TextField>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <TextField
                                label="Value"
                                variant="outlined"
                                placeholder="Enter Value"
                                style={{ width: "100%" }}
                                onChange={(e) => handleDetailChange(e, i)}
                                name="Value"
                                value={x.Value}
                              ></TextField>
                            </Grid>
                            <div className="RemoveBtn">
                              {propertyDetail.length !== 1 && (
                                <Button
                                  variant="contained"
                                  type="button"
                                  color="primary"
                                  className={"CanceForm"}
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
                  <FieldsContainer label="Property Location">
                    <Grid container>
                      <Grid item xs={12} md={12} className={classes.style1}>
                        <TextField
                          label="Longitude"
                          variant="outlined"
                          placeholder="Enter Longitude"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="longitude"
                        ></TextField>

                        <Box mt={2} />
                        <TextField
                          label="Latitude"
                          variant="outlined"
                          placeholder="Enter Latitude"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="latitude"
                        ></TextField>

                        <Box mt={2} />
                        <TextField
                          label="Address"
                          variant="outlined"
                          placeholder="Enter Address"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="address"
                        ></TextField>
                        <Box mt={2} />
                        <TextField
                          label="City"
                          variant="outlined"
                          placeholder="Enter City"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="city"
                        ></TextField>

                        <Box mt={2} />
                        <TextField
                          label="State"
                          variant="outlined"
                          placeholder="Enter State"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="State"
                        ></TextField>

                        <Box mt={2} />
                        <TextField
                          label="PinCode"
                          variant="outlined"
                          placeholder="Enter PinCode"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="pinCode"
                        ></TextField>
                      </Grid>
                    </Grid>
                  </FieldsContainer>
                </Grid>

                <Grid item xs={12} md={12}>
                  <FieldsContainer label="Project Name">
                    <Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          label="Project Name"
                          variant="outlined"
                          placeholder="Enter Project Name"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="nameOfProject"
                        ></TextField>
                        <Box mt={2} />
                      </Grid>
                    </Grid>

                    <Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          label="Posting As"
                          variant="outlined"
                          placeholder="Enter Posting As"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="postingAs"
                        ></TextField>
                        <Box mt={2} />
                      </Grid>
                    </Grid>

                    <FieldsContainer label="Property Amenities">
                      {amenities.map((x, i) => {
                        return (
                          <Grid item xs={12} md={4}>
                            <TextField
                              label="Amenities"
                              variant="outlined"
                              placeholder="Enter Amenities"
                              style={{ width: "100%" }}
                              onChange={(e) => handleAminitiesInputChange(e, i)}
                              name="amenities"
                              value={x.lastName}
                            ></TextField>
                            <div className="RemoveBtn">
                              {amenities.length !== 1 && (
                                <Button
                                  variant="contained"
                                  type="button"
                                  color="primary"
                                  className={"CanceForm"}
                                  onClick={() => handleRemoveAmenitiesClick(i)}
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
                                  Add
                                </Button>
                              )}
                            </div>
                          </Grid>
                        );
                      })}
                    </FieldsContainer>
                  </FieldsContainer>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <FieldsContainer label="Property Image">
                    <Grid container>
                      <Grid item xs={12} sm={6} md={4}>
                        <img src={file} height="200px" width="200px" />
                        <Box>
                          <br />
                          <label className="uploadbutton" htmlFor="mainImage">
                            <Button
                              color="default"
                              variant="contained"
                              component="span"
                              color="primary"
                            >
                              Browse main Image
                            </Button>
                          </label>
                          <input
                            style={{ display: "none" }}
                            id="mainImage"
                            name="mainImage"
                            type="file"
                            onChange={handleMainImageChange}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={8}>
                        <Typography variant="subtitle1" gutterBottom>
                          Exterior View
                        </Typography>
                        <Dropzone
                          onChangeStatus={handleImageExteriorView}
                          accept="image/*,audio/*,video/*"
                        />
                      </Grid>
                    </Grid>
                  </FieldsContainer>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                      Living Room
                      </Typography>
                      <Dropzone
                        onChangeStatus={handleImageLivingRoom}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                      Badrooms
                      </Typography>
                      <Dropzone
                        onChangeStatus={handleImageBadrooms}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Bathrooms
                      </Typography>
                      <Dropzone
                        onChangeStatus={handleImageBathrooms}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Kitchen
                      </Typography>
                      <Dropzone
                        onChangeStatus={handleImageKitchen}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid>
                  </Grid>
                </Grid>


                <Grid item xs={12} sm={12}>
                  <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                      Floor Plan
                      </Typography>
                      <Dropzone
                        onChangeStatus={handleImageFloorPlan}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Exterior View
                      </Typography>
                      <Dropzone
                        onChangeStatus={handleImageExteriorView}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid>
                  </Grid>
                </Grid>


                <Grid item xs={12} sm={12}>
                  <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Exterior View
                      </Typography>
                      <Dropzone
                        onChangeStatus={handleImageExteriorView}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Exterior View
                      </Typography>
                      <Dropzone
                        onChangeStatus={handleImageExteriorView}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid>
                  </Grid>
                </Grid>


                <Grid item xs={12} md={12}>
                  <Grid container>
                    {_.size(formFields) > 0 &&
                      formFields?.sections?.map((section, sectionIndex) => {
                        switch (section?.section_id) {
                          case APP_CONSTANTS.section_features:
                            return _renderFeaturesSection(
                              section,
                              sectionIndex
                            );
                          case APP_CONSTANTS.section_area:
                            return _renderAreaSection(section, sectionIndex);
                          case APP_CONSTANTS.section_transaction:
                            return _renderTransactionSection(
                              section,
                              sectionIndex
                            );
                          case APP_CONSTANTS.section_price:
                            return _renderPriceSection(section, sectionIndex);
                        }
                      })}
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Box className="footer">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={"SaveData"}
                >
                  Save
                </Button>
                <Link component={RouterLink} to="/property">
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
  const { property } = state;
  return {
    property,
  };
}
export default connect(mapStateToProps)(PropertyCreateUpdate);
