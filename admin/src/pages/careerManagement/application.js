import React, { useEffect } from "react";
import { Typography, Box, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import * as CareerAction from "../../redux/actions/CareerAction";
import { useDispatch } from "react-redux";
import BreadCrumbs from "../../common/bread-crumbs";
import FormHeader from "../../common/form-header";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";
import Done from "@material-ui/icons/Done";
import Tooltip from "@material-ui/core/Tooltip";
import ClearIcon from "@material-ui/icons/Clear";

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
const CareerList = (props) => {
  const dispatch = useDispatch();
  let { career } = props;

  useEffect(() => {
    dispatch(CareerAction.CareerApplicationListRequestAsync());
  }, []);

  let options = {
    selectableRows: false,
    print: false,
    download: true,
  };

  function onDisable(data, status) {
    let tempdata = {
      _id: data,
      active: status.target.value,
    };
    // dispatch(CareerAction.CareerApplicationStatusUpdateRequestAsync(tempdata));

    if (status === "enable") {
      // toast.error("Disable")
    } else {
      // toast.success("Enable")
    }
  }

  return (
    <>
      <Box className="MenuManagement_Data">
        <FormHeader
          heading1={"Career Application Management"}
          heading2={"List and Manage Application Here"}
        />
        <BreadCrumbs
          heading1={"CareerManagement"}
          heading2={"Career Application List"}
        />

        {career?.applicationList && career?.applicationList?.length > 0 ? (
          <>
            <MUIDataTable
              className="table-header"
              title="Application List"
              data={career?.applicationList.map((item, index) => {
                return [
                  index + 1,
                  item?.degination,
                  item?.department,
                  item?.desctiption,
                  item?.experiance,
                  item?.location,
                  item?.vacancy,
                  item?.active,
                  item?._id,
                ];
              })}
              columns={[
                "SR No.",
                "Degination",
                "Department",
                "Description",
                "Experiance",
                "Location",
                "Vacancy",
                {
                  name: "Status",
                  options: {
                    customBodyRender: (value, tableMeta, updateValue) => {
                      if (value === true) return "Active";
                      else return "Inactive";
                    },
                  },
                },
                {
                  name: "Actions",
                  options: {
                    customBodyRender: (value, tableMeta, updateValue) => {
                      return (
                        <>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined-label"
                            label="Role"
                            native
                            name="rating"
                            inputProps={{
                              name: "rating",
                              id: "age-native-simple",
                            }}
                            onChange={(e) => onDisable(tableMeta.rowData[8], e)}
                            value={tableMeta.rowData[7]}
                          >
                            <option value={false}>Inactive</option>
                            <option value={true}>Active</option>
                          </Select>
                          {tableMeta.rowData[7] ? (
                            <Tooltip title="Active">
                              <Done
                                onClick={() =>
                                  onDisable(tableMeta.rowData[8], false)
                                }
                                style={{ color: "#1e7e34", cursor: "pointer" }}
                              />
                            </Tooltip>
                          ) : (
                            <Tooltip title="Inactive">
                              <ClearIcon
                                onClick={() =>
                                  onDisable(tableMeta.rowData[8], true)
                                }
                                style={{ color: "#bd2130", cursor: "pointer" }}
                              />
                            </Tooltip>
                          )}
                        </>
                      );
                    },
                  },
                },
              ]}
              options={options}
            />
          </>
        ) : (
          <Typography>Data not found.</Typography>
        )}
      </Box>
    </>
  );
};

function mapStateToProps(state) {
  const { career } = state;
  return {
    career,
  };
}
export default connect(mapStateToProps)(withStyles(styles)(CareerList));
