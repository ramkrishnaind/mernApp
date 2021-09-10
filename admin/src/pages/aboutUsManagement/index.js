import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import * as AboutUsAction from "../../redux/actions/AboutUsAction";
import { useDispatch } from "react-redux";

import BreadCrumbs from "../../common/bread-crumbs";
import FormHeader from "../../common/form-header";
import { connect } from "react-redux";
import MUIDataTable from "mui-datatables";
import EditIcon from "@material-ui/icons/Edit";

import history from "../../components/history";
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

const AboutUsList = (props) => {
  const dispatch = useDispatch();
  let { classes, aboutus } = props;
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    dispatch(AboutUsAction.AboutUsListRequestAsync());
  }, []);

  let options = {
    selectableRows: false,
    print: false,
    download: true,
  };

  function updatehandleOpenCreateModal(data) {
    // window.location.href = "/aboutus/edit?id="+data;
    history.push("/aboutus/add");
    window.location.reload();
  }

  return (
    <>
      <FormHeader
        heading1={"About Us Module Management"}
        heading2={"List and Manage About Us Here"}
      />
      <BreadCrumbs
        heading1={"AboutUsManagement"}
        heading2={"About Us Module List"}
      />
      {typeof aboutus.list === "undefined" ? (
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        ""
      )}

      {aboutus.list && aboutus.list.length > 0 ? (
        <>
          <MUIDataTable
            className="table-header"
            title="About Us List"
            data={aboutus.list.map((item, index) => {
              return [
                index + 1,
                item?.header,
                item?.title,
                item?.description,
                item?._id,
              ];
            })}
            columns={[
              "SR No.",
              "Header",
              "Title",
              "Description",
              {
                name: "Actions",
                options: {
                  customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                      <>
                        <EditIcon
                          style={{ color: "#0069d9", cursor: "pointer" }}
                          onClick={() =>
                            updatehandleOpenCreateModal(tableMeta.rowData[4])
                          }
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
  const { aboutus } = state;
  return {
    aboutus,
  };
}
export default connect(mapStateToProps)(withStyles(styles)(AboutUsList));
