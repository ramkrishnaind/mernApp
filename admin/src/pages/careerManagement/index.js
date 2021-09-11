import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import * as CareerAction from "../../redux/actions/CareerAction";
import { useDispatch } from "react-redux";
import BreadCrumbs from "../../common/bread-crumbs";
import FormHeader from "../../common/form-header";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";
import Done from "@material-ui/icons/Done";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import history from "../../components/history";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#1976d2",
  },
});
const CareerList = (props) => {
  const dispatch = useDispatch();
  let { classes, career } = props;
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    dispatch(CareerAction.CareerListRequestAsync());
  }, []);

  let options = {
    selectableRows: false,
    print: false,
    download: true,
  };

  function onDisable(data, status) {
    let tempdata = {
      _id: data,
      active: status,
    };
    dispatch(CareerAction.CareerStatusUpdateRequestAsync(tempdata));

    if (status === "enable") {
      // toast.error("Disable")
    } else {
      // toast.success("Enable")
    }
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
            dispatch(CareerAction.CareerDeleteRequestAsync(tempdata)),
        },
        {
          label: "No",
        },
      ],
    });
  }

  function updatehandleOpenCreateModal(data) {
    // window.location.href = "/career/edit?id="+data;
    history.push("/career/add?id=" + data);
    window.location.reload();
  }

  return (
    <>
      <FormHeader
        heading1={"Career Module Management"}
        heading2={"List and Manage Career Here"}
      />
      <BreadCrumbs
        heading1={"CareerManagement"}
        heading2={"Career Module List"}
      />
      {typeof career.list === "undefined" ? (
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        ""
      )}
      {career.list && career.list.length > 0 ? (
        <>
          <MUIDataTable
            className="table-header"
            title="Career List"
            data={career.list.map((item, index) => {
              return [
                index + 1,
                item.degination,
                item.department,
                item.desctiption,
                item.experiance,
                item.location,
                item.vacancy,
                item.active,
                item._id,
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
                        <EditIcon
                          style={{ color: "#0069d9", cursor: "pointer" }}
                          onClick={() =>
                            updatehandleOpenCreateModal(tableMeta.rowData[8])
                          }
                        />

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
