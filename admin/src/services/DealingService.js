import * as DealingAction from "../redux/actions/DealingAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const DealingListService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.DEALING_LIST_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(DealingAction.DealingListSuccess(result));
  } catch (error) {
    dispatch(DealingAction.DealingListError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const DealingAddService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.DEALING_ADD_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(DealingAction.DealingAddSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push("/Dealing");
    window.location.reload();
  } catch (error) {
    dispatch(DealingAction.DealingAddError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const DealingStatusUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.DEALING_STATUS_UPDATE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(DealingAction.DealingUpdateStatusSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(DealingAction.DealingUpdateStatusError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const DealingDeleteService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.DEALING_DELETE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(DealingAction.DealingDeleteSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(DealingAction.DealingDeleteError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};
