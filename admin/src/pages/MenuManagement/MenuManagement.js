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
import AddMenuDialog from "./components/AddMenuDialog/AddMenuDialog";
import UpdateMenuDialog from "./components/UpdateMenuDialog/UpdateMenuDialog";
import Widget from "../../components/Widget/Widget";
import Table from "./components/Table/Table";
import { toast } from 'react-toastify';

import { menuActions, userActions } from "../../_actions";
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
class MenuManagement extends Component {
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
    this.updatehandleClose = this.updatehandleClose.bind(this);
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
      menuCreateModal: false,
      updatemenuCreateModal: false,
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

    // console.log('localStorage.getItem()',localStorage.getItem('user'));

    let data = {
      type: "lo",
      keyWord: "",
      pageNo: 1,
      size: 5,
      // keyWord: "",
      // pageNo: 1,
      // size: this.state.size,
      // userRole:["test1"]
    };
    this.props.dispatch(menuActions.getMenuList(data));
    // this.props.dispatch(menuActions.getAllMenu());
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.menu.addMenuSuccess) {
      return {
        ...nextProps,
        formData: {
          name: "",
          details: "",
          months: "",
          rate: "",
        },
        menuCreateModal: false,
        updatemenuCreateModal: false,
      };
    } else {
      return {
        ...nextProps,
      };
    }
  }
  handleFileLogo = (event) => {
    console.log("eventeventeventevent", event.target.files[0]);
    this.setState({ selectedFileLogo: event.target.files[0] });
  };

  handleUploadLogo = () => {
    if (this.state.selectedFileLogo) {
      this.props.dispatch(userActions.uploadImage(this.state.selectedFileLogo));
      this.setState({ selectedFileLogo: null });
    } else {
      console.log("No File To Upload!");
    }
  };

  handleFileMainImage = (event) => {
    this.setState({ selectedFileMainImage: event.target.files[0] });
  }

  handleUploadMainImage = () => {
    if (this.state.selectedFileMainImage) {
      this.props.dispatch(userActions.uploadMainImage(this.state.selectedFileMainImage));
      this.setState({ selectedFileMainImage: null });
    }
    else {
      console.log("No File To Upload!")
    }
  }

  handleClick = (offset, page) => {
    this.setState({ offset, page });
    let data = {
      keyWord: this.state.keyWord,
      pageNo: page,
      size: this.state.size,
    };
    this.props.dispatch(menuActions.getMenuList(data));
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
    this.props.dispatch(menuActions.getMenuList(data));
  }
  handleOpenCreateModal() {
    this.setState({ menuCreateModal: true });
  }
  updatehandleOpenCreateModal(data) {
    this.setState({ updatemenuCreateModal: true, updateformData: data });
  }
  handleClose() {
    this.setState({ menuCreateModal: false });
  }
  updatehandleClose() {
    this.setState({ updatemenuCreateModal: false });
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
    let { users } = this.props;
    let { filesDetails,UploadedMainImage } = users;
    let reqData = {
      name: this.state.formData.name,
      parent_id: this.state.formData.parent_id,
      image:filesDetails && filesDetails.imageName ? filesDetails.imageName: "",
      listPageImage:UploadedMainImage && UploadedMainImage.imageName ? UploadedMainImage.imageName: "",
    };
    console.log("reqData  ", reqData);
    this.props.dispatch(menuActions.addMenu(reqData));
  };
  updatehandleSubmit = () => {
    let { users } = this.props;
    let { filesDetails,UploadedMainImage } = users;
    let reqData = {
      id: this.state.updateformData.id,
      name: this.state.updateformData.name,
      image:filesDetails && filesDetails.imageName? filesDetails.imageName: this.state.updateformData.image,
      listPageImage:UploadedMainImage && UploadedMainImage.imageName? UploadedMainImage.imageName: this.state.updateformData.listPageImage,
    };
    console.log("reqData  ", reqData);

    this.props.dispatch(menuActions.updateMenu(reqData));
  };
  onChangeFile(event) {
    this.props.dispatch(
      menuActions.uploadImage(
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
          onClick: () => this.props.dispatch(menuActions.deleteMenu(tempdata)),
        },
        {
          label: "No",
        },
      ],
    });
  }
  onDisable(data,status) {
    console.log(data);
    let tempdata = {
      id: data.id,
      keyWord: this.state.keyWord,
      pageNo: this.state.page,
      size: this.state.size,
    };
    //console.log("asdf :: ",tempdata);
    this.props.dispatch(menuActions.disableMenu(tempdata));
    if(status==="enable"){
      toast.error("Disable")

    }
  else{
    toast.success("Enable")

  }
  }
  render() {
    let { menu, classes, users } = this.props;
    let { items, total, getAllMenu } = menu;
    let { filesDetails,UploadedMainImage } = users;
    
    return (
      <>
        <PageTitle title="Menu" />
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
              {total && total > 10 ? (
                <MuiThemeProvider theme={theme}>
                  <CssBaseline />
                  <Pagination
                    limit={this.state.size}
                    offset={this.state.offset}
                    total={total}
                    onClick={(e, offset, page) =>
                      this.handleClick(offset, page)
                    }
                  />
                </MuiThemeProvider>
              ) : null}
            </Widget>
          </Grid>
        </Grid>
        <AddMenuDialog
          getAllMenu={getAllMenu}
          menuCreateModal={this.state.menuCreateModal}
          classes={classes}
          formData={this.state.formData}
          handleSubmit={this.handleSubmit}
          handleChangeInput={this.handleChangeInput}
          handleClose={this.handleClose}
          handleFileLogo={this.handleFileLogo}
          handleUploadLogo={this.handleUploadLogo}
          filesDetails={filesDetails}
          handleFileMainImage = {this.handleFileMainImage}
          handleUploadMainImage = {this.handleUploadMainImage}
          UploadedMainImage={UploadedMainImage}
        />
        <UpdateMenuDialog
          updatemenuCreateModal={this.state.updatemenuCreateModal}
          classes={classes}
          updateformData={this.state.updateformData}
          updatehandleSubmit={this.updatehandleSubmit}
          updatehandleChangeInput={this.updatehandleChangeInput}
          updatehandleClose={this.updatehandleClose}
          handleFileLogo={this.handleFileLogo}
          handleUploadLogo={this.handleUploadLogo}
          filesDetails={filesDetails}
          handleFileMainImage = {this.handleFileMainImage}
          handleUploadMainImage = {this.handleUploadMainImage}
          UploadedMainImage = {UploadedMainImage}
        />
      </>
    );
  }
}
function mapStateToProps(state) {
  const { menu, users } = state;
  return {
    menu,
    users,
  };
}
export default connect(mapStateToProps)(
  withStyles(styles)(withRouter(MenuManagement)),
);
