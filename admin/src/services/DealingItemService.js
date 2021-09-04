import * as DealingItemAction from "../redux/actions/DealingItemAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const DealingItemListService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.DEALING_ITEM_LIST_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(DealingItemAction.DealingItemListSuccess(result));
  } catch (error) {
    dispatch(DealingItemAction.DealingItemListError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const DealingItemAddService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.DEALING_ITEM_ADD_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(DealingItemAction.DealingItemAddSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push("/DealingItem");
    window.location.reload();
  } catch (error) {
    dispatch(DealingItemAction.DealingItemAddError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const DealingItemStatusUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.DEALING_ITEM_STATUS_UPDATE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(DealingItemAction.DealingItemUpdateStatusSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(DealingItemAction.DealingItemUpdateStatusError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const DealingItemUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.DEALING_ITEM_UPDATE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(DealingItemAction.DealingItemUpdateSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push("/DealingItem");
    window.location.reload();
  } catch (error) {
    dispatch(DealingItemAction.DealingItemUpdateError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const DealingItemDeleteService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.DEALING_ITEM_DELETE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(DealingItemAction.DealingItemDeleteSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(DealingItemAction.DealingItemDeleteError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const DealingItemDataService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.DEALING_ITEM_DATA_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(DealingItemAction.DealingItemDataSuccess(result));
  } catch (error) {
    dispatch(DealingItemAction.DealingItemDataError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};