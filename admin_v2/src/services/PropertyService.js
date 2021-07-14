import { GetPropertyListSuccess, GetPropertyListError } from "../redux/actions/PropertyAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";

export const PropertyListService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.GET,
      API_ENDPOINTS.LOGIN_ENDPOINT,
      null,
      null,
      null,
      false
    );
    dispatch(GetPropertyListSuccess(result));
  } catch (error) {
    dispatch(GetPropertyListError(error));
  }
};
