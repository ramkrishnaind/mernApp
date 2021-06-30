import { dashboardConstants } from '../_constants';

export function dashboard(state = {}, action) {
  // console.log("action.typeaction.typeaction.type  ", action);

  switch (action.type) {

    case dashboardConstants.GETALL_DASHBOARD_USERGRAPH_DATA_REQUEST:
      return {
        loading: true,
        items: state.items,
        listOfResource: state.listOfResource,
        total: state.total
      };
    case dashboardConstants.GETALL_DASHBOARD_USERGRAPH_DATA_SUCCESS:
      return {
        ...state,
        dashboardUserGraph: action.dashboards,
        tempDash: {
          options: {
            chart: {
              id: 'apexchart-example'
            },
            xaxis: {
              categories: action.dashboards.dateData
            }
          },
          series: [{
            name: 'series-1',
            data: action.dashboards.countData
          }]
        }

      };
    case dashboardConstants.GETALL_DASHBOARD_USERGRAPH_DATA_FAILURE:
      return {
        error: action.error
      };


    case dashboardConstants.GETALL_DASHBOARD_LASTORDER_COUNT_REQUEST:
      return {
        loading: true,
        items: state.items,
        listOfResource: state.listOfResource,
        total: state.total
      };
    case dashboardConstants.GETALL_DASHBOARD_LASTORDER_COUNT_SUCCESS:
      return {
        ...state,
        dashboardLastOrder: action.dashboards.dashboardLastOrder,

      };
    case dashboardConstants.GETALL_DASHBOARD_LASTORDER_COUNT_FAILURE:
      return {
        error: action.error
      };


    case dashboardConstants.GETALL_DASHBOARD_ORDER_COUNT_REQUEST:
      return {
        loading: true,
        items: state.items,
        listOfResource: state.listOfResource,
        total: state.total
      };
    case dashboardConstants.GETALL_DASHBOARD_ORDER_COUNT_SUCCESS:
      return {
        ...state,
        dashboardOrder: action.dashboards.dashboardOrder,

      };
    case dashboardConstants.GETALL_DASHBOARD_ORDER_COUNT_FAILURE:
      return {
        error: action.error
      };



    case dashboardConstants.GETALL_DASHBOARD_REQUEST:
      return {
        loading: true,
        items: state.items,
        listOfResource: state.listOfResource,
        total: state.total
      };
    case dashboardConstants.GETALL_DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboarddata: action.dashboards.dashboarddata,

      };
    case dashboardConstants.GETALL_DASHBOARD_FAILURE:
      return {
        error: action.error
      };



    case dashboardConstants.GETALL_DASHBOARD_USER_COUNT_REQUEST:
      return {
        loading: true,
        items: state.items,
        listOfResource: state.listOfResource,
        total: state.total
      };
    case dashboardConstants.GETALL_DASHBOARD_USER_COUNT_SUCCESS:
      return {
        dashboarddata: action.dashboards.dashboarddata,

      };
    case dashboardConstants.GETALL_DASHBOARD_USER_COUNT_FAILURE:
      return {
        error: action.error
      };



    case dashboardConstants.SUB_ADMIN_ADD_SUCCESS:
      return {
        ...state, isAdminAdded: true
      };

    case dashboardConstants.SUB_ADMIN_ADD_FAILURE:
      return {
        ...state
      };
    case dashboardConstants.SUB_ADMIN_DELETE_SUCCESS:
      return {
        ...state, isAdminDeleted: true
      };
    case dashboardConstants.SUB_ADMIN_DELETE_FAILURE:
      return {
        ...state
      };

    case dashboardConstants.GET_RESOUCE_SUCCESS:
      return {

        listOfResource: action.resources.listOfResource,
        items: state.items,
        total: state.total,

      };
    case dashboardConstants.GET_RESOUCE_FAILURE:
      return {
        error: action.error
      };

    case dashboardConstants.SAVE_ASSIGNED_RESOUCE_SUCCESS:
      return {
        ...state, isAssignedResource: true
      };
    case dashboardConstants.SAVE_ASSIGNED_RESOUCE_FAILURE:
      return {
        ...state
      };
    case dashboardConstants.GET_ASSIGNED_RESOUCE_SUCCESS:
      return {
        listOfAssignedResource: action.assignedresources.listOfAssignedResource,
        items: state.items,
        total: state.total
      };
    case dashboardConstants.GET_ASSIGNED_RESOUCE_FAILURE:
      return {
        error: action.error,
        listOfAssignedResource: [],
        ...state
      };

    case dashboardConstants.UPDATE_STATUS_REQUEST:
      return {
        loading: true,
        items: state.items,
        listOfResource: state.listOfResource,
        total: state.total
      };
    case dashboardConstants.UPDATE_STATUS_SUCCESS:
      return {
        isStatusUpdated: true,
        items: state.items,
        listOfResource: state.listOfResource,
        total: state.total
      };
    case dashboardConstants.UPDATE_STATUS_FAILURE:
      return {
        error: action.error,
        items: state.items,
        listOfResource: state.listOfResource,
        total: state.total
      };
    default:
      return state
  }
}