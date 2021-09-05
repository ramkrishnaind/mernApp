import * as ServiceAction from "../redux/actions/ServiceAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const ServiceListService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.SERVICE_LIST_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(ServiceAction.ServiceListSuccess(result));
  } catch (error) {
    dispatch(ServiceAction.ServiceListError(error));
    dispatch(Snackbar.showFailSnackbar(error.response?.data?.message));
  }
};

export const ServiceAddService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.SERVICE_ADD_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(ServiceAction.ServiceAddSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push("/service");
    window.location.reload();
  } catch (error) {
    dispatch(ServiceAction.ServiceAddError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const ServiceStatusUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.SERVICE_STATUS_UPDATE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(ServiceAction.ServiceUpdateStatusSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(ServiceAction.ServiceUpdateStatusError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const ServiceDeleteService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.SERVICE_DELETE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(ServiceAction.ServiceDeleteSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(ServiceAction.ServiceDeleteError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};
