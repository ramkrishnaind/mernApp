import * as PropertyAction from "../redux/actions/PropertyAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";

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
    dispatch(PropertyAction.GetPropertyListSuccess(result));
  } catch (error) {
    dispatch(PropertyAction.GetPropertyListError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const PropertyAddService = async (dispatch, data) => {
  try {
    console.log("data ::", data);
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.PROPERTY_ADD_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(PropertyAction.PropertyAddSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(PropertyAction.PropertyAddError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};
