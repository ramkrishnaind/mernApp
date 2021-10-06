import React, { useEffect } from "react";
import { Typography, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import * as NewsletterAction from "../../redux/actions/NewsletterAction";
import { useDispatch } from "react-redux";
import BreadCrumbs from "../../common/bread-crumbs";
import FormHeader from "../../common/form-header";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";
import Done from "@material-ui/icons/Done";
import Tooltip from "@material-ui/core/Tooltip";
import ClearIcon from "@material-ui/icons/Clear";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import DeleteIcon from "@material-ui/icons/Delete";

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

const NewsletterList = (props) => {
  const dispatch = useDispatch();

  let { newsletter } = props;

  useEffect(() => {
    dispatch(NewsletterAction.NewsletterListRequestAsync());
  }, [dispatch]);

  let options = {
    selectableRows: false,
    print: false,
    download: true,
  };

  function onDisable(data, status) {
    let tempdata = {
      id: data,
      isResolved: status,
    };
    dispatch(NewsletterAction.NewsletterStatusUpdateRequestAsync(tempdata));
  }

  function onDeleteClick(data) {
    let tempdata = {
      _id: data,
    };
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            dispatch(NewsletterAction.NewsletterDeleteRequestAsync(tempdata)),
        },
        {
          label: "No",
        },
      ],
    });
  }

  return (
    <>
      <Box className="MenuManagement_Data">
        <FormHeader
          heading1={"News Letter Module Management"}
          heading2={"List and Manage News Letter Here"}
        />
        <BreadCrumbs
          heading1={"NewsletterManagement"}
          heading2={"News Letter Module List"}
        />

        {newsletter?.list?.list && newsletter?.list?.list?.length > 0 ? (
          <>
            <MUIDataTable
              className="table-header"
              title="News Letter List"
              data={newsletter?.list?.list?.map((item, index) => {
                return [
                  index + 1,
                  item.name,
                  item.email,
                  item.mobile,
                  item.subject,
                  item.message,
                  item.isResolved,
                  item._id,
                ];
              })}
              columns={[
                "SR No.",
                "Name",
                "Email",
                "Phone",
                "Subject",
                "message",
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
                          {/* <EditIcon style={{ color: "#0069d9", cursor: "pointer" }} onClick={() => updatehandleOpenCreateModal(tableMeta.rowData[4])} /> */}

                          {tableMeta.rowData[6] ? (
                            <Tooltip title="Active">
                              <Done
                                onClick={() =>
                                  onDisable(tableMeta.rowData[7], false)
                                }
                                style={{ color: "#1e7e34", cursor: "pointer" }}
                              />
                            </Tooltip>
                          ) : (
                            <Tooltip title="Inactive">
                              <ClearIcon
                                onClick={() =>
                                  onDisable(tableMeta.rowData[7], true)
                                }
                                style={{ color: "#bd2130", cursor: "pointer" }}
                              />
                            </Tooltip>
                          )}

                          <DeleteIcon
                            style={{ color: "#bd2130", cursor: "pointer" }}
                            onClick={() => onDeleteClick(tableMeta.rowData[8])}
                          />
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
  const { newsletter } = state;
  return {
    newsletter,
  };
}
export default connect(mapStateToProps)(withStyles(styles)(NewsletterList));
