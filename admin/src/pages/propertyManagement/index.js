import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import * as PropertyAction from "../../redux/actions/PropertyAction";
import { useDispatch } from "react-redux";
import BreadCrumbs from "../../common/bread-crumbs";
import FormHeader from "../../common/form-header";
import { connect } from "react-redux";

import history from "../../components/history";
// MiUi styles
const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
});

const PropertyManagement = (props) => {
  // Store data
  const dispatch = useDispatch();

  //   Life cycle hooks
  useEffect(() => {
    dispatch(PropertyAction.GetPropertyListRequestAsync());
  }, []);

  return (
    <>
      <FormHeader
        heading1={"Property Module Management"}
        heading2={"List and Manage Property Here"}
      />
      <BreadCrumbs
        heading1={"PropertyManagement"}
        heading2={"Property Module List"}
      />
    </>
  );
};

function mapStateToProps(state) {
  const { menu } = state;
  return {
    menu,
  };
}
export default connect(mapStateToProps)(withStyles(styles)(PropertyManagement));
