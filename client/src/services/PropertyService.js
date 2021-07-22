import {
  GetPropertyListSuccess,
  GetPropertyListError,
  GetPropertyDetailSuccess,
  GetPropertyDetailError,
} from "../redux/actions/PropertyAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import propertyList from '../utils/property-list.json';

export const PropertyListService = async (dispatch, data) => {
  try {
    // const result = await ApiClient.call(
    //   ApiClient.REQUEST_METHOD.GET,
    //   API_ENDPOINTS.LOGIN_ENDPOINT,
    //   null,
    //   null,
    //   null,
    //   false
    // );
    const result2 = propertyList;
    dispatch(GetPropertyListSuccess(result2));
  } catch (error) {
    dispatch(GetPropertyListError(error));
  }
};

export const PropertyDetailService = async (dispatch, data) => {
    try {
      const result = await ApiClient.call(
        ApiClient.REQUEST_METHOD.GET,
        API_ENDPOINTS.LOGIN_ENDPOINT,
        null,
        null,
        null,
        false
      );
      dispatch(GetPropertyDetailSuccess(result));
    } catch (error) {
      dispatch(GetPropertyDetailError(error));
    }
  };
