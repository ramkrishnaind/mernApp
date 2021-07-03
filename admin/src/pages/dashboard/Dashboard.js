import React, { Component } from "react";
import //Grid,
//LinearProgress,
// Select,
// OutlinedInput,
// MenuItem,
"@material-ui/core";
import Chart from "react-apexcharts";
// import { Chart } from 'react-charts'
// import 'font-awesome/css/font-awesome.min.css';
//import { userActions } from '../../_actions';
import { dashboardActions, userActions } from "../../_actions";
import "./MainPage.css";

import { connect } from "react-redux";
//import Widget from "../../components/Widget";
//import PageTitle from "../../components/PageTitle";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.markerClicked = this.markerClicked.bind(this);
    this.state = {
      markers: [],
      places: [],
      options: {
        chart: {
          id: "apexchart-example",
        },
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          name: "series-1",
          data: [],
        },
      ],
    };
  }
  componentDidMount() {
    let data = {
      countrycode: "ALL",
    };
    let orderData = {
      countrycode: "IND",
    };
    let lastOrder = {
      count: 30,
      countrycode: "ALL",
    };
    let UserGraphData = {
      days: 7,
      countrycode: "IND",
    };
    console.log(" orderData orderData in component", orderData);
    this.props.dispatch(dashboardActions.getDashboardUserCount(data));
    this.props.dispatch(dashboardActions.getDashboardOrderCount(orderData));
    this.props.dispatch(dashboardActions.getLastOrderlist(lastOrder));
    this.props.dispatch(
      dashboardActions.getDashboardUserGraphData(UserGraphData)
    );
    this.props.dispatch(userActions.getUserList());
  }

  static getDerivedStateFromProps(props, state) {
    const { dashboard } = props;
    const { dashboardUserGraph } = dashboard;
    console.log(dashboard);
    if (!state.options.xaxis.categories.length) {
      let series = dashboardUserGraph && dashboardUserGraph.countData;
      let category = [];
      dashboardUserGraph &&
        dashboardUserGraph.dateData &&
        dashboardUserGraph.dateData.length &&
        dashboardUserGraph.dateData.map((val) => {
          category.push(new Date(val).getDate());
        });

      category.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });

      return {
        options: { ...state.options, xaxis: { categories: category } },
        series: [{ data: series }],
      };
    }
    return null;
  }

  markerClicked(marker) {
    console.log("The marker that was clicked is", marker);
  }

  render() {
    let { dashboard, users } = this.props;
    let { dashboarddata, dashboardOrder, dashboardLastOrder } = dashboard;
    const getUserForLastOrder =
      users &&
      users.items &&
      users.items.length &&
      users.items.find(
        (val) => val.id == (dashboardLastOrder && dashboardLastOrder.userId)
      );
    return (
      <>
        <div>
          <div className="page-header">
            <h1 className="page-title">Dashboard</h1>
          </div>
        </div>
      </>
    );
  }
}
Dashboard.defaultProps = {
  center: { lat: 26.953021, lng: 75.739797 },
  zoom: 15,
};
function mapStateToProps(state) {
  // const { dashboard } = state.authentication;
  const { dashboard } = state;
  const { users } = state;
  return {
    dashboard,
    users,
  };
}
export default connect(mapStateToProps)(Dashboard);
