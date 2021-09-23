import React, { useEffect } from "react";
import { Typography, Box, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import * as CareerAction from "../../redux/actions/CareerAction";
import { useDispatch } from "react-redux";
import BreadCrumbs from "../../common/bread-crumbs";
import FormHeader from "../../common/form-header";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";

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
      status: status.target.value,
    };
    dispatch(CareerAction.CareerApplicationStatusUpdateRequestAsync(tempdata));
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
                  item?.jobName,
                  item?.firstName,
                  item?.lastName,
                  item?.mobile,
                  item?.qualification,
                  item?.message,
                  item?.status,
                  item?._id,
                ];
              })}
              columns={[
                "SR No.",
                "Job Name",
                "First Name",
                "Last Name",
                "Mobile",
                "Qualification",
                "Message",
                {
                  name: "Status",
                  options: {
                    customBodyRender: (value, tableMeta, updateValue) => {
                      if (value === 1) return "Applied";
                      else if (value === 2) return "Selected For Interview";
                      else if (value === 3) return "Selected";
                      else if (value === 4) return "Rejected";
                    },
                  },
                },
                {
                  name: "Actions",
                  options: {
                    customBodyRender: (value, tableMeta, updateValue) => {
                      return tableMeta.rowData[7] === 4 ? (
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
                          disabled
                        >
                          <option value="1">Applied</option>
                          <option value="2">Selected For Interview</option>
                          <option value="3">Selected </option>
                          <option value="4">Rejected </option>
                        </Select>
                      ) : (
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
                          <option value="1">Applied</option>
                          <option value="2">Selected For Interview</option>
                          <option value="3">Selected </option>
                          <option value="4">Rejected </option>
                        </Select>
                      );
                      // return (
                      //   <>
                      //     <Select
                      //       labelId="demo-simple-select-outlined-label"
                      //       id="demo-simple-select-outlined-label"
                      //       label="Role"
                      //       native
                      //       name="rating"
                      //       inputProps={{
                      //         name: "rating",
                      //         id: "age-native-simple",
                      //       }}
                      //       onChange={(e) => onDisable(tableMeta.rowData[8], e)}
                      //       value={tableMeta.rowData[7]}
                      //       disabled
                      //     >
                      //       <option value="1">Applied</option>
                      //       <option value="2">Selected For Interview</option>
                      //       <option value="3">Selected </option>
                      //       <option value="4">Rejected </option>
                      //     </Select>
                      //   </>
                      // );
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
