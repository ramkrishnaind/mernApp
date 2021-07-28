import React, { useState } from "react";
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
} from "@material-ui/core";
import "./post-property.css";
import FieldsContainer from "./components/fields-container";
import Detail from "./components/details";
import propertyTypeOptions from "../../utils/property-type-options.json";
import Option from "./components/option";
import PropertyOptionManager from "./utils/PropertyOptionManager";
import Transaction from "./components/transaction";
import APP_CONSTANTS from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
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
const property_details_options = ["Sale", "Rent/Lease"];

const PostPropertyPage = (props) => {
  const classes = useStyles();

  const [isOwner, setIsOnwer] = React.useState(false);
  const [state, setState] = React.useState({});
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
    if (option === "Sale") {
      setPropertyForCurrentIndex(0);
    } else if (option === "Rent/Lease") {
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
    setCurrentAreaField({ fieldName, fieldValue });
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

  React.useEffect(() => {
    _getPropertyTypeOptions();
  }, [proeprtyForCurrentIndex]);

  React.useEffect(() => {
    console.log("-Form-Data-State-", state);
    console.log("-Property-Features-", propertyFeatures);
  }, [state, propertyFeatures]);

  const _renderOwnerBlock = () => {
    if (isOwner) {
      return (
        <Grid container>
          <Grid item xs={12} md={12} className={classes.style1}>
            <TextField
              label="Name"
              style={{ width: "25%" }}
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
                  style={{ width: "17.5%" }}
                  name="mobile_number"
                  onChange={handleChange}
                ></TextField>
              </Grid>
            </Grid>
            <TextField
              label="Email"
              style={{ width: "25%" }}
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
    if (state["property-type"]) {
      const formData =
        PropertyOptionManager.getFormFieldsBySelectedPropertyType(
          state["property-type"]
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
    const { fields, section: sectionName } = section || {};
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
   * @param {*} section - AREA
   */
  const _renderAreaSection = (section) => {
    // console.log('--SECTION AREA--', section);
    const { fields, section: sectionName } = section || {};
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
   * @param {*} section - TRANSACTION
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
                  key={index}
                  style={{ display: "flex", flexDirection: "column" }}
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
                    style={{ width: 300 }}
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
                        style={{ width: 300 }}
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
                  <Typography style={{ marginRight: 10 }}>{label}</Typography>
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

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography className={classes.text1}>
            Sell or Rent your Property
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <FieldsContainer label="Personal Details">
            <Grid container>
              <Grid item xs={12} md={12}>
                <Detail
                  title="I am"
                  options={personal_details_options}
                  onOptionSelectListener={onOptionSelectListener}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                {_renderOwnerBlock()}
              </Grid>
            </Grid>
          </FieldsContainer>
        </Grid>
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
                  value={state["property-type"]}
                  onChange={handleChange}
                  inputProps={{
                    name: "property-type",
                    id: "property-type",
                  }}
                  style={{ height: 48, marginRight: 5, maxHeight: 200 }}
                >
                  {propertyOptions.items.map((item, index) => {
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
        <Grid item xs={12} md={12}>
          <FieldsContainer label="Property Location">
            <Grid container>
              <Grid item xs={12} md={12} className={classes.style1}>
                <TextField
                  label="City"
                  placeholder="Enter City"
                  style={{ width: "25%" }}
                  onChange={handleChange}
                  name="city"
                />
                <TextField
                  label="Locality"
                  placeholder="Enter Locality"
                  style={{ width: "25%" }}
                  onChange={handleChange}
                  name="property_location"
                />
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
      </Grid>
    </Container>
  );
};

export default PostPropertyPage;
