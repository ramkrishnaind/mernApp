import ACTION_KEYS from "../../constants/action-keys";
import {
  DealingListService,
  DealingAddService,
  DealingStatusUpdateService,
  DealingDeleteService,
} from "../../services/DealingService";
import * as Loader from "./LoaderActions";

/**
 * Call by the Component to make Login Request
 * @param {*} data
 * @returns
 */
export const DealingListRequestAsync = (data) => {
  return (dispatch) => {
    dispatch(Loader.showLoader(""));
    dispatch(DealingListRequest());
    DealingListService(dispatch, data);
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const DealingListRequest = () => {
  return {
    type: ACTION_KEYS.DEALING_LIST_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const DealingListSuccess = (data) => {
  return {
    type: ACTION_KEYS.DEALING_LIST_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const DealingListError = (data) => {
  return {
    type: ACTION_KEYS.DEALING_LIST_ERROR,
    payload: { error: data },
  };
};

export const DealingAddRequestAsync = (data) => {
  // console.log('data',data);
  return (dispatch) => {
    dispatch(Loader.showLoader(""));
    dispatch(DealingAddRequest());
    DealingAddService(dispatch, data);
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const DealingAddRequest = () => {
  return {
    type: ACTION_KEYS.DEALING_ADD_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const DealingAddSuccess = (data) => {
  return {
    type: ACTION_KEYS.DEALING_ADD_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const DealingAddError = (data) => {
  return {
    type: ACTION_KEYS.DEALING_ADD_ERROR,
    payload: { error: data },
  };
};

export const DealingStatusUpdateRequestAsync = (data) => {
  // console.log('data',data);
  return (dispatch) => {
    dispatch(Loader.showLoader(""));
    dispatch(DealingUpdateStatusRequest());
    DealingStatusUpdateService(dispatch, data);
    dispatch(DealingListRequest());
    DealingListService(dispatch, "");
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const DealingUpdateStatusRequest = () => {
  return {
    type: ACTION_KEYS.DEALING_UPDATE_STATUS_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const DealingUpdateStatusSuccess = (data) => {
  return {
    type: ACTION_KEYS.DEALING_UPDATE_STATUS_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const DealingUpdateStatusError = (data) => {
  return {
    type: ACTION_KEYS.DEALING_UPDATE_STATUS_ERROR,
    payload: { error: data },
  };
};

export const DealingDeleteRequestAsync = (data) => {
  // console.log('data',data);
  return (dispatch) => {
    dispatch(Loader.showLoader(""));
    dispatch(DealingDeleteRequest());
    DealingDeleteService(dispatch, data);
    dispatch(DealingListRequest());
    DealingListService(dispatch, "");
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const DealingDeleteRequest = () => {
  return {
    type: ACTION_KEYS.DEALING_DELETE_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const DealingDeleteSuccess = (data) => {
  return {
    type: ACTION_KEYS.DEALING_DELETE_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const DealingDeleteError = (data) => {
  return {
    type: ACTION_KEYS.DEALING_DELETE_ERROR,
    payload: { error: data },
  };
};
