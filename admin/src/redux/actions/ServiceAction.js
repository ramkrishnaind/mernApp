import ACTION_KEYS from "../../constants/action-keys";
import {
  ServiceListService,
  ServiceAddService,
  ServiceStatusUpdateService,
  ServiceDeleteService,
} from "../../services/ServiceService";

/**
 * Call by the Component to make Login Request
 * @param {*} data
 * @returns
 */
export const ServiceListRequestAsync = (data) => {
  return (dispatch) => {
    dispatch(ServiceListRequest());
    ServiceListService(dispatch, data);
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const ServiceListRequest = () => {
  return {
    type: ACTION_KEYS.SERVICE_LIST_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const ServiceListSuccess = (data) => {
  return {
    type: ACTION_KEYS.SERVICE_LIST_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const ServiceListError = (data) => {
  return {
    type: ACTION_KEYS.SERVICE_LIST_ERROR,
    payload: { error: data },
  };
};

export const ServiceAddRequestAsync = (data) => {
  console.log("data", data);
  return (dispatch) => {
    dispatch(ServiceAddRequest());
    ServiceAddService(dispatch, data);
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const ServiceAddRequest = () => {
  return {
    type: ACTION_KEYS.SERVICE_ADD_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const ServiceAddSuccess = (data) => {
  return {
    type: ACTION_KEYS.SERVICE_ADD_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const ServiceAddError = (data) => {
  return {
    type: ACTION_KEYS.SERVICE_ADD_ERROR,
    payload: { error: data },
  };
};

export const ServiceStatusUpdateRequestAsync = (data) => {
  // console.log('data',data);
  return (dispatch) => {
    dispatch(ServiceUpdateStatusRequest());
    ServiceStatusUpdateService(dispatch, data);
    dispatch(ServiceListRequest());
    ServiceListService(dispatch, "");
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const ServiceUpdateStatusRequest = () => {
  return {
    type: ACTION_KEYS.SERVICE_UPDATE_STATUS_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const ServiceUpdateStatusSuccess = (data) => {
  return {
    type: ACTION_KEYS.SERVICE_UPDATE_STATUS_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const ServiceUpdateStatusError = (data) => {
  return {
    type: ACTION_KEYS.SERVICE_UPDATE_STATUS_ERROR,
    payload: { error: data },
  };
};

export const ServiceDeleteRequestAsync = (data) => {
  // console.log('data',data);
  return (dispatch) => {
    dispatch(ServiceDeleteRequest());
    ServiceDeleteService(dispatch, data);
    dispatch(ServiceListRequest());
    ServiceListService(dispatch, "");
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const ServiceDeleteRequest = () => {
  return {
    type: ACTION_KEYS.SERVICE_DELETE_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const ServiceDeleteSuccess = (data) => {
  return {
    type: ACTION_KEYS.SERVICE_DELETE_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const ServiceDeleteError = (data) => {
  return {
    type: ACTION_KEYS.SERVICE_DELETE_ERROR,
    payload: { error: data },
  };
};
