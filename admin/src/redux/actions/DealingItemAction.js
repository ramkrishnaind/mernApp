import ACTION_KEYS from "../../constants/action-keys";
import {
  DealingItemListService,
  DealingItemAddService,
  DealingItemStatusUpdateService,
  DealingItemDeleteService,
} from "../../services/DealingItemService";

/**
 * Call by the Component to make Login Request
 * @param {*} data
 * @returns
 */
export const DealingItemListRequestAsync = (data) => {
  return (dispatch) => {
    dispatch(DealingItemListRequest());
    DealingItemListService(dispatch, data);
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const DealingItemListRequest = () => {
  return {
    type: ACTION_KEYS.DEALING_ITEM_LIST_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const DealingItemListSuccess = (data) => {
  return {
    type: ACTION_KEYS.DEALING_ITEM_LIST_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const DealingItemListError = (data) => {
  return {
    type: ACTION_KEYS.DEALING_ITEM_LIST_ERROR,
    payload: { error: data },
  };
};

export const DealingItemAddRequestAsync = (data) => {
  // console.log('data',data);
  return (dispatch) => {
    dispatch(DealingItemAddRequest());
    DealingItemAddService(dispatch, data);
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const DealingItemAddRequest = () => {
  return {
    type: ACTION_KEYS.DEALING_ITEM_ADD_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const DealingItemAddSuccess = (data) => {
  return {
    type: ACTION_KEYS.DEALING_ITEM_ADD_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const DealingItemAddError = (data) => {
  return {
    type: ACTION_KEYS.DEALING_ITEM_ADD_ERROR,
    payload: { error: data },
  };
};

export const DealingItemStatusUpdateRequestAsync = (data) => {
  // console.log('data',data);
  return (dispatch) => {
    dispatch(DealingItemUpdateStatusRequest());
    DealingItemStatusUpdateService(dispatch, data);
    dispatch(DealingItemListRequest());
    DealingItemListService(dispatch, "");
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const DealingItemUpdateStatusRequest = () => {
  return {
    type: ACTION_KEYS.DEALING_ITEM_UPDATE_STATUS_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const DealingItemUpdateStatusSuccess = (data) => {
  return {
    type: ACTION_KEYS.DEALING_ITEM_UPDATE_STATUS_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const DealingItemUpdateStatusError = (data) => {
  return {
    type: ACTION_KEYS.DEALING_ITEM_UPDATE_STATUS_ERROR,
    payload: { error: data },
  };
};

export const DealingItemDeleteRequestAsync = (data) => {
  // console.log('data',data);
  return (dispatch) => {
    dispatch(DealingItemDeleteRequest());
    DealingItemDeleteService(dispatch, data);
    dispatch(DealingItemListRequest());
    DealingItemListService(dispatch, "");
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const DealingItemDeleteRequest = () => {
  return {
    type: ACTION_KEYS.DEALING_ITEM_DELETE_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const DealingItemDeleteSuccess = (data) => {
  return {
    type: ACTION_KEYS.DEALING_ITEM_DELETE_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const DealingItemDeleteError = (data) => {
  return {
    type: ACTION_KEYS.DEALING_ITEM_DELETE_ERROR,
    payload: { error: data },
  };
};
