import React, { Component } from 'react';
import { Grid } from "@material-ui/core";
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import Divider from '@material-ui/core/Divider';
import moment from 'moment';

import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";
import { Button } from "../../components/Wrappers";
const theme = createMuiTheme();

const states = {
  true: "success",
  false: "warning",
  declined: "secondary",
};

//export default function NotificationsPage(props) {
class NotificationsPage extends Component {

  constructor(props) {
    super(props);
    //this.markerClicked = this.markerClicked.bind(this);
    //this.changePagination = this.changePagination.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.state = {
      // markers: [],
      // places: [],
      offset: 0
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(userActions.getAllNotification(data));
  }
  // changePagination = (e) => {
  //   e.preventDefault();
  //   let { name, value } = e.target;
  //   console.log("e.target :: ", e.target);
  //   console.log("name :: ", name);
  //   console.log("value :: ", value);

  //   this.setState(prevState => {
  //     return { pageNo: prevState.pageNo + 1 }
  //   });
  // }
  handleClick(offset, page) {
    console.log("page  ", page);
    console.log("offset  ", offset);

    this.setState({ offset,page });
    let data = {
      "keyWord": "",
      "pageNo": page,
      "size": 10
    }
    this.props.dispatch(userActions.getAllNotification(data));
  }
  handleUpdateClick(data) {
    //console.log(data);
    
    let tempdata={
      contactId:data.id,
      "pageNo": this.state.pageNo,
      "size": 10
    }
    console.log("lll   ",tempdata);
    
    this.props.dispatch(userActions.updateContact(tempdata));
  }
  render() {
    let { users } = this.props;
    let { listOfNotification, listOfNotificationtotal } = users;
    return (
      <>
        <PageTitle title="Notifications" />
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Widget title="Request List" upperTitle noBodyPadding>
              <Table className="mb-0">
                <TableHead>
                  <TableRow>
                    <TableCell >S. NO.</TableCell>
                    <TableCell >NAME</TableCell>
                    <TableCell >EMAIL</TableCell>
                    <TableCell >SUBJECT</TableCell>
                    <TableCell >MESSAGE</TableCell>
                    <TableCell >TIME</TableCell>
                    <TableCell >STATUS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listOfNotification && listOfNotification.length > 0 ? listOfNotification.map((data, index) => (
                    <TableRow key={index}>
                      <TableCell className="pl-3 fw-normal">{this.state.offset + index + 1}</TableCell>
                      <TableCell className="pl-3 fw-normal">{data.name}</TableCell>
                      <TableCell>{data.email}</TableCell>
                      <TableCell>{data.subject}</TableCell>
                      <TableCell>{data.message}</TableCell>
                      <TableCell>{moment(new Date(parseInt(data.createdAt))).utcOffset("+05:30").format("YYYY-MM-DD")}</TableCell>
                      <TableCell>
                        <Button
                          color={states[data.isAnswered]}
                          size="small"
                          className="px-2"
                          variant="contained"
                          onClick={()=>this.handleUpdateClick(data)}
                        >
                          {data.isAnswered ? 'Answered' : 'Pending'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  )) : null}
                </TableBody>
              </Table>
              <Divider />
              {listOfNotificationtotal && listOfNotificationtotal > 10 ?
                <MuiThemeProvider theme={theme}>
                  <CssBaseline />
                  <Pagination
                    limit={10}
                    offset={this.state.offset}
                    total={listOfNotificationtotal}
                    size='large'
                    onClick={(e, offset, page) => this.handleClick(offset, page)}
                  />
                </MuiThemeProvider> : null}
            </Widget>
          </Grid>
        </Grid>
      </>
    )
  }
}
function mapStateToProps(state) {
  //console.log("state  ", state);
  const { loggingIn } = state.authentication;
  const { users } = state;
  return {
    loggingIn,
    users
  };
}
export default connect(mapStateToProps)(NotificationsPage);

