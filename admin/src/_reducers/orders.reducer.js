import { ordersConstants } from "../_constants";

export function orders(state = {}, action) {
  switch (action.type) {
    case ordersConstants.GETALL_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ordersConstants.GETALL_ORDERS_SUCCESS:
      return {
        ...state,
        addOrdersSuccess: false,
        items: action.orders.getOrderList.list,
        total: action.orders.getOrderList.total,
      };
    case ordersConstants.GETALL_ORDERS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case ordersConstants.GETALL_ORDERSBYUSERID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ordersConstants.GETALL_ORDERSBYUSERID_SUCCESS:
      return {
        ...state,
        addOrdersSuccess: false,
        getOrderListByUserId: action.ordersByUser?.getOrderListByUserId,
      };
    case ordersConstants.GETALL_ORDERSBYUSERID_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case ordersConstants.GETALL_OPT_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ordersConstants.GETALL_OPT_ORDERS_SUCCESS:
      return {
        ...state,
        getAllOrders: action.orders.getAllOrders,
      };
    case ordersConstants.GETALL_OPT_ORDERS_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case ordersConstants.ADD_ORDERS_REQUEST:
      return {
        ...state,
      };
    case ordersConstants.ADD_ORDERS_SUCCESS:
      return {
        ...state,
        addOrdersSuccess: true,
      };
    case ordersConstants.ADD_ORDERS_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case ordersConstants.DISABLE_ORDERS_REQUEST:
      return {
        ...state,
      };
    case ordersConstants.DISABLE_ORDERS_SUCCESS:
      return {
        ...state,
        addOrdersSuccess: true,
      };
    case ordersConstants.DISABLE_ORDERS_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case ordersConstants.DELETE_ORDERS_REQUEST:
      return {
        ...state,
      };
    case ordersConstants.DELETE_ORDERS_SUCCESS:
      return {
        ...state,
        addOrdersSuccess: true,
      };
    case ordersConstants.DELETE_ORDERS_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    case ordersConstants.UPDATE_ORDERS_REQUEST:
      return {
        ...state,
      };
    case ordersConstants.UPDATE_ORDERS_SUCCESS:
      return {
        ...state,
        addOrdersSuccess: true,
      };
    case ordersConstants.UPDATE_ORDERS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
