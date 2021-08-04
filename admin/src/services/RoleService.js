import * as RoleAction from "../redux/actions/RoleAction";
import ApiClient from "../api-client";
import API_ENDPOINTS from "../constants/api-endpoints";
import * as Snackbar from "../redux/actions/snackbarActions";
import history from "../components/history";

export const RoleListService = async (dispatch, data) => {
  const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ROLE_LIST_ENDPOINT, data, null, null, true);
  if (result.status) {
    dispatch(RoleAction.RoleListSuccess(result));
  } else {
    dispatch(RoleAction.RoleListError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
}

export const RoleAddService = async (dispatch, data) => {
  const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ROLE_ADD_ENDPOINT, data, null, null, true);
  if (result.status) {
    dispatch(RoleAction.RoleAddSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push('/role')
    window.location.reload();
  } else {
    dispatch(RoleAction.RoleAddError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
}

export const RoleStatusUpdateService = async (dispatch, data) => {
  const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ROLE_STATUS_UPDATE_ENDPOINT, data, null, null, true);
  if (result.status) {
    dispatch(RoleAction.RoleUpdateStatusSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } else {
    dispatch(RoleAction.RoleUpdateStatusError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
}

export const RoleUpdateService = async (dispatch, data) => {
  const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ROLE_UPDATE_ENDPOINT, data, null, null, true);
  if (result.status) {
    dispatch(RoleAction.RoleUpdateSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
    history.push('/role')
    window.location.reload();
  } else {
    dispatch(RoleAction.RoleUpdateError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
}

export const RoleDeleteService = async (dispatch, data) => {
  const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ROLE_DELETE_ENDPOINT, data, null, null, true);
  if (result.status) {
    dispatch(RoleAction.RoleDeleteSuccess(result));
    dispatch(Snackbar.showSuccessSnackbar(result.message));
  } else {
    dispatch(RoleAction.RoleDeleteError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
}

export const RoleDataService = async (dispatch, data) => {
  const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.ROLE_DATA_ENDPOINT, data, null, null, true);
  if (result.status) {
    dispatch(RoleAction.RoleDataSuccess(result));
  } else {
    dispatch(RoleAction.RoleDataError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
}

export const RoleMenuListService = async (dispatch, data) => {
  const result = await ApiClient.call(ApiClient.REQUEST_METHOD.POST, API_ENDPOINTS.MENULIST_ENDPOINT, data, null, null, true);
  if (result.status) {
    dispatch(RoleAction.RoleMenuListSuccess(result));
  } else {
    dispatch(RoleAction.RoleMenuListError(result));
    dispatch(Snackbar.showFailSnackbar(result.message));
  }
}
