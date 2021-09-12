import React, { useEffect, useState } from "react";
import { Typography, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import * as ReviewAction from "../../redux/actions/reviewAction";
import { useDispatch } from "react-redux";

import BreadCrumbs from "../../common/bread-crumbs";
import FormHeader from "../../common/form-header";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";

import Done from "@material-ui/icons/Done";
import Tooltip from "@material-ui/core/Tooltip";
import ClearIcon from "@material-ui/icons/Clear";

import history from "../../components/history";
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

const ReviewList = (props) => {
  const dispatch = useDispatch();
  let { classes, review } = props;

  useEffect(() => {
    dispatch(ReviewAction.ReviewListRequestAsync());
  }, []);

  let options = {
    selectableRows: false,
    print: false,
    download: true,
  };

  function onDisable(data, status) {
    let tempdata = {
      id: data,
      status: status,
    };
    dispatch(ReviewAction.ReviewStatusUpdateRequestAsync(tempdata));

    if (status === "enable") {
      // toast.error("Disable")
    } else {
      // toast.success("Enable")
    }
  }

  function onDeleteClick(data) {}

  function updatehandleOpenCreateModal(data) {
    // window.location.href = "/menu/edit?id="+data;
    history.push("/career/add?id=" + data);
    window.location.reload();
  }

  return (
    <>
      <Box className="MenuManagement_Data">
        <FormHeader
          heading1={"Callback Module Management"}
          heading2={"List and Manage Callback Here"}
        />
        <BreadCrumbs
          heading1={"CallbackManagement"}
          heading2={"Callback Module List"}
        />

        {review.list?.list && review.list?.list.length > 0 ? (
          <>
            <MUIDataTable
              className="table-header"
              title="Callback List"
              data={review.list?.list.map((item, index) => {
                return [
                  index + 1,
                  item.name,
                  item.email,
                  item.rating,
                  item.comment,
                  item.status,
                  item._id,
                ];
              })}
              columns={[
                "SR No.",
                "Name",
                "Email",
                "Rating",
                "Comment",
                {
                  name: "Status",
                  options: {
                    customBodyRender: (value, tableMeta, updateValue) => {
                      if (value === true) return "Open";
                      else return "Close";
                    },
                  },
                },
                {
                  name: "Actions",
                  options: {
                    customBodyRender: (value, tableMeta, updateValue) => {
                      return (
                        <>
                          {/* <EditIcon style={{ color: "#0069d9", cursor:"pointer" }} onClick={() => updatehandleOpenCreateModal(tableMeta.rowData[4])}/> */}

                          {tableMeta.rowData[5] ? (
                            <Tooltip title="Active">
                              <Done
                                onClick={() =>
                                  onDisable(tableMeta.rowData[6], false)
                                }
                                style={{ color: "#1e7e34", cursor: "pointer" }}
                              />
                            </Tooltip>
                          ) : (
                            <Tooltip title="Inactive">
                              <ClearIcon
                                onClick={() =>
                                  onDisable(tableMeta.rowData[6], true)
                                }
                                style={{ color: "#bd2130", cursor: "pointer" }}
                              />
                            </Tooltip>
                          )}

                          {/* <DeleteIcon style={{ color: "#bd2130", cursor:"pointer" }} onClick={() => onDeleteClick(tableMeta.rowData[5])} /> */}
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
  const { review } = state;
  return {
    review,
  };
}
export default connect(mapStateToProps)(withStyles(styles)(ReviewList));
