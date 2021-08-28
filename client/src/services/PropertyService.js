import {
  GetPropertyListSuccess,
  GetPropertyListError,
  GetPropertyDetailSuccess,
  GetPropertyDetailError,
  PostPropertySuccess,
  PostPropertyError,
} from "../redux/actions/PropertyAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import propertyList from '../utils/property-list.json';

/**
 * ****** Service to fetch Property List
 */
export const PropertyListService = async (dispatch, data) => {
  // const result2 = propertyList;
  // dispatch(GetPropertyListSuccess(result2));
  try {
    const result1 = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.PROPERTY_LIST_CLIENT,
      null,
      null,
      null,
      true
    );
    const result = propertyList;
    dispatch(GetPropertyListSuccess(result1.data.list));
  } catch (error) {
    dispatch(GetPropertyListError(error));
  }
};

/**
 * Service to fetch Property detail
 */
export const PropertyDetailService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.PROPERTY_DETAIL, data, null, null, true);
    dispatch(GetPropertyDetailSuccess(result));
  } catch (error) {
    dispatch(GetPropertyDetailError(error));
  }
};

/**
 * Service to post new property
 */
export const PostPropertyService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.POST_PROPERTY_ENDPOINT, data, null, null, true);
    dispatch(PostPropertySuccess(result));
  } catch (error) {
    dispatch(PostPropertyError(error));
  }
}

export const AddPropertyService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ADD_PROPERTY, data, null, null, true);
    dispatch(PostPropertySuccess(result));
  } catch (error) {
    dispatch(PostPropertyError(error));
  }
}

export const UploadPropertyImageService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.UPLOAD_IMAGE, data, null, null, true);
    dispatch(PostPropertySuccess(result));
  } catch (error) {
    dispatch(PostPropertyError(error));
  }
}


