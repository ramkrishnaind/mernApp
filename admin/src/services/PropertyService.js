import * as PropertyAction from "../redux/actions/PropertyAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const PropertyListService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.GET,
      API_ENDPOINTS.PROPERTY_LIST_ENDPOINT,
      null,
      null,
      null,
      false
    );
    dispatch(PropertyAction.PropertyListSuccess(result));
  } catch (error) {
    dispatch(PropertyAction.PropertyListError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const PropertyAddService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.PROPERTY_ADD_ENDPOINT, data, null, null, true);
    dispatch(PropertyAction.PropertyAddSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push('/property')
    window.location.reload();
  } catch (error) {
    dispatch(PropertyAction.PropertyAddError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};


export const PropertyStatusUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.PROPERTY_STATUS_UPDATE_ENDPOINT, data, null, null, true);
    dispatch(PropertyAction.PropertyUpdateStatusSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(PropertyAction.PropertyUpdateStatusError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
}

export const PropertyUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.PROPERTY_UPDATE_ENDPOINT, data, null, null, true);
    dispatch(PropertyAction.PropertyUpdateSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push('/property')
    window.location.reload();
  } catch (error) {
    dispatch(PropertyAction.PropertyUpdateError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
}

export const PropertyDeleteService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.PROPERTY_DELETE_ENDPOINT, data, null, null, true);
    dispatch(PropertyAction.PropertyDeleteSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(PropertyAction.PropertyDeleteError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
}

export const PropertyDataService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.PROPERTY_DATA_ENDPOINT, data, null, null, true);
    dispatch(PropertyAction.PropertyDataSuccess(result));
  } catch (error) {
    dispatch(PropertyAction.PropertyDataError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
}
