import ACTION_KEYS from "../../constants/action-keys";
import {
  PropertyListService,
  PropertyAddService,
} from "../../services/PropertyService";

export const GetPropertyList = () => {
  return {
    type: ACTION_KEYS.PROPERTY_LIST_REQUEST,
    payload: null,
  };
};

export const GetPropertyListRequestAsync = (data) => {
  return (dispatch) => {
    dispatch(GetPropertyList());
    PropertyListService(dispatch, data);
  };
};

export const GetPropertyListSuccess = () => {
  return {
    type: ACTION_KEYS.PROPERTY_LIST_SUCCESS,
    payload: null,
  };
};

export const GetPropertyListError = () => {
  return {
    type: ACTION_KEYS.PROPERTY_LIST_ERROR,
    payload: null,
  };
};

export const PropertyAddRequestAsync = (data) => {
  // console.log('data',data);
  return (dispatch) => {
    dispatch(PropertyAddRequest());
    PropertyAddService(dispatch, data);
  };
};

/**
 * Action Creator to dispatch login action
 * @returns
 */
const PropertyAddRequest = () => {
  return {
    type: ACTION_KEYS.PROPERTY_ADD_REQUEST,
    payload: null,
  };
};

/**
 * Action Creator to dispatch Success
 * @param {*} data
 * @returns
 */
export const PropertyAddSuccess = (data) => {
  return {
    type: ACTION_KEYS.PROPERTY_ADD_SUCCESS,
    payload: data,
  };
};

/**
 * Action Creator to dispatch error
 * @param {*} data
 * @returns
 */
export const PropertyAddError = (data) => {
  return {
    type: ACTION_KEYS.PROPERTY_ADD_ERROR,
    payload: { error: data },
  };
};
