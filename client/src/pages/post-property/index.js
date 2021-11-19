import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
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
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import _ from "lodash";
import classes from "./makeStyles";
import FieldsContainer from "./components/fields-container";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import * as PropertyAction from "../../redux/actions/PropertyAction";
import { useDispatch } from "react-redux";
import FormHeader from "./components/form-header";
import BreadCrumbs from "./components/bread-crumbs";
// import "./propertyManagement.css";
import SubHeading from "./components/SubHeadingBox";
import { Link as RouterLink, useLocation } from "react-router-dom";
import propertyTypeOptions from "./utils/property-type-options.json";
import PropertyOptionManager from "./utils/PropertyOptionManager";
import APP_CONSTANTS from "./utils/constant";
import Option from "./components/option";
import Transaction from "./components/transaction";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import API_ENDPOINTS from "../../constants/api-endpoints";
import "./post-property.css";
const personal_details_options = ["Owner", "Agent", "Builder"];
const property_details_options = ["Sell", "Rent"];

const PropertyCreateUpdate = () => {
  const [pType, setPType] = useState(false);
  const [iAm, setIAm] = useState(false);
  const [For, setFor] = useState(false);

  // store data
  const property = useSelector((state) => state.property);
  const dispatch = useDispatch();
  const propertyUnitSelectRef = useRef();
  //   state
  const [refresh, setRefresh] = useState(false);
  // const [, setIsOwner] = React.useState(false);
  const [propertyOptions, setPropertyOptions] = React.useState([]);
  const [formFields, setFormFields] = React.useState(null);
  const [currentAreaField, setCurrentAreaField] = React.useState({});
  const [areaUnit] = React.useState("");

  let propertyData = property?.propertyData;
  const [description, setDescription] = useState(
    propertyData?.projectDescription
  );
  const [amenities, setAmenities] = useState([""]);
  const [propertyDetail, setPropertyDetail] = useState([
    { key: "", Value: "" },
  ]);
  const [file, setFile] = useState("");
  console.log("propertyData", propertyData);
  // useEffect(() => {
  //   if (property.success) {
  //     setRefresh(true);
  //     setState(initialState);
  //   }
  // }, [property.success]);

  // useEffect(() => {
  //   if (property.success) {
  //     setRefresh(true);
  //     setState(initialState);
  //   }
  // }, [refresh]);

  // let query = useQuery();
  // let id = query.get("id");
  // debugger
  // if (!id) propertyData = null;
  // const initialState = {
  //   iAm: "",
  //   for: "",
  //   pType: "",
  //   postingAs: "",
  //   nameOfProject: "",
  //   Bedrooms: null,
  //   Balconies: "",
  //   Floor_No_: "",
  //   Total_Floors: "",
  //   Furnished_Status: "",
  //   Bathrooms: "",
  //   Possession_Status: "",
  //   longitude: "",
  //   latitude: "",
  //   address: "",
  //   propertyDescription: "",
  //   city: "",
  //   State: "",
  //   pinCode: "",
  //   Super_Area: {
  //     size: null,
  //   },
  //   Carpet_Area: {
  //     size: "",
  //   },
  //   Built_up_Area: {
  //     size: "",
  //   },
  //   available_from_month: "1",
  //   available_from_year: "2021",
  //   gaurdRoom: "true",
  //   id: " ",
  //   status: "",
  //   Transaction_Type: "",
  //   Property_Tag: "",

  //   expected_price: "",
  //   expected_price_per_sq_ft: "",
  //   other_charges: "",
  //   stamp_duty_registration_charges_excluded: "",
  //   booking_token_amount: "",
  //   maintenance_charges: "",
  //   maintenance_charges_per: "",
  //   brokerage: "",
  //   build_year: "2005",

  //   Visitor_Room: "0",
  //   Conference_Room: "0",
  //   // Floors_Allowed_For_Construction:
  //   //   propertyData?.floorsAllowedForConstruction || "",
  //   // No_Of_Open_Sides: propertyData?.noOfOpenSides || null,
  //   // Width_Of_Road_Facing_The_Plot:
  //   //   propertyData?.widthOfRoadFacingThePlot || null,
  //   // Plot_Length: propertyData?.plotLength || null,
  //   // Plot_Breadth: propertyData?.plotBreadth || null,
  //   // This_residential_house_is_built_on_a_corner_plot:
  //   //   propertyData?.thisResidentialHouseIsBuiltOnACornerPlot || null,
  //   // response_from_brokers: propertyData?.responseFromBrokers || null,

  //   Personal_Washroom: false,
  //   No_Of_Seats: "0",
  //   Meeting_Rooms: "0",
  //   Pantry: false,
  // };
  const initialState = {
    iAm: propertyData?.iAm || "",
    for: propertyData?.for || "",
    pType: propertyData?.pType || "",
    postingAs: propertyData?.postingAs || "",
    nameOfProject: propertyData?.nameOfProject || "",
    Bedrooms: propertyData?.bedrooms || 0,
    Balconies: propertyData?.balconies || 0,
    Floor_No_: propertyData?.floorNo || 0,
    Total_Floors: propertyData?.totalFloors || 0,
    Furnished_Status: propertyData?.furnishedStatus || false,
    Bathrooms: propertyData?.bathrooms || 0,
    Possession_Status: propertyData?.possessionStatus || "",
    longitude: propertyData?.address?.longitude || "",
    latitude: propertyData?.address?.latitude || "",
    address: propertyData?.address?.address || "",
    propertyDescription:
      propertyData?.propertyDescription?.propertyDescription || "",
    city: propertyData?.address?.city || "",
    State: propertyData?.address?.State || "",
    pinCode: propertyData?.address?.pinCode || "",
    super_Area: {
      size: propertyData?.superArea || null,
    },
    carpet_Area: {
      size: propertyData?.carpetArea || "",
    },
    built_up_Area: {
      size: propertyData?.builtUpArea || "",
    },
    available_from_month: propertyData?.availableFromMonth || "1",
    available_from_year: propertyData?.availableFromYear || "2021",
    gaurdRoom: propertyData?.gaurdRoom || "true",
    id: " ",
    status: true || "",
    Transaction_Type: propertyData?.transactionType || "",
    Property_Tag: propertyData?.propertyTag || "",

    expected_price: propertyData?.price?.expectedPrice || "",
    expected_price_per_sq_ft: propertyData?.price?.pricePerSqft || "",
    other_charges: propertyData?.price?.otherCharges || "",
    stamp_duty_registration_charges_excluded:
      propertyData?.price?.isStumpDutyRCExcluded || false,
    booking_token_amount: propertyData?.price?.bookingAmount || "",
    maintenance_charges: propertyData?.price?.maintenanceCharge || "",
    maintenance_charges_per: propertyData?.price?.maintenanceFor || "",
    brokerage: propertyData?.price?.brokerage || "",
    build_year: propertyData?.buildYear || "2005",

    Visitor_Room: propertyData?.vistorRoom || "0",
    Conference_Room: propertyData?.conferenceRoom || "0",
    // Floors_Allowed_For_Construction:
    //   propertyData?.floorsAllowedForConstruction || "",
    // No_Of_Open_Sides: propertyData?.noOfOpenSides || null,
    // Width_Of_Road_Facing_The_Plot:
    //   propertyData?.widthOfRoadFacingThePlot || null,
    // Plot_Length: propertyData?.plotLength || null,
    // Plot_Breadth: propertyData?.plotBreadth || null,
    // This_residential_house_is_built_on_a_corner_plot:
    //   propertyData?.thisResidentialHouseIsBuiltOnACornerPlot || null,
    // response_from_brokers: propertyData?.responseFromBrokers || null,

    Personal_Washroom: propertyData?.personalWashroom || false,
    No_Of_Seats: propertyData?.noOfSeats || "0",
    Meeting_Rooms: propertyData?.meetingRooms || "0",
    Pantry: propertyData?.Pantry || false,
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
    roomImage: [],
    conference: [],
    visitor: [],
  };
  const [state, setState] = useState(initialState);

  const [image, setImageState] = useState(imageState);
  useEffect(() => {
    // console.log("-Form-Data-State-", state);
    let isMounted = true;
    let option = state.for;
    const clonePropertyTypeOptions = _.cloneDeep(propertyTypeOptions);
    if (option === "Sell") {
      clonePropertyTypeOptions.splice(1, 1);
    } else if (option === "Rent") {
      clonePropertyTypeOptions.splice(0, 1);
    }
    if (isMounted) setPropertyOptions(clonePropertyTypeOptions[0]);

    if (propertyData && propertyData?.amenities !== "") {
      const result = propertyData?.amenities;
      setAmenities(result);
    }
    if (propertyData && propertyData?.propertyDetails !== "") {
      const result = propertyData?.propertyDetails;
      setPropertyDetail(result);
    }

    if (state["pType"]) {
      if (isMounted) {
        const formData =
          PropertyOptionManager.getFormFieldsBySelectedPropertyType(
            state["pType"]
          );
        setFormFields(formData);
      }
    }

    // if (propertyData && propertyData?.images?.mainImage[0]?.path !== "") {
    //   setFile(
    //     API_ENDPOINTS.BASE_URL + propertyData?.images?.mainImage[0]?.path
    //   );
    // }
    // amenities
    return () => {
      isMounted = false;
    };
  }, [state, propertyData, propertyTypeOptions]);

  // useEffect(() => {
  //   setState(initialState);
  //   setImageState(imageState);
  // }, []);

  // useEffect(()=>{
  //   setState(initialState);
  //   setImageState(imageState);
  //   setPropertyOptions([[]])
  //   setFormFields(null)
  //   setPropertyDetail([
  //     { key: "", Value: "" },
  //   ])
  //   setAmenities([{ 0: "" }])
  //   setFile("")
  //   setDescription("")
  //   setCurrentAreaField({})
  //   // if (!id) propertyData = null;
  // },[id])
  // Life cycle hooks
  // useEffect(() => {
  //   let data = {
  //     propertyId: id,
  //   };
  //   if (id != null) {
  //     dispatch(PropertyAction.PropertyDataRequestAsync(data));
  //   }
  // }, [id, dispatch]);

  // Extra methods
  const handleChange = (event) => {
    // debugger;
    event.preventDefault();
    const name = event.target.name.replace(/[^a-zA-Z]/gi, "_");
    if (name === "pType") {
      setPType(!!event.target.value);
    }
    if (name === "iAm") {
      setIAm(!!event.target.value);
    }
    setState({
      ...state,
      [name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const onOptionPropertyForSelectListener = (event) => {
    let option = event.target.value;
    const clonePropertyTypeOptions = _.cloneDeep(propertyTypeOptions);
    if (option === "Sell") {
      clonePropertyTypeOptions.splice(1, 1);
    } else if (option === "Rent") {
      clonePropertyTypeOptions.splice(0, 1);
    }
    setPropertyOptions(clonePropertyTypeOptions[0]);
    setFor(!!option);

    setState({ ...state, ["for"]: option });
  };

  const onFeatureSelect = (feature) => {
    debugger

    let name = (!feature?.fieldName? feature?.label:feature?.fieldName) ?.replace(/[^a-zA-Z]/gi, "_");
    // console.log("-FEATURE--", feature);
    setState({
      ...state,
      [name]: feature.item,
    });
  };

  const onAreaFieldSelect = (e, unit) => {
    e.preventDefault();
    // debugger;
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setCurrentAreaField({ fieldName, fieldValue });
    let name = fieldName.replace(/[^a-zA-Z]/gi, "_");
    let newfieldValue = state[name.toLowerCase()];
    if (newfieldValue) newfieldValue.size = fieldValue;
    else
      newfieldValue = {
        size: fieldValue,
        unit: unit,
      };
    setState({
      ...state,
      [name.toLowerCase()]: newfieldValue,
    });
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
    const user = JSON.parse(localStorage.getItem("user"));
    let reqData = {
      iAm: state.iAm,
      for: state.for,
      pType: state.pType,
      postingAs: state.postingAs,
      nameOfProject: state.nameOfProject,
      balconies: state.Balconies||0,
      floorNo: state.Floor_No_||0,
      totalFloors: state.Total_Floors||0,
      furnishedStatus: state.Furnished_Status?state.Furnished_Status:false,
      bathrooms: state.Bathrooms||0,
      builtUpArea: state.Built_up_Area?.size,
      carpetArea: state.Carpet_Area?.size,
      possessionStatus: state.Possession_Status,
      availableFromMonth: state.available_from_month,
      availableFromYear: state.available_from_year,
      expectedPrice: state.expected_price,
      pricePerSqFt: state.expected_price_per_sq_ft,
      otherCharges: state.other_charges,
      isStumpDutyRCExcluded: state.stamp_duty_registration_charges_excluded||false,
      bookingAmount: state.booking_token_amount,
      maintenanceCharge: state.maintenance_charges,
      maintenanceFor: state.maintenance_charges_per,
      brokerageCharge: state.brokerage,
      amenities: amenities,
      longitude: state.longitude,
      latitude: state.latitude,
      address: state.address,
      city: state.city,
      State: state.State,
      pinCode: state.pinCode,
      propertyTag: state.Property_Tag,
      transactionType: state.Transaction_Type,
      propertyDetails: propertyDetail,
      description: description,
      gaurdRoom: state.gaurdRoom,
      buildYear: state.build_year,
      bedrooms: state.Bedrooms,
      superArea: state.Super_Area?.size,
      userId: user?._id,
      vistorRoom: state.Visitor_Room,
      conferenceRoom: state.Conference_Room,
      responseFromBrokers: state.response_from_brokers,
      personalWashroom: state.Personal_Washroom,
      noOfSeats: state.No_Of_Seats,
      meetingRooms: state.Meeting_Rooms,
      Pantry: state.Pantry,
    };

    let data = {
      mainImage: state.mainImage,
      badrooms: image.badrooms,
      bathrooms: image.bathrooms,
      exteriorView: image.exteriorView,
      floorPlan: image.floorPlan,
      kitchen: image.kitchen,
      livingRoom: image.livingRoom,
      // locationMap: image.locationMap,
      masterPlan: image.masterPlan,
      other: image.other,
      roomImage: image.roomImage,
      conference: image.conference,
      visitor: image.visitor,
    };
    console.log("reqData", reqData);
    console.log("data", data);
    debugger;
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
                fieldName,
                unit,
              } = field || {};
              // debugger;
              if (type === "option") {
                return (
                  <Grid
                    item
                    xs={12}
                    md={12}
                    key={fieldIndex}
                    className="pillsContainer"
                  >
                    <Option
                      label={label}
                      items={initial_counts}
                      moreOptions={more_counts}
                      showMore={showMore}
                      onSelect={onFeatureSelect}
                      value={state}
                      fieldName={fieldName}
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
                      flexWrap: "wrap",
                      marginTop: 10,
                    }}
                  >
                    <Typography className={classes.text3}>{label}</Typography>
                    <Select
                      native
                      variant="outlined"
                      value={state[fieldName]}
                      onChange={handleChange}
                      inputProps={{ name: fieldName }}
                      style={{
                        height: 48,
                        marginRight: 5,
                        maxHeight: 200,
                        width: 200,
                      }}
                    >
                      <option value={null}>Select {fieldName}</option>
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
                      flexWrap: "wrap",
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
          ></Grid>
        </Grid>
      </FieldsContainer>
    );
  };

  /**
   *
   * @param {*} section - AreaSection
   */
  const _renderAreaSection = (section) => {
    const { fields, section: sectionName } = section || {};
    return (
      <FieldsContainer label={sectionName}>
        <Grid container>
          {fields?.length > 0 &&
            fields?.map((field, index) => {
              // debugger;
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
                      key={label}
                      style={{ width: 400, marginRight: 15, marginBottom: 15 }}
                      name={label}
                      variant="outlined"
                      onChange={(e) => {
                        // debugger
                        onAreaFieldSelect(
                          e,
                          propertyUnitSelectRef.current.querySelector("select")
                            .value
                        );
                      }}
                      value={
                        state[field?.fieldName.toLowerCase()]
                          ? state[field?.fieldName.toLowerCase()]["size"]
                          : ""
                      }
                    />
                    {units && (
                      <Select
                        native
                        variant="outlined"
                        value={areaUnit["area-unit"]}
                        ref={propertyUnitSelectRef}
                        onChange={handleAreaUnitChange}
                        inputProps={{
                          name: "area-unit",
                        }}
                        style={{ height: 55, marginTop: -15, maxHeight: 200 }}
                      >
                        {/* <option value={null}>Select area-unit</option> */}
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
              } else if (type === "textfields") {
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
                      style={{
                        width: 400,
                        marginRight: 15,
                        marginBottom: 15,
                      }}
                      name={label}
                      variant="outlined"
                      onChange={handleChange}
                      value={state[field?.fieldName]}
                    />
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
                    values={state[fieldName]}
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
                            {/* <option value={null}>Select {d.fieldName}</option> */}
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
                      style={{ marginBottom: 15 }}
                      value={state[e.fieldName]}
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
                    value={state[fieldName]}
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
                        value={state[e.fieldName]}
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

  // function useQuery() {
  //   return new URLSearchParams(useLocation().search);
  // }

  const handleRemoveAmenitiesClick = (index) => {
    const list = [...amenities];
    list.splice(index, 1);
    setAmenities(list);
  };
  const handleAminitiesInputChange = (e, index) => {
    debugger
    const { value } = e.target;
    const list = [...amenities];
    list[index] = value;
    setAmenities(list);
  };

  // handle click event of the Add button
  const handleAddAminitiesClick = () => {
    setAmenities([...amenities, "" ]);
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
    list[index][name] = value;
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
    if (status === "done") {
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
    if (status === "done") {
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
    if (status === "done") {
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
    if (status === "done") {
      if (list.bathrooms && list.bathrooms.length) {
        data = list.bathrooms;
        data[list.bathrooms.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["bathrooms"]: data });
    }
  };

  const handleImageRooms = (file, status) => {
    let list = image;
    let data = [];
    if (status === "done") {
      if (list.roomImage && list.roomImage.length) {
        data = list.roomImage;
        data[list.roomImage.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["roomImage"]: data });
    }
  };

  const handleImageConference = (file, status) => {
    let list = image;
    let data = [];
    if (status === "done") {
      if (list.conference && list.conference.length) {
        data = list.conference;
        data[list.conference.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["conference"]: data });
    }
  };

  const handleImageVisitor = (file, status) => {
    let list = image;
    let data = [];
    if (status === "done") {
      if (list.visitor && list.visitor.length) {
        data = list.visitor;
        data[list.visitor.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["visitor"]: data });
    }
  };

  const handleImageKitchen = (file, status) => {
    let list = image;
    let data = [];
    if (status === "done") {
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
    if (status === "done") {
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
    if (status === "done") {
      if (list.masterPlan && list.masterPlan.length) {
        data = list.masterPlan;
        data[list.masterPlan.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["masterPlan"]: data });
    }
  };

  // const handleImageLocationMap = (file, status) => {
  //   let list = image;
  //   let data = [];
  //   if (status === "done") {
  //     if (list.locationMap && list.locationMap.length) {
  //       data = list.locationMap;
  //       data[list.locationMap.length] = file.file;
  //     } else {
  //       data["0"] = file.file;
  //     }
  //     setImageState({ ...image, ["locationMap"]: data });
  //   }
  // };

  const handleImageOther = (file, status) => {
    let list = image;
    let data = [];
    if (status === "done") {
      if (list.other && list.other.length) {
        data = list.other;
        data[list.other.length] = file.file;
      } else {
        data["0"] = file.file;
      }
      setImageState({ ...image, ["other"]: data });
    }
  };

  const handleChangeTextEditor = (content, editor) => {
    setDescription(content);
  };

  return (
    <Box className="PropertyManagement_Data">
      <FormHeader
        heading1={"Property Module Management"}
        heading2={"Create and Update Property Here"}
      />
      {/* {state.id != " " ? (
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
      )} */}
      <Grid item xs={12} className="m-5 addUserFormanage">
        <div className="card w-100">
          {/* <div className="card-header d-flex justify-content-between align-items-center">
            <Typography component="h3" variant="h3">
              {state.id != " " ? "Edit" : "Add"} Property
            </Typography>
          </div> */}
          <div className="card-body">
            <ValidatorForm onSubmit={handleSubmit}>
              <Grid container spacing={3} className="FormFildes">
                <Grid item xs={12} sm={6} md={4}>
                  <FieldsContainer label="Personal Details">
                    <Grid container>
                      {/* <Grid item xs={12} md={12}>
                        <Detail
                          title="I am"
                          options={personal_details_options}
                          onOptionSelectListener={onOptionSelectListener}
                          values={state.iAm}
                        />
                      </Grid> */}

                      <Grid item xs={12} md={12}>
                        <Typography>I am</Typography>
                        <Select
                          native
                          variant="outlined"
                          value={state["iAm"]}
                          onChange={handleChange}
                          inputProps={{
                            name: "iAm",
                            id: "iAm",
                          }}
                          style={{
                            height: 48,
                            marginRight: 5,
                            maxHeight: 200,
                            width: "100%",
                          }}
                        >
                          <option value={null}>Select iAm</option>
                          {personal_details_options?.length > 0 &&
                            personal_details_options?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                        </Select>
                        {!iAm && (
                          <FormHelperText style={{ color: "red" }}>
                            iAm is required!
                          </FormHelperText>
                        )}
                      </Grid>

                      {/* {isOwner && (
                        <Grid item xs={12} md={12}>
                          {_renderOwnerBlock()}
                        </Grid>
                      )} */}

                      <Grid item xs={12} md={12}>
                        <Typography>For</Typography>
                        <Select
                          native
                          variant="outlined"
                          value={state["for"]}
                          onChange={onOptionPropertyForSelectListener}
                          inputProps={{
                            name: "for",
                            id: "for",
                          }}
                          style={{
                            height: 48,
                            marginRight: 5,
                            maxHeight: 200,
                            width: "100%",
                          }}
                        >
                          <option value={null}>Select For</option>
                          {property_details_options?.length > 0 &&
                            property_details_options?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                        </Select>
                        {!For && (
                          <FormHelperText style={{ color: "red" }}>
                            For is required!
                          </FormHelperText>
                        )}
                      </Grid>
                      {/* <Grid item xs={12} md={12}>
                        <Detail
                          title="For"
                          options={property_details_options}
                          values={state.for}
                          onOptionSelectListener={
                            onOptionPropertyForSelectListener
                          }
                        />
                      </Grid> */}
                      <Grid item xs={12} md={12}>
                        <Typography>Property Type</Typography>
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
                        {!pType && (
                          <FormHelperText style={{ color: "red" }}>
                            Property Type is required!
                          </FormHelperText>
                        )}
                      </Grid>
                    </Grid>
                  </FieldsContainer>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FieldsContainer label="Property Details">
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
                        <TextValidator
                          label="Longitude"
                          variant="outlined"
                          placeholder="Enter Longitude"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="longitude"
                          value={state.longitude}
                          validators={["required"]}
                          errorMessages={["longitude field is required"]}
                        />
                        <Box mt={2} />
                        <TextValidator
                          label="Latitude"
                          variant="outlined"
                          placeholder="Enter Latitude"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="latitude"
                          value={state.latitude}
                          validators={["required"]}
                          errorMessages={["latitude field is required"]}
                        />
                        <Box mt={2} />
                        <TextValidator
                          label="Address"
                          variant="outlined"
                          placeholder="Enter Address"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="address"
                          value={state.address}
                          validators={["required"]}
                          errorMessages={["address field is required"]}
                        />
                        <Box mt={2} />
                        <TextValidator
                          label="City"
                          variant="outlined"
                          placeholder="Enter City"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="city"
                          value={state.city}
                          validators={["required"]}
                          errorMessages={["city field is required"]}
                        />
                        <Box mt={2} />
                        <TextValidator
                          label="State"
                          variant="outlined"
                          placeholder="Enter State"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="State"
                          value={state.State}
                          validators={["required"]}
                          errorMessages={["State field is required"]}
                        />
                        <Box mt={2} />
                        <TextValidator
                          label="PinCode"
                          variant="outlined"
                          placeholder="Enter PinCode"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="pinCode"
                          value={state.pinCode}
                          validators={["required"]}
                          errorMessages={["pinCode field is required"]}
                        />
                      </Grid>
                    </Grid>
                  </FieldsContainer>
                </Grid>

                <Grid item xs={12} md={12}>
                  <FieldsContainer label="Project Name">
                    <Grid>
                      <Grid item xs={12} md={4}>
                        <TextValidator
                          label="Project Name"
                          variant="outlined"
                          placeholder="Enter Project Name"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="nameOfProject"
                          value={state.nameOfProject}
                          validators={["required"]}
                          errorMessages={["nameOfProject field is required"]}
                        />
                        <Box mt={2} />
                      </Grid>
                    </Grid>

                    <Grid>
                      <Grid item xs={12} md={4}>
                        <TextValidator
                          label="Posting As"
                          variant="outlined"
                          placeholder="Enter Posting As"
                          style={{ width: "100%" }}
                          onChange={handleChange}
                          name="postingAs"
                          value={state.postingAs}
                          validators={["required"]}
                          errorMessages={["postingAs field is required"]}
                        />
                        <Box mt={2} />
                      </Grid>
                    </Grid>

                    <FieldsContainer label="Property Amenities">
                      {amenities.map((x, i) => {
                        // debugger;
                        if (state.id == " ") {
                          return (
                            <Grid item xs={12} md={4}>
                              <TextField
                                label="Amenities"
                                variant="outlined"
                                placeholder="Enter Amenities"
                                style={{ width: "100%" }}
                                onChange={(e) =>
                                  handleAminitiesInputChange(e, i)
                                }
                                name="amenities"
                                value={x}
                              ></TextField>

                              <div className="RemoveBtn">
                                {amenities.length !== 1 && (
                                  <Button
                                    variant="contained"
                                    type="button"
                                    color="primary"
                                    className={"CanceForm"}
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
                            <Grid item xs={12} md={4}>
                              <TextField
                                label="Amenities"
                                variant="outlined"
                                placeholder="Enter Amenities"
                                style={{ width: "100%" }}
                                onChange={(e) =>
                                  handleAminitiesInputChange(e, i)
                                }
                                name="amenities"
                                value={x}
                              ></TextField>

                              <div className="RemoveBtn">
                                {amenities.length !== 1 && (
                                  <Button
                                    variant="contained"
                                    type="button"
                                    color="primary"
                                    className={"CanceForm"}
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
                    </FieldsContainer>
                  </FieldsContainer>
                </Grid>

                <Grid className="form-group-item" item xs={12} sm={12} md={12}>
                  {propertyData?.projectDescription != null ? (
                    <>
                      <ReactQuill
                        onChange={handleChangeTextEditor}
                        value={
                          (description
                            ? description
                            : propertyData?.projectDescription) || ""
                        }
                        placeholder="Enter description"
                        theme="snow"
                      />
                    </>
                  ) : (
                    <>
                      <ReactQuill
                        value={description || ""}
                        onChange={handleChangeTextEditor}
                        placeholder="Enter description"
                        theme="snow"
                      />
                    </>
                  )}
                </Grid>

                <Box mt={2} />
                <Grid item xs={12} md={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gaurd Room</FormLabel>
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="gaurdRoom"
                      onChange={handleChange}
                      value={
                        state.gaurdRoom
                          ? state.gaurdRoom
                          : propertyData?.gaurdRoom
                      }
                    >
                      <FormControlLabel
                        value="true"
                        aria-label="gaurdRoom"
                        name="gaurdRoom"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="false"
                        aria-label="gaurdRoom"
                        name="gaurdRoom"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
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
                        {propertyData?.images?.exteriorView?.map(
                          (item, index) => {
                            return (
                              <img
                                src={API_ENDPOINTS.BASE_URL + item.path}
                                height="80px"
                                width="80px"
                              />
                            );
                          }
                        )}
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
                    {state.pType == "RESIDENTIAL" ? (
                      <>
                        <Grid item xs={12} sm={6} md={6}>
                          <Typography variant="subtitle1" gutterBottom>
                            Living Room
                          </Typography>
                          {propertyData?.images?.livingRoom?.map(
                            (item, index) => {
                              return (
                                <img
                                  src={API_ENDPOINTS.BASE_URL + item.path}
                                  height="80px"
                                  width="80px"
                                />
                              );
                            }
                          )}
                          <Dropzone
                            xs={12}
                            sm={6}
                            md={6}
                            onChangeStatus={handleImageLivingRoom}
                            accept="image/*,audio/*,video/*"
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Typography variant="subtitle1" gutterBottom>
                            Badrooms
                          </Typography>
                          {propertyData?.images?.badrooms?.map(
                            (item, index) => {
                              return (
                                <img
                                  src={API_ENDPOINTS.BASE_URL + item.path}
                                  height="80px"
                                  width="80px"
                                />
                              );
                            }
                          )}
                          <Dropzone
                            onChangeStatus={handleImageBadrooms}
                            accept="image/*,audio/*,video/*"
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <br />
                          <Typography variant="subtitle1" gutterBottom>
                            Kitchen
                          </Typography>
                          {propertyData?.images?.kitchen?.map((item, index) => {
                            return (
                              <img
                                src={API_ENDPOINTS.BASE_URL + item.path}
                                height="80px"
                                width="80px"
                              />
                            );
                          })}
                          <Dropzone
                            onChangeStatus={handleImageKitchen}
                            accept="image/*,audio/*,video/*"
                          />
                        </Grid>
                      </>
                    ) : (
                      ""
                    )}
                    {state.pType == "COMMERCIAL" ? (
                      <>
                        <Grid item xs={12} sm={6} md={6}>
                          <Typography variant="subtitle1" gutterBottom>
                            Rooms
                          </Typography>
                          {propertyData?.images?.livingRoom?.map(
                            (item, index) => {
                              return (
                                <img
                                  src={API_ENDPOINTS.BASE_URL + item.path}
                                  height="80px"
                                  width="80px"
                                />
                              );
                            }
                          )}
                          <Dropzone
                            onChangeStatus={handleImageRooms}
                            accept="image/*,audio/*,video/*"
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Typography variant="subtitle1" gutterBottom>
                            Visitor Room
                          </Typography>
                          {propertyData?.images?.badrooms?.map(
                            (item, index) => {
                              return (
                                <img
                                  src={API_ENDPOINTS.BASE_URL + item.path}
                                  height="80px"
                                  width="80px"
                                />
                              );
                            }
                          )}
                          <Dropzone
                            onChangeStatus={handleImageVisitor}
                            accept="image/*,audio/*,video/*"
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <br />
                          <Typography variant="subtitle1" gutterBottom>
                            Conference Room
                          </Typography>
                          {propertyData?.images?.badrooms?.map(
                            (item, index) => {
                              return (
                                <img
                                  src={API_ENDPOINTS.BASE_URL + item.path}
                                  height="80px"
                                  width="80px"
                                />
                              );
                            }
                          )}
                          <Dropzone
                            onChangeStatus={handleImageConference}
                            accept="image/*,audio/*,video/*"
                          />
                        </Grid>
                      </>
                    ) : (
                      ""
                    )}

                    <Grid item xs={12} sm={6} md={6}>
                      <br />
                      <Typography variant="subtitle1" gutterBottom>
                        Bathrooms
                      </Typography>
                      {propertyData?.images?.bathrooms?.map((item, index) => {
                        return (
                          <img
                            src={API_ENDPOINTS.BASE_URL + item.path}
                            height="80px"
                            width="80px"
                          />
                        );
                      })}
                      <Dropzone
                        onChangeStatus={handleImageBathrooms}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                      <br />
                      <Typography variant="subtitle1" gutterBottom>
                        Floor Plan
                      </Typography>
                      {propertyData?.images?.floorPlan?.map((item, index) => {
                        return (
                          <img
                            src={API_ENDPOINTS.BASE_URL + item.path}
                            height="80px"
                            width="80px"
                          />
                        );
                      })}
                      <Dropzone
                        onChangeStatus={handleImageFloorPlan}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                      <br />
                      <Typography variant="subtitle1" gutterBottom>
                        Master Plan
                      </Typography>
                      {propertyData?.images?.masterPlan?.map((item, index) => {
                        return (
                          <img
                            src={API_ENDPOINTS.BASE_URL + item.path}
                            height="80px"
                            width="80px"
                          />
                        );
                      })}
                      <Dropzone
                        onChangeStatus={handleImageMasterPlan}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid>

                    {/* <Grid item xs={12} sm={6} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Location Map
                      </Typography>
                      <Dropzone
                        onChangeStatus={handleImageLocationMap}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid> */}

                    <Grid item xs={12} sm={6} md={6}>
                      <br />
                      <Typography variant="subtitle1" gutterBottom>
                        Other
                      </Typography>
                      {propertyData?.images?.other?.map((item, index) => {
                        return (
                          <img
                            src={API_ENDPOINTS.BASE_URL + item.path}
                            height="80px"
                            width="80px"
                          />
                        );
                      })}
                      <Dropzone
                        onChangeStatus={handleImageOther}
                        accept="image/*,audio/*,video/*"
                      />
                    </Grid>
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
export default PropertyCreateUpdate;

// import React, { useState, useEffect } from "react";
// import {useSelector} from "react-redux";
// import axios from "axios";
// import {
//   Container,
//   Grid,
//   Typography,
//   makeStyles,
//   TextField,
//   Select,
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   Button,
//   Box,
//   Radio,
//   RadioGroup,
// } from "@material-ui/core";
// import "./post-property.css";
// import FieldsContainer from "./components/fields-container";
// import Detail from "./components/details";
// import propertyTypeOptions from "../../utils/property-type-options.json";
// import Option from "./components/option";
// import PropertyOptionManager from "./utils/PropertyOptionManager";
// import Transaction from "./components/transaction";
// import APP_CONSTANTS from "../../utils/constants";
// import { useDispatch } from "react-redux";
// import * as PropertyAction from "../../redux/actions/PropertyAction";
// import HorizontalLinearStepper from "./stepper";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
// import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
// import { ResetPostPropertySuccessService } from './../../services/PropertyService';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   button: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
//   text1: {
//     fontFamily: '"Open Sans"',
//     color: "#303030",
//     fontSize: 28,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   text3: {
//     fontFamily: '"Open Sans",sans-serif',
//     color: "#666666",
//     fontSize: 14,
//   },
//   text4: {
//     fontFamily: '"Open Sans",sans-serif',
//     color: "#333333",
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   text5: {
//     fontFamily: '"Open Sans",sans-serif',
//     color: "#FF7601",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   text6: {
//     fontFamily: '"Open Sans",sans-serif',
//     color: "#888888",
//     fontSize: 15,
//     fontWeight: 400,
//     lineHeight: 1.8,
//   },
//   text7: {
//     fontFamily: '"Open Sans",sans-serif',
//     color: "#333333",
//     fontSize: 25,
//     fontWeight: "bold",
//     marginRight: 10,
//   },
//   icon: {
//     color: "#FF7601",
//     fontSize: 20,
//     paddingRight: 10,
//   },
//   style1: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//   },
//   btn1: {
//     borderRadius: 8,
//     color: "#FFFFFF",
//     textTransform: "none",
//     fontFamily: '"Open Sans",sans-serif',
//     backgroundColor: "#FF7601",
//   },
//   btn2: {
//     borderRadius: 15,
//     color: "#FFFFFF",
//     textTransform: "none",
//     marginRight: 10,
//     fontFamily: '"Open Sans",sans-serif',
//   },
//   style2: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   style3: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-end",
//   },
//   box1: {
//     width: 10,
//     paddingRight: 5,
//     paddingLeft: 5,
//     color: "#333333",
//   },
// }));

// const personal_details_options = ["Owner", "Agent", "Builder"];
// const property_details_options = ["Sell", "Rent"];

// const PostPropertyPage = (props) => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const postProperty = useSelector((state) => state.PostProperty);
//   const [isOwner, setIsOnwer] = React.useState(false);
//   const [step, setStep] = React.useState(true);
//   const [state, setState] = React.useState({});
//   const [mainImage, setMainImage] = React.useState();
//   const [exteriorViewImage, setExteriorViewImage] = React.useState([]);
//   const [livingroom, setLivingRoom] = React.useState([]);
//   const [bedrooms, setBedRooms] = React.useState([]);
//   const [bathrooms, setBathRooms] = React.useState([]);
//   const [kitchen, setKitchen] = React.useState([]);
//   const [floorplan, setFloorPlan] = React.useState([]);
//   const [masterplan, setMasterPlan] = React.useState([]);
//   const [other, setOther] = React.useState([]);
//   const [propertyFor, setPropertyFor] = React.useState("");
//   const [propertyOptions, setPropertyOptions] = React.useState(
//     propertyTypeOptions[0]
//   );
//   const [proeprtyForCurrentIndex, setPropertyForCurrentIndex] =
//     React.useState(0);
//   const [formFields, setFormFields] = React.useState(null);
//   const [areaUnit, setAreaUnit] = React.useState("");
//   const [isResidentialHoueBuiltOnCorner, setIsResidentialHoueBuiltOnCorner] =
//     React.useState(false);
//   const [propertyFeatures, setSectionFeatures] = React.useState({});
//   const [currentAreaField, setCurrentAreaField] = React.useState({});

//   // stepper items
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [skipped, setSkipped] = React.useState(new Set());
//   const steps = ["Basic Details", "Property Details", "Upload Files"];
//   const [propertyDetail, setPropertyDetail] = useState([
//     { key: "", Value: "" },
//   ]);
//   const {isPostSuccess}=postProperty
//   const [amenities, setAmenities] = useState([{ 0: "" }]);
//   useEffect(()=>{
//     if(isPostSuccess)
//     {
//       submitFile();
//       dispatch(PropertyAction.RestPostPropertySuccess());
//     }
//   },[isPostSuccess])
//   const isStepOptional = (step) => {
//     // return step === 1;
//     return false;
//   };
//   console.log("postProperty",postProperty)
//   const isStepSkipped = (step) => {
//     return skipped.has(step);
//   };
//   const validateStep0 = () => {
//     if (
//       !state.nameOfProject ||
//       (state.nameOfProject && state.nameOfProject.trim().length === 0) ||
//       !state.pCity ||
//       (state.pCity && state.pCity.trim().length === 0) ||
//       !state.property_location ||
//       (state.property_location && state.property_location.trim().length === 0)
//     )
//       return false;
//     else return true;
//   };
//   const validateStep1 = () => {
//     debugger
//     console.log("propertyFeatures",propertyFeatures)
//     console.log("currentAreaField",currentAreaField)

//     if (!state.pType || (state.pType && state.pType.trim().length === 0 )||
//     !state.hasOwnProperty("Possession Status") ||
//     !state.hasOwnProperty("Transaction Type") ||
//     !state.hasOwnProperty("booking_token_amount") ||
//     !state.hasOwnProperty("brokerage") ||
//     !state.hasOwnProperty("maintenance_charges") ||
//     !state.hasOwnProperty("other_charges") ||
//     // !state.hasOwnProperty("response_from_brokers") ||
//     !state.hasOwnProperty("maintenance_charges_per") ||
//     // !state.hasOwnProperty("price_includes_car_parking") ||
//     // !state.hasOwnProperty("price_includes_plc") ||
//     // !state.hasOwnProperty("price_includes_club_membership") ||
//     !propertyFeatures.hasOwnProperty("Balconies") ||
//     !propertyFeatures.hasOwnProperty("Bathrooms") ||
//     !propertyFeatures.hasOwnProperty("Bedrooms") ||
//     !propertyFeatures.hasOwnProperty("Floor No") ||
//     !propertyFeatures.hasOwnProperty("Total Floors") ||
//     !propertyFeatures.hasOwnProperty("Furnished Status") ||
//     !currentAreaField.hasOwnProperty("fieldName")||
//     !currentAreaField.hasOwnProperty("fieldValue")
//     )
//       return false;
//     else return true;
//   };
//   const handleNext = () => {
//     debugger;
//     if (activeStep === 0) {
//       // Submit Form Detials
//       if (!validateStep0()) return;
//     }

//     if (activeStep === 1) {
//       if (!validateStep1()) return;
//       // Submit Form Detials
//       // submitData();
//     }

//     if (activeStep === 2) {
//       submitData();
//       // Submit Image

//     }

//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   const onOptionSelectListener = (option) => {
//     console.log("-Personal-Info- Option-", option);
//     if (option === "Owner") {
//       setIsOnwer(true);
//     } else {
//       setIsOnwer(false);
//     }
//   };

//   const onOptionPropertyForSelectListener = (option) => {
//     console.log("-PropertyFor-- Option-", option);
//     if (option === "Sell") {
//       setPropertyForCurrentIndex(0);
//     } else if (option === "Rent") {
//       setPropertyForCurrentIndex(1);
//     }
//     setPropertyFor(option);
//   };

// const handleChange = (event) => {
//   event.preventDefault();
//   const name = event.target.name;
//   console.log("-HandleChange-", event);
//   setState({
//     ...state,
//     [name]:
//       event.target.type === "checkbox"
//         ? event.target.checked
//         : event.target.value,
//   });
// };

//   const handleMainimage = (event) => {
//     event.preventDefault();
//     console.log("-HandleChange-", event);
//     if (event.target.files && event.target.files[0]) {
//       let img = event.target.files[0];
//       setMainImage({ mainImage: URL.createObjectURL(img), productId: 1 });
//     }
//   };
//   const handleExteriorViewimage = (event) => {
//     event.preventDefault();
//     console.log("-HandleChange-", event);
//     const files = [];
//     if (event.target.files && event.target.files.length > 0) {
//       event.target.files.forEach((file, index) => {
//         files.push({
//           exteriorView: URL.createObjectURL(file),
//           productId: index + 1,
//         });
//       });
//       setExteriorViewImage(files);
//     }
//   };
//   const handleLivingRoomimage = (event) => {
//     event.preventDefault();
//     console.log("-HandleChange-", event);
//     const files = [];
//     if (event.target.files && event.target.files.length > 0) {
//       event.target.files.forEach((file, index) => {
//         files.push({
//           livingRoom: URL.createObjectURL(file),
//           productId: index + 1,
//         });
//       });
//       setLivingRoom(files);
//     }
//   };
//   const handleBedRoomimage = (event) => {
//     event.preventDefault();
//     console.log("-HandleChange-", event);
//     const files = [];
//     if (event.target.files && event.target.files.length > 0) {
//       event.target.files.forEach((file, index) => {
//         files.push({
//           badrooms: URL.createObjectURL(file),
//           productId: index + 1,
//         });
//       });
//       setBedRooms(files);
//     }
//   };
//   const handleBathRoomimage = (event) => {
//     event.preventDefault();
//     console.log("-HandleChange-", event);
//     const files = [];
//     if (event.target.files && event.target.files.length > 0) {
//       event.target.files.forEach((file, index) => {
//         files.push({
//           bathrooms: URL.createObjectURL(file),
//           productId: index + 1,
//         });
//       });
//       setBathRooms(files);
//     }
//   };
//   const handleKitchenimage = (event) => {
//     event.preventDefault();
//     console.log("-HandleChange-", event);
//     const files = [];
//     if (event.target.files && event.target.files.length > 0) {
//       event.target.files.forEach((file, index) => {
//         files.push({
//           kitchen: URL.createObjectURL(file),
//           productId: index + 1,
//         });
//       });
//       setKitchen(files);
//     }
//   };
//   const handleFloorPlanimage = (event) => {
//     event.preventDefault();
//     console.log("-HandleChange-", event);
//     const files = [];
//     if (event.target.files && event.target.files.length > 0) {
//       event.target.files.forEach((file, index) => {
//         files.push({
//           floorPlan: URL.createObjectURL(file),
//           productId: index + 1,
//         });
//       });
//       setFloorPlan(files);
//     }
//   };
//   const handleMasterPlanimage = (event) => {
//     event.preventDefault();
//     console.log("-HandleChange-", event);
//     const files = [];
//     if (event.target.files && event.target.files.length > 0) {
//       event.target.files.forEach((file, index) => {
//         files.push({
//           masterPlan: URL.createObjectURL(file),
//           productId: index + 1,
//         });
//       });
//       setMasterPlan(files);
//     }
//   };
//   const handleOtherimage = (event) => {
//     event.preventDefault();
//     console.log("-HandleChange-", event);
//     const files = [];
//     if (event.target.files && event.target.files.length > 0) {
//       event.target.files.forEach((file, index) => {
//         files.push({ other: URL.createObjectURL(file), productId: index + 1 });
//       });
//       setOther(files);
//     }
//   };
//   const handleAreaUnitChange = (event) => {
//     event.preventDefault();
//     const fieldUnit = event.target.value;
//     console.log("--currentAreaField--", currentAreaField);
//     setState({
//       ...state,
//       [currentAreaField.fieldName]: {
//         size: currentAreaField.fieldValue,
//         unit: fieldUnit,
//       },
//     });
//   };

//   const onFeatureSelect = (feature) => {
//     console.log("-FEATURE--", feature);
//     setSectionFeatures({
//       ...propertyFeatures,
//       [feature.label]: feature.item,
//     });
//   };

//   const onAreaFieldSelect = (e) => {
//     e.preventDefault();
//     const fieldName = e.target.name;
//     const fieldValue = e.target.value;
//     setCurrentAreaField({ fieldName, fieldValue });
//   };

//   const handleCheckboxStateChange = (event) => {
//     setIsResidentialHoueBuiltOnCorner(event.target.checked);
//   };
//   const _getPropertyTypeOptions = () => {
//     const options = propertyTypeOptions[proeprtyForCurrentIndex];
//     setPropertyOptions(options);
//   };

//   const onTransactionOptionSelectListener = (data) => {
//     setState({
//       ...state,
//       [data.title]: data.value,
//     });
//   };

//   useEffect(() => {
//     _getPropertyTypeOptions();
//   }, [proeprtyForCurrentIndex]);

//   useEffect(() => {
//     console.log("-Form-Data-State-", state);
//     console.log("-Property-Features-", propertyFeatures);
//   }, [state, propertyFeatures]);

//   useEffect(() => {
//     setState({
//       ...state,
//       amenities: amenities,
//     });
//   }, [amenities]);

//   useEffect(() => {
//     setState({
//       ...state,
//       propertyDetail: propertyDetail,
//     });
//   }, [propertyDetail]);

//   const submitData = () => {
//     //PostPropertyRequestAsync(state);
//     dispatch(PropertyAction.AddPropertyRequestAsync(state));
//     setStep(false);
//   };

//   const submitFile = () => {
//     let formData
//     if (mainImage) {
//       formData = new FormData();
//       formData.append("mainImage", mainImage);
//       formData.append("imagetype", "mainImage");
//       formData.append("propertyId", "61155a4f37c57504a11628ce");
//       dispatch(PropertyAction.UploadPropertyImageRequestAsync(formData));
//     }
//     if (exteriorViewImage.length > 0) {
//       formData = new FormData();
//       for (const file of exteriorViewImage) {
//         formData.append("exteriorView", file);
//       }
//       formData.append("imagetype", "exteriorView");
//       formData.append("propertyId", "61155a4f37c57504a11628ce");
//       dispatch(PropertyAction.UploadPropertyImageRequestAsync(formData));
//     }
//     if (livingroom.length > 0) {
//       formData = new FormData();
//       for (const file of livingroom) {
//         formData.append("livingRoom", file);
//       }
//       formData.append("imagetype", "livingRoom");
//       formData.append("propertyId", "61155a4f37c57504a11628ce");
//       dispatch(PropertyAction.UploadPropertyImageRequestAsync(formData));
//     }
//     if (bedrooms.length > 0) {
//       formData = new FormData();
//       for (const file of bedrooms) {
//         formData.append("badrooms", file);
//       }
//       formData.append("imagetype", "badrooms");
//       formData.append("propertyId", "61155a4f37c57504a11628ce");
//       dispatch(PropertyAction.UploadPropertyImageRequestAsync(formData));
//     }
//     if (bathrooms.length > 0) {
//       formData = new FormData();
//       for (const file of bathrooms) {
//         formData.append("bathrooms", file);
//       }
//       formData.append("imagetype", "bathrooms");
//       formData.append("propertyId", "61155a4f37c57504a11628ce");
//       dispatch(PropertyAction.UploadPropertyImageRequestAsync(formData));
//     }
//     if (kitchen.length > 0) {
//       formData = new FormData();
//       for (const file of kitchen) {
//         formData.append("kitchen", file);
//       }
//       formData.append("imagetype", "kitchen");
//       formData.append("propertyId", "61155a4f37c57504a11628ce");
//       dispatch(PropertyAction.UploadPropertyImageRequestAsync(formData));
//     }
//     if (floorplan.length > 0) {
//       formData = new FormData();
//       for (const file of floorplan) {
//         formData.append("floorPlan", file);
//       }
//       formData.append("imagetype", "floorPlan");
//       formData.append("propertyId", "61155a4f37c57504a11628ce");
//       dispatch(PropertyAction.UploadPropertyImageRequestAsync(formData));
//     }
//     if (masterplan.length > 0) {
//       formData = new FormData();
//       for (const file of masterplan) {
//         formData.append("masterPlan", file);
//       }
//       formData.append("imagetype", "masterPlan");
//       formData.append("propertyId", "61155a4f37c57504a11628ce");
//       dispatch(PropertyAction.UploadPropertyImageRequestAsync(formData));
//     }
//     if (other.length > 0) {
//       formData = new FormData();
//       for (const file of other) {
//         formData.append("other", file);
//       }
//       formData.append("imagetype", "other");
//       formData.append("propertyId", "61155a4f37c57504a11628ce");
//       dispatch(PropertyAction.UploadPropertyImageRequestAsync(formData));
//     }
//   };

//   const fileUpload = (event) => {
//     // setFile({ exteriorView: event.target.files[0], productId: 1 });
//   };
//   const _renderOwnerBlock = () => {
//     if (isOwner) {
//       return (
//         <Grid container>
//           <Grid item xs={12} md={12} className={classes.style1}>
//             <TextField
//               label="Name"
//               style={{ width: "25%" }}
//               name="owner_name"
//               onChange={handleChange}
//             ></TextField>
//             <Grid container>
//               <Grid item xs={12} md={12} className={classes.style2}>
//                 <Select
//                   native
//                   value={state["country_code"]}
//                   onChange={handleChange}
//                   inputProps={{ name: "country_code" }}
//                   style={{ height: 48, marginRight: 5 }}
//                 >
//                   <option value={10}>IND +91</option>
//                   <option value={20}>PAK +92</option>
//                 </Select>
//                 <TextField
//                   label="Mobile"
//                   style={{ width: "17.5%" }}
//                   name="mobile_number"
//                   onChange={handleChange}
//                 ></TextField>
//               </Grid>
//             </Grid>
//             <TextField
//               label="Email"
//               style={{ width: "25%" }}
//               onChange={handleChange}
//               name="owner_email"
//             ></TextField>
//           </Grid>
//         </Grid>
//       );
//     }
//     return false;
//   };

//   React.useEffect(() => {
//     if (state["pType"]) {
//       const formData =
//         PropertyOptionManager.getFormFieldsBySelectedPropertyType(
//           state["pType"]
//         );
//       setFormFields(formData);
//     }
//   }, [state]);

//   /**
//    *
//    * @param {*} section - FEATURES
//    */
//   const _renderFeaturesSection = (section) => {
//     // console.log('--SECTION FEATURES--', section);
//     const { fields, section: sectionName } = section || {};
//     return (
//       <FieldsContainer label={sectionName}>
//         <Grid container>
//           {fields?.map((field, index) => {
//             const {
//               label,
//               initial_counts,
//               more_counts,
//               showMore,
//               type,
//               values,
//               unit,
//             } = field || {};
//             if (type === "option") {
//               return (
//                 <Grid item xs={12} md={12} key={index}>
//                   <Option
//                     label={label}
//                     items={initial_counts}
//                     moreOptions={more_counts}
//                     showMore={showMore}
//                     onSelect={onFeatureSelect}
//                   ></Option>
//                 </Grid>
//               );
//             } else if (type === "dropdown") {
//               return (
//                 <Grid
//                   item
//                   xs={12}
//                   md={12}
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "flex-start",
//                     justifyContent: "flex-start",
//                     marginTop: 10,
//                   }}
//                 >
//                   <Typography className={classes.text3}>{label}</Typography>
//                   <Select
//                     native
//                     value={state["pType"]}
//                     onChange={handleChange}
//                     inputProps={{ name: "pType" }}
//                     style={{
//                       height: 48,
//                       marginRight: 5,
//                       maxHeight: 200,
//                       width: 200,
//                     }}
//                   >
//                     {values.map((item, index) => {
//                       return (
//                         <option key={index} value={item}>
//                           {item}
//                         </option>
//                       );
//                     })}
//                   </Select>
//                 </Grid>
//               );
//             } else if (type === "textfield") {
//               return (
//                 <Grid
//                   item
//                   xs={12}
//                   md={4}
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <TextField
//                     label={field?.label}
//                     placeholder={field.placeholder}
//                     fullWidth
//                   />
//                   <Typography className={classes.text3}>{unit}</Typography>
//                 </Grid>
//               );
//             }
//           })}
//         </Grid>
//       </FieldsContainer>
//     );
//   };

//   /**
//    *
//    * @param {*} section - AREA
//    */
//   const _renderAreaSection = (section) => {
//     // console.log('--SECTION AREA--', section);
//     const { fields, section: sectionName } = section || {};
//     return (
//       <FieldsContainer label={sectionName}>
//         <Grid container>
//           {fields?.map((field, index) => {
//             const {
//               label,
//               initial_counts,
//               more_counts,
//               showMore,
//               type,
//               values,
//               unit,
//               units,
//               placeholder,
//             } = field || {};
//             if (type === "textfield") {
//               return (
//                 <Grid
//                   item
//                   xs={12}
//                   md={12}
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                   }}
//                   key={index}
//                 >
//                   <TextField
//                     label={label}
//                     placeholder={placeholder}
//                     style={{ width: 400 }}
//                     name={label}
//                     onChange={onAreaFieldSelect}
//                   />
//                   {units && (
//                     <Select
//                       native
//                       value={areaUnit["area-unit"]}
//                       onChange={handleAreaUnitChange}
//                       inputProps={{
//                         name: "area-unit",
//                       }}
//                       style={{ height: 48, marginRight: 5, maxHeight: 200 }}
//                     >
//                       {units?.map((item, index) => {
//                         return (
//                           <option key={index} value={item}>
//                             {item}
//                           </option>
//                         );
//                       })}
//                     </Select>
//                   )}
//                 </Grid>
//               );
//             } else if (type === "checkbox") {
//               return (
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={state.checkedA}
//                       onChange={handleChange}
//                       name={label}
//                     />
//                   }
//                   label={label}
//                 />
//               );
//             }
//           })}
//         </Grid>
//       </FieldsContainer>
//     );
//   };

//   /**
//    *
//    * @param {*} section - TRANSACTION
//    */
//   const _renderTransactionSection = (section) => {
//     // console.log("--SECTION TRANSACTION--", section);
//     const { fields, section: sectionName } = section || {};
//     return (
//       <FieldsContainer label={sectionName}>
//         <Grid container>
//           {fields?.map((field, index) => {
//             const { label, type, values, unit, units, placeholder, data } =
//               field || {};
//             if (type === "radio") {
//               return (
//                 <Grid
//                   item
//                   xs={12}
//                   md={12}
//                   key={index}
//                   style={{ display: "flex", flexDirection: "column" }}
//                 >
//                   <Transaction
//                     title={label}
//                     options={values}
//                     onOptionSelectListener={onTransactionOptionSelectListener}
//                   />
//                 </Grid>
//               );
//             } else if (type === "dropdown") {
//               return (
//                 <Grid item xs={12} md={12}>
//                   <Grid container>
//                     <Grid item xs={12} md={12}>
//                       <Typography className={classes.text3}>{label}</Typography>
//                     </Grid>
//                     {data?.map((d) => {
//                       return (
//                         <Grid item xs={12} md={3}>
//                           <Select
//                             native
//                             value={state[d.fieldName]}
//                             onChange={handleChange}
//                             inputProps={{
//                               name: d.fieldName,
//                             }}
//                             style={{
//                               height: 48,
//                               marginRight: 5,
//                               maxHeight: 200,
//                               width: 200,
//                             }}
//                           >
//                             {d.values.map((item, index) => {
//                               return (
//                                 <option key={index} value={item}>
//                                   {item}
//                                 </option>
//                               );
//                             })}
//                           </Select>
//                         </Grid>
//                       );
//                     })}
//                   </Grid>
//                 </Grid>
//               );
//             }
//           })}
//         </Grid>
//       </FieldsContainer>
//     );
//   };

//   /**
//    *
//    * @param {*} section - PRICE
//    */
//   const _renderPriceSection = (section) => {
//     // console.log("--SECTION PRICE--", section);
//     const { fields, section: sectionName } = section || {};
//     return (
//       <FieldsContainer label={sectionName}>
//         <Grid container>
//           {fields?.map((field, index) => {
//             const {
//               label,
//               type,
//               values,
//               unit,
//               units,
//               placeholder,
//               data,
//               fieldName,
//             } = field || {};
//             if (type === "textfield" && data) {
//               return data.map((e, i) => {
//                 return (
//                   <Grid item xs={12} md={3} key={i}>
//                     <TextField
//                       label={e.label}
//                       placeholder={e.placeholder}
//                       onChange={handleChange}
//                       name={fieldName}
//                       // style={{ width: 400 }}
//                     />
//                   </Grid>
//                 );
//               });
//             } else if (type === "textfield") {
//               return (
//                 <Grid item xs={12} md={12}>
//                   <TextField
//                     label={label}
//                     placeholder={placeholder}
//                     onChange={handleChange}
//                     style={{ width: 300 }}
//                     name={fieldName}
//                   />
//                 </Grid>
//               );
//             } else if (type === "text-dropdown" && field.data) {
//               return field?.data?.map((e, i) => {
//                 if (e.type === "textfield") {
//                   return (
//                     <Grid item xs={12} md={4}>
//                       <TextField
//                         label={e.label}
//                         name={e.fieldName}
//                         onChange={handleChange}
//                         placeholder={e.placeholder}
//                         style={{ width: 300 }}
//                       />
//                     </Grid>
//                   );
//                 } else if (e.type === "dropdown") {
//                   return (
//                     <Grid item xs={12} md={4}>
//                       <Select
//                         native
//                         value={state[e.fieldName]}
//                         onChange={handleChange}
//                         inputProps={{
//                           name: e.fieldName,
//                         }}
//                         style={{
//                           height: 48,
//                           marginRight: 5,
//                           maxHeight: 200,
//                           width: 200,
//                         }}
//                       >
//                         {e.values.map((item, index) => {
//                           return (
//                             <option key={index} value={item}>
//                               {item}
//                             </option>
//                           );
//                         })}
//                       </Select>
//                     </Grid>
//                   );
//                 }
//               });
//             } else if (type === "dropdown") {
//               return (
//                 <Grid item xs={12} md={12}>
//                   <Select
//                     native
//                     value={state[fieldName]}
//                     onChange={handleChange}
//                     name={fieldName}
//                     inputProps={{
//                       name: fieldName,
//                     }}
//                     style={{
//                       height: 48,
//                       marginRight: 5,
//                       maxHeight: 200,
//                       width: 200,
//                     }}
//                   >
//                     {values?.map((item, index) => {
//                       return (
//                         <option key={index} value={item}>
//                           {item}
//                         </option>
//                       );
//                     })}
//                   </Select>
//                 </Grid>
//               );
//             } else if (type === "checkbox" && field?.fields) {
//               return (
//                 <Grid
//                   item
//                   xs={12}
//                   md={12}
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <Typography style={{ marginRight: 10 }}>{label}</Typography>
//                   <FormGroup row>
//                     {field?.fields?.map((e, i) => {
//                       return (
//                         <FormControlLabel
//                           key={i}
//                           control={
//                             <Checkbox
//                               value={state[e.fieldName]}
//                               onChange={handleChange}
//                               name={e.fieldName}
//                             />
//                           }
//                           label={e.label}
//                         />
//                       );
//                     })}
//                   </FormGroup>
//                 </Grid>
//               );
//             } else if (type === "checkbox") {
//               return (
//                 <Grid
//                   item
//                   xs={12}
//                   md={12}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "flex-start",
//                   }}
//                 >
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={state[fieldName]}
//                         value={state[fieldName]}
//                         onChange={handleChange}
//                         name={fieldName}
//                       />
//                     }
//                     label={label}
//                   />
//                 </Grid>
//               );
//             }
//           })}
//         </Grid>
//       </FieldsContainer>
//     );
//   };

//   // handle input change
//   const handleDetailChange = (e, index) => {
//     const { name, value } = e.target;
//     // if(name == 'key'){
//     //   const arr = e.target.value.split(" ");
//     //   for (var i = 0; i < arr.length; i++) {
//     //       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     //   }
//     //   keydata = arr.join("");
//     // }

//     const list = [...propertyDetail];
//     list[index][name] = value;
//     setPropertyDetail(list);
//   };

//   const handleDetailRemoveClick = (index) => {
//     const list = [...propertyDetail];
//     list.splice(index, 1);
//     setPropertyDetail(list);
//   };

//   const handleDetailAddClick = () => {
//     setPropertyDetail([...propertyDetail, { key: "", Value: "" }]);
//   };

//   const handleRemoveAmenitiesClick = (index) => {
//     const list = [...amenities];
//     list.splice(index, 1);
//     setAmenities(list);
//   };
//   const handleAminitiesInputChange = (e, index) => {
//     const { value } = e.target;
//     const list = [...amenities];
//     list[index] = value;
//     setAmenities(list);
//   };

//   // handle click event of the Add button
//   const handleAddAminitiesClick = () => {
//     setAmenities([...amenities, { amenities: "" }]);
//   };

//   const getStepOne = () => {
//     return (
//       <Grid container>
//         {/* <Grid item xs={12} md={12}>
//         <Typography className={classes.text1}>
//           Sell or Rent your Property
//         </Typography>
//       </Grid> */}

//         <Grid item xs={12} md={12}>
//           <FieldsContainer label="Property Details">
//             <Grid container>
//               <Grid item xs={12} md={12}>
//                 <Detail
//                   title="For"
//                   options={property_details_options}
//                   onOptionSelectListener={onOptionPropertyForSelectListener}
//                 />
//               </Grid>
//               <Grid item xs={12} md={12}>
//                 <Select
//                   native
//                   value={state["pType"]}
//                   onChange={handleChange}
//                   inputProps={{
//                     name: "pType",
//                     id: "pType",
//                   }}
//                   style={{ height: 48, marginRight: 5, maxHeight: 200 }}
//                 >
//                   {propertyOptions.items.map((item, index) => {
//                     return (
//                       <option key={index} value={item.value}>
//                         {item.name}
//                       </option>
//                     );
//                   })}
//                 </Select>
//               </Grid>
//             </Grid>
//           </FieldsContainer>
//         </Grid>

//         <Grid item xs={12} md={12}>
//           {formFields?.sections?.map((section) => {
//             switch (section?.section_id) {
//               case APP_CONSTANTS.section_features:
//                 return _renderFeaturesSection(section);
//               case APP_CONSTANTS.section_area:
//                 return _renderAreaSection(section);
//               case APP_CONSTANTS.section_transaction:
//                 return _renderTransactionSection(section);
//               case APP_CONSTANTS.section_price:
//                 return _renderPriceSection(section);
//             }
//           })}
//         </Grid>
//         {/* <Button variant="contained" onClick={submitData} color="primary">Save</Button> */}
//       </Grid>
//     );
//   };

//   const getStepZero = () => {
//     return (
//       <Grid container>
//         <Grid item xs={12} sm={6} md={4}>
//           <FieldsContainer label="Personal Details ">
//             <Grid item xs={12} md={11}>
//               <Detail
//                 title="I am"
//                 options={personal_details_options}
//                 onOptionSelectListener={onOptionSelectListener}
//               />
//             </Grid>
//             <Grid item xs={12} md={11}>
//               <Select
//                 native
//                 value={state["iAm"]}
//                 variant="outlined"
//                 onChange={handleChange}
//                 inputProps={{
//                   name: "iAm",
//                   id: "iAm",
//                 }}
//                 fullWidth
//                 style={{ height: 48, marginRight: 5, maxHeight: 200 }}
//               >
//                 {personal_details_options.map((item, index) => {
//                   return (
//                     <option key={index} value={item}>
//                       {item}
//                     </option>
//                   );
//                 })}
//               </Select>
//             </Grid>
//           </FieldsContainer>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <FieldsContainer label="Property Location">
//             <Grid item xs={12} md={11} className={classes.style1}>
//               <TextField
//                 label="City"
//                 placeholder="Enter City"
//                 variant="outlined"
//                 // style={{width: "25%"}}
//                 onChange={handleChange}
//                 name="pCity"
//                 fullWidth
//               />
//               <TextField
//                 label="Locality"
//                 variant="outlined"
//                 placeholder="Enter Locality"
//                 style={{ marginTop: 20 }}
//                 onChange={handleChange}
//                 name="property_location"
//                 fullWidth
//               />
//             </Grid>
//           </FieldsContainer>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <FieldsContainer label="Project Name">
//             <Grid item xs={12} md={11}>
//               <TextField
//                 label="Project Name"
//                 variant="outlined"
//                 placeholder="Enter Project Name"
//                 // style={{width: "100%"}}
//                 onChange={handleChange}
//                 name="nameOfProject"
//                 fullWidth
//               ></TextField>
//               {/* <TextValidator
//                   label="Project Name"
//                   variant="outlined"
//                   placeholder="Enter Project Name"
//                   style={{width: "100%"}}
//                   onChange={handleChange}
//                   name="nameOfProject"
//                   value={state.nameOfProject || ''}
//                   validators={["required"]}
//                   errorMessages={["nameOfProject field is required"]}
//                 /> */}
//               <Box mt={2} />
//             </Grid>
//           </FieldsContainer>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <FieldsContainer label="Property Details">
//             <Box mt={2} />
//             {propertyDetail.map((x, i) => {
//               return (
//                 <>
//                   <Grid container style={{ marginTop: 20, marginBottom: 20 }}>
//                     <Grid item xs={12} md={7}>
//                       <TextField
//                         label="Key"
//                         variant="outlined"
//                         placeholder="Enter Key"
//                         style={{ width: "100%" }}
//                         onChange={(e) => handleDetailChange(e, i)}
//                         name="key"
//                         value={x.key}
//                       ></TextField>
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                       <TextField
//                         label="Value"
//                         variant="outlined"
//                         placeholder="Enter Value"
//                         style={{ width: "100%" }}
//                         onChange={(e) => handleDetailChange(e, i)}
//                         name="Value"
//                         value={x.Value}
//                       ></TextField>
//                     </Grid>
//                     <div
//                       className="RemoveBtn"
//                       style={{ marginTop: 20, marginBottom: 20 }}
//                     >
//                       {propertyDetail.length !== 1 && (
//                         <Button
//                           variant="contained"
//                           type="button"
//                           color="primary"
//                           className={"CanceForm"}
//                           style={{ marginRight: 20 }}
//                           onClick={() => handleDetailRemoveClick(i)}
//                         >
//                           Remove
//                         </Button>
//                       )}
//                       {propertyDetail.length - 1 === i && (
//                         <Button
//                           variant="contained"
//                           type="button"
//                           color="primary"
//                           className={"SaveData"}
//                           onClick={handleDetailAddClick}
//                         >
//                           Add More
//                         </Button>
//                       )}
//                     </div>
//                   </Grid>
//                 </>
//               );
//             })}
//           </FieldsContainer>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <FieldsContainer label="Property Amenities">
//             <Grid item xs={12} md={11}>
//               {amenities.map((x, i) => {
//                 if (state.id == null) {
//                   return (
//                     <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
//                       <TextField
//                         label="Amenities"
//                         variant="outlined"
//                         placeholder="Enter Amenities"
//                         style={{ width: "100%" }}
//                         onChange={(e) => handleAminitiesInputChange(e, i)}
//                         name="amenities"
//                         // value={x}
//                       ></TextField>

//                       <div className="RemoveBtn" style={{ marginTop: 20 }}>
//                         {amenities.length !== 1 && (
//                           <Button
//                             variant="contained"
//                             type="button"
//                             color="primary"
//                             className={"CanceForm"}
//                             style={{ marginRight: 20 }}
//                             onClick={() => handleRemoveAmenitiesClick(i)}
//                           >
//                             Remove
//                           </Button>
//                         )}
//                         {amenities.length - 1 === i && (
//                           <Button
//                             variant="contained"
//                             type="button"
//                             color="primary"
//                             className={"SaveData"}
//                             onClick={handleAddAminitiesClick}
//                           >
//                             Add more
//                           </Button>
//                         )}
//                       </div>
//                     </Grid>
//                   );
//                 } else {
//                   return (
//                     <Grid item xs={12} md={8} style={{ marginTop: 20 }}>
//                       <TextField
//                         label="Amenities"
//                         variant="outlined"
//                         placeholder="Enter Amenities"
//                         style={{ width: "100%" }}
//                         onChange={(e) => handleAminitiesInputChange(e, i)}
//                         name="amenities"
//                         value={x}
//                       ></TextField>

//                       <div className="RemoveBtn" style={{ marginTop: 20 }}>
//                         {amenities.length !== 1 && (
//                           <Button
//                             variant="contained"
//                             type="button"
//                             color="primary"
//                             className={"CanceForm"}
//                             style={{ marginRight: 20 }}
//                             onClick={() => handleRemoveAmenitiesClick(i)}
//                           >
//                             Remove
//                           </Button>
//                         )}
//                         {amenities.length - 1 === i && (
//                           <Button
//                             variant="contained"
//                             type="button"
//                             color="primary"
//                             className={"SaveData"}
//                             onClick={handleAddAminitiesClick}
//                           >
//                             Add more
//                           </Button>
//                         )}
//                       </div>
//                     </Grid>
//                   );
//                 }
//               })}
//             </Grid>
//           </FieldsContainer>
//         </Grid>
//       </Grid>
//     );
//   };

//   const getStepTwo = () => {
//     return (
//       <Grid container>
//         <Grid item xs={12} md={12}>
//           <FieldsContainer label="Images">
//             <Grid container>
//               <Grid item xs={6} md={6}>
//                 <p>Main Image</p>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <input type="file" onChange={handleMainimage} />
//               </Grid>
//             </Grid>
//           </FieldsContainer>
//         </Grid>
//         <Grid item xs={12} md={12}>
//           <FieldsContainer label="Images">
//             <Grid container>
//               <Grid item xs={6} md={6}>
//                 <p>Exterior View</p>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <input
//                   type="file"
//                   multiple
//                   onChange={handleExteriorViewimage}
//                 />
//               </Grid>
//             </Grid>
//           </FieldsContainer>
//         </Grid>
//         <Grid item xs={12} md={12}>
//           <FieldsContainer label="Images">
//             <Grid container>
//               <Grid item xs={6} md={6}>
//                 <p>Living Room</p>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <input type="file" multiple onChange={handleLivingRoomimage} />
//               </Grid>
//             </Grid>
//           </FieldsContainer>
//         </Grid>
//         <Grid item xs={12} md={12}>
//           <FieldsContainer label="Images">
//             <Grid container>
//               <Grid item xs={6} md={6}>
//                 <p>Bed Room</p>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <input type="file" multiple onChange={handleBedRoomimage} />
//               </Grid>
//             </Grid>
//           </FieldsContainer>
//         </Grid>
//         <Grid item xs={12} md={12}>
//           <FieldsContainer label="Images">
//             <Grid container>
//               <Grid item xs={6} md={6}>
//                 <p>Bath Room</p>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <input type="file" multiple onChange={handleBathRoomimage} />
//               </Grid>
//             </Grid>
//           </FieldsContainer>
//         </Grid>
//         <Grid item xs={12} md={12}>
//           <FieldsContainer label="Images">
//             <Grid container>
//               <Grid item xs={6} md={6}>
//                 <p>kitchen</p>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <input type="file" multiple onChange={handleKitchenimage} />
//               </Grid>
//             </Grid>
//           </FieldsContainer>
//         </Grid>
//         <Grid item xs={12} md={12}>
//           <FieldsContainer label="Images">
//             <Grid container>
//               <Grid item xs={6} md={6}>
//                 <p>Floor Plan</p>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <input type="file" multiple onChange={handleFloorPlanimage} />
//               </Grid>
//             </Grid>
//           </FieldsContainer>
//         </Grid>
//         <Grid item xs={12} md={12}>
//           <FieldsContainer label="Images">
//             <Grid container>
//               <Grid item xs={6} md={6}>
//                 <p>Master Plan</p>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <input type="file" multiple onChange={handleMasterPlanimage} />
//               </Grid>
//             </Grid>
//           </FieldsContainer>
//         </Grid>
//         <Grid item xs={12} md={12}>
//           <FieldsContainer label="Images">
//             <Grid container>
//               <Grid item xs={6} md={6}>
//                 <p>Other</p>
//               </Grid>
//               <Grid item xs={6} md={6}>
//                 <input type="file" multiple onChange={handleOtherimage} />
//               </Grid>
//             </Grid>
//           </FieldsContainer>
//         </Grid>
//         {/* <Grid item xs={12} md={12}>
//       <FieldsContainer label="Videos">
//         <Grid container>
//           <Grid item xs={6} md={6}>
//             <p>Upload Videos</p>
//           </Grid>
//           <Grid item xs={6} md={6}>
//             <input type="file" onChange={fileUpload} />
//           </Grid>
//         </Grid>
//       </FieldsContainer>
//     </Grid> */}
//         {/* <Button variant="contained" onClick={submitFile} color="primary">Save</Button> */}
//       </Grid>
//     );
//   };

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return getStepZero();
//       case 1:
//         return getStepOne();
//       case 2:
//         return getStepTwo();
//       default:
//         console.log(step);
//         return "Unknown step";
//     }
//   };

//   const getStepButtonText = (activeStep) => {
//     switch (activeStep) {
//       case 0:
//         return "Next";
//       case 1:
//         return "Save Details";
//       case 2:
//         return "Finish";
//       default:
//         console.log(activeStep);
//         return "Unknown step";
//     }
//   };

//   return (
//     <Container style={{ marginTop: 60, marginBottom: 60 }}>
//       <Grid item xs={12} md={12}>
//         <Typography
//           className={classes.text1}
//           mt={3}
//           style={{ textAlign: "center" }}
//         >
//           Sell or Rent your Property
//         </Typography>
//       </Grid>
//       <div className={classes.root}>
//         <Stepper activeStep={activeStep}>
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
//               labelProps.optional = (
//                 <Typography variant="caption">Optional</Typography>
//               );
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         <Grid contianer style={{ paddingLeft: 40 }}>
//           {activeStep === steps.length ? (
//             <div>
//               <Typography className={classes.instructions}>
//                 All steps completed
//               </Typography>
//               {/* <Button onClick={handleReset} className={classes.button}>
//                             Reset
//                         </Button> */}
//             </div>
//           ) : (
//             <div>
//               <Typography className={classes.instructions}>
//                 {getStepContent(activeStep)}
//               </Typography>
//               <div>
//                 {activeStep !== 0 && (
//                   <Button
//                     onClick={handleBack}
//                     style={{ marginTop: 20 }}
//                     className={classes.button}
//                     variant="contained"
//                     color="primary"
//                   >
//                     Back
//                   </Button>
//                 )}
//                 {/* {isStepOptional(activeStep) && (
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     onClick={handleSkip}
//                                     className={classes.button}
//                                 >
//                                     Skip
//                                 </Button>
//                             )} */}

//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleNext}
//                   style={{ marginTop: 20 }}
//                   className={classes.button}
//                 >
//                   {getStepButtonText(activeStep)}
//                   {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
//                 </Button>
//               </div>
//             </div>
//           )}
//         </Grid>
//       </div>
//     </Container>
//   );
// };

// export default PostPropertyPage;
