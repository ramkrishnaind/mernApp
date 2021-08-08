import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  Select,
  Box,
  Link,
  Container,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import _ from "lodash";
import classes from "./makeStyles";
import FieldsContainer from "./components/fields-container";
import Detail from "./components/details";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import * as PropertyAction from "../../redux/actions/PropertyAction";
import { useDispatch } from "react-redux";
import FormHeader from "../../common/form-header";
import BreadCrumbs from "../../common/bread-crumbs";
import "./propertyManagement.css";
import SubHeading from "../../common/SubHeadingBox";
import {
  BrowserRouter as Router,
  Link as RouterLink,
  useLocation,
} from "react-router-dom";
import propertyTypeOptions from "../../utils/property-type-options.json";
import PropertyOptionManager from "./utils/PropertyOptionManager";
import APP_CONSTANTS from "../../utils/constant";
import Option from "./components/option";
import Transaction from "./components/transaction";

const personal_details_options = ["Owner", "Agent", "Builder"];
const property_details_options = ["Sale", "Rent/Lease"];

const PropertyCreateUpdate = (props) => {
  // store data
  const dispatch = useDispatch();
  //   state
  const [refresh, setRefresh] = useState(false);
  const [state, setState] = useState({});
  const [isOwner, setIsOwner] = React.useState(false);
  const [propertyOptions, setPropertyOptions] = React.useState([]);
  const [formFields, setFormFields] = React.useState(null);
  const [propertyFeatures, setSectionFeatures] = React.useState({});
  const [currentAreaField, setCurrentAreaField] = React.useState({});
  const [areaUnit, setAreaUnit] = React.useState("");

  // Life cycle hooks
  useEffect(() => { }, []);

  useEffect(() => {
    if (state["property-type"]) {
      const formData =
        PropertyOptionManager.getFormFieldsBySelectedPropertyType(
          state["property-type"]
        );
      setFormFields(formData);
    }
  }, [state]);

  useEffect(() => {
    console.log("-Form-Data-State-", state);
    console.log("-Property-Features-", propertyFeatures);
  }, [state, propertyFeatures]);

  // Extra methods
  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
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
  };

  const onOptionSelectListener = (option) => {
    console.log("-Personal-Info- Option-", option);
    if (option === "Owner") {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
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
    setCurrentAreaField({ fieldName, fieldValue });
  };

  const handleAreaUnitChange = (event) => {
    event.preventDefault();
    const fieldUnit = event.target.value;
    const { fieldName, fieldValue } = currentAreaField;
    setState({
      ...state,
      [fieldName]: {
        size: fieldValue,
        unit: fieldUnit,
      },
    });
  };

  const onTransactionOptionSelectListener = (data) => {
    setState({
      ...state,
      [data.title]: data.value,
    });
  };
  const handleSubmit = (e) => { };

  // Render methods

  /**
   *
   * @param {*} section - OwnerBlock
   */
  const _renderOwnerBlock = () => {
    return (
      <Grid container>
        <Grid item xs={12} md={12} className={classes.style1}>
          <TextField
            label="Name"
            // style={{ width: "25%" }}
            name="owner_name"
            onChange={handleChange}
          ></TextField>
          <Grid container>
            <Grid item xs={12} md={12} className={classes.style2}>
              <Select
                native
                value={state["country_code"]}
                onChange={handleChange}
                inputProps={{ name: "country_code" }}
                style={{ height: 48, marginRight: 5 }}
              >
                <option value={10}>IND +91</option>
                <option value={20}>PAK +92</option>
              </Select>
              <TextField
                label="Mobile"
                // style={{ width: "17.5%" }}
                name="mobile_number"
                onChange={handleChange}
              ></TextField>
            </Grid>
          </Grid>
          <TextField
            label="Email"
            // style={{ width: "25%" }}
            onChange={handleChange}
            name="owner_email"
          ></TextField>
        </Grid>
      </Grid>
    );
  };

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
                      value={state["property-type"]}
                      onChange={handleChange}
                      inputProps={{ name: "property-type" }}
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
                      style={{ width: 400 }}
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
                        style={{ height: 48, marginRight: 5, maxHeight: 200 }}
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
            const { label, type, values, unit, units, placeholder, data } =
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
   * @param {*} section - PriceSection
   */
  const _renderPriceSection = (section) => {
    // console.log("SECTION PRICE--", section);
    const { fields, section: sectionName } = section || {};
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
              return data.map((e, index) => {
                return (
                  <Grid item xs={12} md={3} key={index}>
                    <TextField
                      label={e.label}
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
                    placeholder={placeholder}
                    onChange={handleChange}
                    style={{ width: 300 }}
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
                        name={e.fieldName}
                        onChange={handleChange}
                        placeholder={e.placeholder}
                        style={{ width: 300 }}
                      />
                    </Grid>
                  );
                } else if (e.type === "dropdown") {
                  return (
                    <Grid item xs={12} md={4} key={i}>
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
                      {isOwner && (
                        <Grid item xs={12} md={12}>
                          {_renderOwnerBlock()}
                        </Grid>
                      )}
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
                          value={state["property-type"]}
                          onChange={handleChange}
                          inputProps={{
                            name: "property-type",
                            id: "property-type",
                          }}
                          style={{ height: 48, marginRight: 5, maxHeight: 200 }}
                        >
                          <option value={null}>Select Property Type</option>
                          {propertyOptions?.items?.length > 0 &&
                            propertyOptions?.items?.map((item, index) => {
                              return (
                                <option key={index} value={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                        </Select>
                      </Grid>
                    </Grid>
                  </FieldsContainer>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FieldsContainer label="Property Location">
                    <Grid container>
                      <Grid item xs={12} md={12} className={classes.style1}>
                        <TextField
                          label="City"
                          placeholder="Enter City"
                          style={{ width: "auto" }}
                          onChange={handleChange}
                          name="city"
                        ></TextField>
                        <br />
                        <TextField
                          label="Locality"
                          placeholder="Enter Locality"
                          style={{ width: "auto" }}
                          onChange={handleChange}
                          name="property_location"
                        ></TextField>
                      </Grid>
                    </Grid>
                  </FieldsContainer>
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

export default PropertyCreateUpdate;
