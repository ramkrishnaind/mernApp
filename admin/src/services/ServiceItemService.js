import * as ServiceItemAction from "../redux/actions/ServiceItemAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const ServiceItemListService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.SERVICE_ITEM_LIST_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(ServiceItemAction.ServiceItemListSuccess(result));
  } catch (error) {
    dispatch(ServiceItemAction.ServiceItemListError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const ServiceItemAddService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.SERVICE_ITEM_ADD_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(ServiceItemAction.ServiceItemAddSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push("/ServiceItem");
    window.location.reload();
  } catch (error) {
    dispatch(ServiceItemAction.ServiceItemAddError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const ServiceItemStatusUpdateService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.SERVICE_ITEM_STATUS_UPDATE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(ServiceItemAction.ServiceItemUpdateStatusSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(ServiceItemAction.ServiceItemUpdateStatusError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};

export const ServiceItemDeleteService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.SERVICE_ITEM_DELETE_ENDPOINT,
      data,
      null,
      null,
      true
    );
    dispatch(ServiceItemAction.ServiceItemDeleteSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } catch (error) {
    dispatch(ServiceItemAction.ServiceItemDeleteError(error));
    dispatch(Snackbar.showFailSnackbar(error.response.data.message));
  }
};
