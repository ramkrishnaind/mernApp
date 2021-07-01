import { ordersConstants } from "../_constants";
import { ordersService } from "../_services";
import { alertActions } from ".";
export const ordersActions = {
  addOrder,
  disableOrder,
  deleteOrder,
  updateOrder,
  getAllOrder,
  getOrderList,
  getOrderByUserId,
};
function getOrderByUserId(data) {
  return (dispatch) => {
    dispatch(request());
    ordersService.getOrderByUserId(data).then(
      (ordersByUser) => dispatch(success(ordersByUser)),
      (error) => {
        dispatch(alertActions.error(error));
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: ordersConstants.GETALL_ORDERSBYUSERID_REQUEST };
  }
  function success(ordersByUser) {
    return {
      type: ordersConstants.GETALL_ORDERSBYUSERID_SUCCESS,
      ordersByUser,
    };
  }
  function failure(error) {
    return { type: ordersConstants.GETALL_ORDERSBYUSERID_FAILURE, error };
  }
}
function getOrderList(data) {
  return (dispatch) => {
    dispatch(request());
    ordersService.getOrderList(data).then(
      (orders) => dispatch(success(orders)),
      (error) => {
        dispatch(alertActions.error(error));
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: ordersConstants.GETALL_ORDERS_REQUEST };
  }
  function success(orders) {
    return { type: ordersConstants.GETALL_ORDERS_SUCCESS, orders };
  }
  function failure(error) {
    return { type: ordersConstants.GETALL_ORDERS_FAILURE, error };
  }
}
function getAllOrder(data) {
  return (dispatch) => {
    dispatch(request());
    ordersService.getAllOrder(data).then(
      (orders) => {
        let returnResppnse = orders.getAllOrder
          ? orders.getAllOrder.map((user) => ({
              value: user.id,
              label: user.name,
            }))
          : [];
        let newRespnse = { ...orders, getAllOrder: returnResppnse };
        dispatch(success(newRespnse));
      },
      (error) => {
        dispatch(alertActions.error(error));
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: ordersConstants.GETALL_OPT_ORDERS_REQUEST };
  }
  function success(orders) {
    return { type: ordersConstants.GETALL_OPT_ORDERS_SUCCESS, orders };
  }
  function failure(error) {
    return { type: ordersConstants.GETALL_OPT_ORDERS_FAILURE, error };
  }
}
function addOrder(data) {
  let tempdata = {
    keyWord: "",
    pageNo: 1,
    size: 10,
  };
  return (dispatch) => {
    dispatch(request());
    ordersService.addOrder(data).then(
      (orders) => {
        dispatch(success(orders));
        dispatch(this.getOrderList(tempdata));
      },
      (error) => {
        dispatch(alertActions.error(error));
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: ordersConstants.ADD_ORDERS_REQUEST };
  }
  function success(orders) {
    return { type: ordersConstants.ADD_ORDERS_SUCCESS, orders };
  }
  function failure(error) {
    return { type: ordersConstants.ADD_ORDERS_FAILURE, error };
  }
}
function updateOrder(data) {
  let tempdata = {
    keyWord: "",
    pageNo: 1,
    size: 10,
  };
  return (dispatch) => {
    dispatch(request());
    ordersService.updateOrder(data).then(
      (orders) => {
        dispatch(success(orders));
        dispatch(this.getOrderList(tempdata));
      },
      (error) => {
        dispatch(alertActions.error(error));
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: ordersConstants.UPDATE_ORDERS_REQUEST };
  }
  function success(orders) {
    return { type: ordersConstants.UPDATE_ORDERS_SUCCESS, orders };
  }
  function failure(error) {
    return { type: ordersConstants.UPDATE_ORDERS_FAILURE, error };
  }
}
function disableOrder(data) {
  let tempdata = {
    keyWord: "",
    pageNo: 1,
    size: 10,
    userId:data.userId
  };
  let maintempdata = {
    id: data.id,
    // status:data.status
  };
  return (dispatch) => {
    dispatch(request());
    ordersService.disableOrder(maintempdata).then(
      (orders) => {
        dispatch(success(orders));
        dispatch(this.getOrderByUserId(tempdata));
      },
      (error) => {
        dispatch(alertActions.error(error));
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: ordersConstants.DISABLE_ORDERS_REQUEST };
  }
  function success(orders) {
    return { type: ordersConstants.DISABLE_ORDERS_SUCCESS, orders };
  }
  function failure(error) {
    return { type: ordersConstants.DISABLE_ORDERS_FAILURE, error };
  }
}
function deleteOrder(data) {
  let tempdata = {
    keyWord: "",
    pageNo: 1,
    size: 10,
    userId:data.userId
  };
  let maintempdata = {
    id: data.id,
  };
  return (dispatch) => {
    dispatch(request());
    ordersService.deleteOrder(maintempdata).then(
      (orders) => {
        dispatch(success(orders));
        dispatch(this.getOrderByUserId(tempdata));
      },
      (error) => {
        dispatch(alertActions.error(error));
        dispatch(failure(error));
      },
    );
  };
  function request() {
    return { type: ordersConstants.DELETE_ORDERS_REQUEST };
  }
  function success(orders) {
    return { type: ordersConstants.DELETE_ORDERS_SUCCESS, orders };
  }
  function failure(error) {
    return { type: ordersConstants.DELETE_ORDERS_FAILURE, error };
  }
}
