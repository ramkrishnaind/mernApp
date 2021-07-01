import React, { Component } from "react";
import {
  Grid,
  Button,
  Typography,
  CssBaseline,
  TextField,
} from "@material-ui/core";
import { connect } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import AddAdminDialog from "./components/AddAdminDialog/AddAdminDialog";
import UpdateAdminDialog from "./components/UpdateAdminDialog/UpdateAdminDialog";
import Widget from "../../components/Widget/Widget";
import Table from "./components/Table/Table";
import { adminActions, userActions } from "../../_actions";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import { withRouter } from "react-router";
import styles from "./styles";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const theme = createMuiTheme();
class adminManagement extends Component {
  constructor(props) {
    super(props);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOpenCreateModal = this.handleOpenCreateModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onDisable = this.onDisable.bind(this);
    this.updatehandleChangeInput = this.updatehandleChangeInput.bind(this);
    this.updatehandleSubmit = this.updatehandleSubmit.bind(this);
    this.updatehandleOpenCreateModal = this.updatehandleOpenCreateModal.bind(
      this,
    );
    this.state = {
      markers: [],
      places: [],
      offset: 0,
      size: 10,
      page: 1,
      email: "",
      adminCreateModal: false,
      updateadminCreateModal: false,
      submitted: false,
      keyWord: "",
      formData: {
        name: "",
      },
      updateformData: {
        id: "",
        name: "",
      },
    };
  }
  componentDidMount() {
    let data = {
      keyWord: "",
      pageNo: 1,
      size: this.state.size,
    };
    this.props.dispatch(adminActions.getAdminList(data));
    this.props.dispatch(adminActions.getRoles());
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.admin.addAdminSuccess) {
      return {
        ...nextProps,
        formData: {
          name: "",
          details: "",
          months: "",
          rate: "",
        },
        adminCreateModal: false,
        updateadminCreateModal: false,
      };
    } else {
      return {
        ...nextProps,
      };
    }
  }
 
  handleClick = (offset, page) => {
    this.setState({ offset, page });
    let data = {
      keyWord: this.state.keyWord,
      pageNo: page,
      size: this.state.size,
    };
    this.props.dispatch(adminActions.getAdminList(data));
  };
  handleSearch(event) {
    event.preventDefault();
    let { value } = event.target;
    this.setState({ keyWord: value, offset: 0 });
    let data = {
      keyWord: value,
      pageNo: 1,
      size: this.state.size,
    };
    this.props.dispatch(adminActions.getAdminList(data));
  }
  handleOpenCreateModal() {
    this.setState({ adminCreateModal: true });
  }
  updatehandleOpenCreateModal(data) {
    data['roleId']= data.role?.id;
    this.setState({ updateadminCreateModal: true, updateformData: data });
  }
  handleClose() {
    this.setState({ adminCreateModal: false });
  }
  updatehandleClose() {
    this.setState({ updateadminCreateModal: false });
  }
  handleChange = (event) => {
    const email = event.target.value;
    this.setState({ email });
  };
  handleChangeInput = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };
  updatehandleChangeInput = (event) => {
    const { updateformData } = this.state;
    updateformData[event.target.name] = event.target.value;
    this.setState({ updateformData });
  };

  handleSubmit = () => {
    let reqData = {
      name:this.state.formData.name,
      email:this.state.formData.email,
      password:this.state.formData.password,
      contactNo:this.state.formData.contactNo,
      role:this.state.formData.role,
      status:this.state.formData.status
    };
    console.log("reqData  ", reqData);
    this.props.dispatch(adminActions.addAdmin(reqData));
  };
  
  updatehandleSubmit = () => {
    let reqData = {
      id: this.state.updateformData.id,
      name:this.state.updateformData.name,
      // email:this.state.updateformData.email,
      // password:this.state.updateformData.password,
      contactNo:this.state.updateformData.contactNo,
      role:this.state.updateformData.roleId,
      status:this.state.updateformData.status
      
    };
    console.log("reqData  ", reqData);
    this.props.dispatch(adminActions.updateAdmin(reqData));
  };

  onChangeFile(event) {
    this.props.dispatch(
      adminActions.uploadImage(
        event.target.files[event.target.files.length - 1],
      ),
    );
  }
  onRowClick(data) {
    this.props.history.push(`/app/restaurants/${data.id}`);
  }
  onDeleteClick(data) {
    console.log(data);
    let tempdata = {
      id: data.id,
      keyWord: this.state.keyWord,
      pageNo: this.state.page,
      size: this.state.size,
    };

    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.dispatch(adminActions.deleteAdmin(tempdata)),
        },
        {
          label: "No",
        },
      ],
    });
  }
  onDisable(data) {
    console.log(data);
    let tempdata = {
      id: data.id,
      keyWord: this.state.keyWord,
      pageNo: this.state.page,
      size: this.state.size,
    };
    //console.log("asdf :: ",tempdata);
    this.props.dispatch(adminActions.disableAdmin(tempdata));
  }
  render() {
    let { admin, classes, users } = this.props;
    let { items, getRoles } = admin;
    let { filesDetails } = users;

    return (
      <>
        <PageTitle title="Admin" />
        <Grid container>
          <Grid item xs={12}>
            <Widget>
              <Grid container>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleOpenCreateModal()}
                    className={classes.button}
                  >
                    Add
                  </Button>
                </Grid>
                <Grid item xs={6} />
                <Grid item xs={4}>
                  <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    name="keyWord"
                    variant="outlined"
                    onChange={this.handleSearch}
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>
              </Grid>

              {items && items.length > 0 ? (
                <>
                  <Table
                    data={items}
                    offset={this.state.offset}
                    onRowClick={this.onRowClick}
                    updatehandleOpenCreateModal={
                      this.updatehandleOpenCreateModal
                    }
                    onDeleteClick={this.onDeleteClick}
                    onDisable={this.onDisable}
                  />
                </>
              ) : (
                <Typography>Data not found.</Typography>
              )}
              {items && items.length > 10 ? (
                <MuiThemeProvider theme={theme}>
                  <CssBaseline />
                  <Pagination
                    limit={this.state.size}
                    offset={this.state.offset}
                    total={items.length}
                    onClick={(e, offset, page) =>
                      this.handleClick(offset, page)
                    }
                  />
                </MuiThemeProvider>
              ) : null}
            </Widget>
          </Grid>
        </Grid>
        <AddAdminDialog
          adminCreateModal={this.state.adminCreateModal}
          classes={classes}
          getRoles={getRoles}
          
          formData={this.state.formData}
          handleSubmit={this.handleSubmit}
          handleChangeInput={this.handleChangeInput}
          handleClose={this.handleClose}
          handleFileLogo={this.handleFileLogo}
          handleUploadLogo={this.handleUploadLogo}
          filesDetails={filesDetails}
        />
        <UpdateAdminDialog
          updateadminCreateModal={this.state.updateadminCreateModal}
          classes={classes}
          getRoles={getRoles}
          updateformData={this.state.updateformData}
          updatehandleSubmit={this.updatehandleSubmit}
          updatehandleChangeInput={this.updatehandleChangeInput}
          updatehandleClose={this.updatehandleClose}
        />
      </>
    );
  }
}
function mapStateToProps(state) {
  const { admin, users } = state;
  return {
    users,
    admin
  };
}
export default connect(mapStateToProps)(
  withStyles(styles)(withRouter(adminManagement)),
);
